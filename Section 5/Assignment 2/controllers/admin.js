const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /> <button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/edit-product', { pageTitle: 'Add Product', path: '/admin/add-product', editing: false });
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    if (!editMode) return res.redirect('/');
    Product.findById(prodId, product => {
        if (!product) return res.redirect('/');
        res.render('admin/edit-product', { pageTitle: 'Edit Product', path: '/admin/edit-product', editing: editMode, product: product });
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', { prods: products, pageTitle: 'Admin Products', path: '/admin/products' });
    });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price
    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
    updatedProduct.save();
    res.redirect('/admin/products');
}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.deleteProductById(prodId);
    res.redirect('/admin/products');
}

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /> <button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { title: 'Add Product', path: '/admin/add-product', formsCSS: true, productsCSS: true, activeProduct: true });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll(products => {
        res.render('shop', { prods: products, title: 'My Shop', path: '/', formsCSS: true, productsCSS: true, activeProduct: true });
    });

}
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll(products => {
        res.render('shop/product-list', { prods: products, pageTitle: 'All Products', path: '/products', formsCSS: true, productsCSS: true, activeProduct: true });
    });
}

exports.getProductDetails = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', { product: product, pageTitle: product.title, path: '/shop/product-detail', formsCSS: true, productsCSS: true, activeProduct: true });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { prods: products, pageTitle: 'My Shop', path: '/', formsCSS: true, productsCSS: true, activeProduct: true });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Your Cart', path: '/cart' });
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
        res.render('shop/cart', { product: product, pageTitle: 'Your Cart', path: '/cart' });
    });
    
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Your Orders', path: '/orders' });
}

exports.getAddToCart = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Your Orders', path: '/orders' });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' });
}
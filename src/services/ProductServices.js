const productModel = require('../models/Product');

exports.getAllProducts = async () => {
    const products = await productModel.find();
    return products;
};

exports.getProductById = async (id) => {
    const product = await productModel.findById(id);
    return product;
};  
exports.createProduct = async (data) => {
    const newProduct = new productModel(data);
    await newProduct.save();
    return newProduct;
};
exports.updateProduct = async (id, data) => {
    const updatedProduct = await productModel.findBy
IdAndUpdate(id, data, { new: true });
    return updatedProduct;
};
exports.deleteProduct = async (id) => {
    await productModel.findByIdAndDelete(id);
};
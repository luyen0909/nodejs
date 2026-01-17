const categoryModel = require('../models/Category');

exports.getAllCategories = async () => {
    const categories = await categoryModel.find();
    return categories;
};

exports.getCategoryById = async (id) => {
    const category = await categoryModel.findById(id);
    return category;
};
exports.createCategory = async (data) => {
    const newCategory = new categoryModel(data);
    await newCategory.save();
    return newCategory;
};
exports.updateCategory = async (id, data) => {
    const updatedCategory = await categoryModel.findByIdAndUpdate(id, data, { new: true });
    return updatedCategory;
};
exports.deleteCategory = async (id) => {
    await categoryModel.findByIdAndDelete(id);
};

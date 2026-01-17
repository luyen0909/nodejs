const userModel = require('../models/User');

exports.getAllUsers = async () => {
    const users = await userModel.find().lean();
    return users;
};

exports.getUserById = async (id) => {
    const user = await userModel.findById(id).lean();
    return user;
};
exports.createUser = async (data) => {
    const newUser = new userModel(data);
    await newUser.save();
    return newUser;
}
;
exports.updateUser = async (id, data) => {
    const updatedUser = await userModel.findByIdAndUpdate(id, data, { new: true });
    return updatedUser;
};
exports.deleteUser = async (id) => {
    await userModel.findByIdAndDelete(id);
};
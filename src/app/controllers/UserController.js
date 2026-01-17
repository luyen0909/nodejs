const UserService = require('../../services/UserServices');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.render('home', { users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.showCreateForm = (req, res) => {
    res.render('createUser');
};

exports.createUser = async (req, res) => {
    try {
        await UserService.createUser(req.body);
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.render('viewUser', { user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showEditForm = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.render('editUser', { user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        await UserService.updateUser(req.params.id, req.body);
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await UserService.deleteUser(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

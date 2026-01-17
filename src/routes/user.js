var express = require('express');
var router = express.Router();
const UserController = require('../app/controllers/UserController');

router.get('/', UserController.getAllUsers);
router.get('/create', UserController.showCreateForm);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.get('/:id/edit', UserController.showEditForm);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
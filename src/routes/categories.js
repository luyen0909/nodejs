var express = require('express');
var router = express.Router();
const CategoryController = require('../app/controllers/CategoryController');

router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post('/', CategoryController.createCategory);

router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;

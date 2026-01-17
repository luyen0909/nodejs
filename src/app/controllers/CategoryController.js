const CategoryService = require('../../services/CategoryServices');


// GET /api/categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /api/categories
exports.createCategory = async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT /api/categories/:id
exports.updateCategory = async (req, res) => {
    try {
        const updated = await CategoryService.updateCategory(
            req.params.id,
            req.body
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE /api/categories/:id
exports.deleteCategory = async (req, res) => {
    try {
        await CategoryService.deleteCategory(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getCategoryById = async (req, res) => {
    try {
        const category = await CategoryService.getCategoryById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json(category);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID' });
    }
};
exports.post = async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.put = async (req, res) => {
    try {
        const updated = await CategoryService.updateCategory(
            req.params.id,
            req.body
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await CategoryService.deleteCategory(req.params.id);    
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.get = async (req, res) => {
    try {
        const category = await CategoryService.getCategoryById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }   
        res.json(category);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID' });
    }
};
exports.getAll = async (req, res) => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.create = async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true,default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    description: { type: String, required: true},
    img: { type: String, required: true },
    categoryId: { type:ObjectId, ref: 'Category', },
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
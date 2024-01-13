const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String, required: true },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    imageUrl: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
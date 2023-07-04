import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema({
    name: String,
    path: String,
})

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Field "title" is required.']
    },
    category: {
        type: String,
        required: [true, 'Field "category" is required.']
    },
    description: {
        type: String,
        required: [true, 'Field "description" is required.']
    },
    price: {
        type: Number,
        required: [true, 'Field "price" is required.']
    },
    user: {
        id: String,
        name: String,
        email: String,
        phone: String,
        image: String,
    },
    files: {
        type: [filesSchema],
        default: undefined,
    }
})

export default mongoose.models.products || mongoose.model('products', schema)
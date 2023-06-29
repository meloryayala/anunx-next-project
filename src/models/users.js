import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Field "name" is required.']
    },
    email:{
        type: String,
        required: [true, 'Field "e-mail" is required.']
    },
    password:{
        type: String,
        required: [true, 'Field "password" is required.']
    },
})

export default mongoose.models.users || mongoose.model('users', schema)
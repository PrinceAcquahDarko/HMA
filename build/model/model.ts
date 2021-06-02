import mongoose from 'mongoose';
const {Schema} = mongoose

const registerModel = new Schema({
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    position: {type:String, required: true},
})


module.exports = mongoose.model('Register', registerModel)
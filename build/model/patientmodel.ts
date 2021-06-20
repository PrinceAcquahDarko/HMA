import mongoose from 'mongoose';
const {Schema} = mongoose

const patientModel = new Schema({
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    contact: {type:Number, required: true},
    address: {type:String, required: true},
    key: {type: String, required: true}
})


module.exports = mongoose.model('Patient', patientModel)
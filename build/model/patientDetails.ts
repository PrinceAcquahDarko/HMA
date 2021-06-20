import mongoose from 'mongoose';
const {Schema} = mongoose

const patientDetailsModel = new Schema({
    getDrugs: {type:String},
    postDrugs: {type:String},
    postLab: {type:String},
    getLab: {type:String},
    symptoms: {type:String},
    illness: {type: String},
    appearance: {type: {
        temperature: Number, weight: Number, height: Number, bloodLevel: Number
    }},
    key: {type: String, required: true},
    nhis: {type: Boolean, required: true},
    done: {type: Boolean},
    payment: {type: Number}
})


module.exports = mongoose.model('PatientDetails', patientDetailsModel)
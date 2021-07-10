import mongoose from 'mongoose';
const {Schema} = mongoose

const patientDetailsModel = new Schema({
    getDrugs: {type:String},
    postDrugs: {type:String},
    postLab: {type:String},
    getLab: {type:String},
    symptoms: {type:String},
    illness: {type: String},
    temperature: {type: String}, 
    weight: {type: String},
    height: {type: String},
    bloodLevel: {type: String},
    key: {type: String, required: true},
    nhis: {type: Boolean, required: true},
    done: {type: Boolean},
    pharmAmount: {type: Number},
    labAmount: {type: Number},
    amounPaidt: {type: Number},
    paid: {type: Boolean}
})


module.exports = mongoose.model('PatientDetails', patientDetailsModel)
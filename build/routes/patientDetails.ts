import express from 'express'
const patientRouter = express.Router()
import {PatientDetails} from "../controllers/patientDetails"

let patient = new PatientDetails()

function Router(){
    patientRouter.route('/')
        .post(patient.intializePatient)
        .get(patient.getAllPatients)
        
    patientRouter.route('/patient')
        .put(patient.populateData)
        .get(patient.getData)
   

    return patientRouter
}

export default Router()
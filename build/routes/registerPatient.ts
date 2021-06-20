import express from 'express'
const registerRouter = express.Router()
import {PatientRegistration} from "../controllers/patientRegistration"
import {Authorization} from "../controllers/auth"

let patient = new PatientRegistration()
let auth = new Authorization()

function Router(){
    registerRouter.route('/')
        .post(auth.ifToken, patient.savePatient)
   

    return registerRouter
}

export default Router()
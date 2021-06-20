import express from 'express'
const Patient = require('../model/patientmodel')


export class PatientRegistration {

    constructor(){ this.savePatient = this.savePatient.bind(this)}
    
    savePatient(req: express.Request, res: express.Response): void{
        let lastthree = req.body.lastname.slice(-3)
        let lastthreeofNum = req.body.contact.toString().slice(-3)
        let key = lastthree + lastthreeofNum
        req.body.key = key

        this.implementSave(req, res)
        
    }

    implementSave(req: express.Request, res: express.Response): void {
        let patient = new Patient(req.body)
        patient.save((err: any, data: any) => {
            if(err)
                 return res.status(400).send({ message:"Ops sorry please try again"})
            return res.status(200).send({key: data.key, message: 'Patient registered successfully'})

        })
    }
}
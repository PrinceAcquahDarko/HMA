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

    getAllPatients(req: express.Request, res: express.Response): void{
        Patient.find( (err: any, users: any) => {
            if(err)
                return res.status(400).json({"message":"Ops sorry please try again"})
   
            return res.status(200).send({message:"user found", users})

        })
        
    }

    getPatientById(req: express.Request, res: express.Response): void{
        Patient.find({key: req.query.key}, (err: any, user: any) => {
            if(err)
                return res.status(400).json({"message":"Ops sorry please try again"})
            return res.status(200).send({message:"user found", user})

        })
    }

    deleteUser(req: express.Request, res: express.Response): void{
        Patient.findByIdAndDelete({_id: req.query.id}, function (err: any) {
            if(err) 
                return res.status(400).json({"message":"Ops sorry please try again"})

                return res.status(200).json({"done":"successfully deleted"})

          });
        }
}
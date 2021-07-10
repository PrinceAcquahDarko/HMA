import express from 'express';
const Patientdetials = require('../model/patientDetails')

export class PatientDetails {

    constructor(){}

    intializePatient(req: express.Request, res: express.Response): void{
        req.body.done = false
        let details =  new Patientdetials(req.body);
        details.save((err: any, data: any) => {
            if(err)
                 return res.status(400).json({ "message":"Ops sorry please try again"})
            return res.status(200).send({  message: 'done'})
        })
    }

    populateData(req: express.Request, res: express.Response): void{

        const filter = {key: req.query.key, done: false}
        const update = req.body;
        console.log(update)

        Patientdetials.findOneAndUpdate(filter, update, {
            new: true
        }, (err: any, data: any) => {
            if(err)
                return res.status(400).json({ "message":"Ops sorry please try again"})
            console.log(data)
            return res.status(200).send({ message: 'data saved successfully'})
        })
    }


    getData(req: express.Request, res: express.Response): void{
        Patientdetials.findOne({key: req.query.key, done: false}, (err: any, user: any)=> {
            if(err)
                return res.status(400).json({ "message":"Ops sorry please try again"})
            if(!user)
                 return res.status(200).send({ message: 'no such user with that key'})
            return res.status(200).send({user, message: 'user found'})
                
        })

    }


    getAllPatients(req: express.Request, res: express.Response): void {
        Patientdetials.find((err: any , users: any)=> {
            if(err)
                return res.status(400).json({ "message":"Ops sorry please try again"})
            return res.status(200).send({users, message: 'succesfull'})

        })
    }
}
import express from 'express';
const Patientdetials = require('../model/patientDetails')

export class PatientDetails {

    constructor(){}

    intializePatient(req: express.Request, res: express.Response): void{
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

        Patientdetials.findOneAndUpdate(filter, update, {
            new: true
        }, (err: any, data: any) => {
            if(err)
                return res.status(400).json({ "message":"Ops sorry please try again"})
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
}
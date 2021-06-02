import express from 'express'
import { IstaffRegistration } from '../../interface'
import {StaffRegistration} from '../validations/staffRegitstration'
const Register = require('../model/model')
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken');

export function Controller() {
    function saveUser(req: express.Request, res:express.Response){
        let user = new StaffRegistration(req.body)
        if(user.allValid()){
            implementSave(req.body, res)
        }else{
            return res.status(400).send({message: 'problem with your form'})
        }
    }
    function implementSave(data:IstaffRegistration, res: express.Response){
        let secret = 'jfoejfoe'
        data.password = bcrypt.hashSync(data.password, 8);
        let user = new Register(data)
        user.save((err:any, User:any)=> {
            if(err)
                return res.status(400)
            console.log(user)
            let token = jwt.sign({id: User._id}, secret)
            return res.status(200).send({token, message: 'You been registered successfully'})
        })
    }

    return {saveUser, implementSave}
}



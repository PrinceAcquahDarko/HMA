import express from 'express'
import { Ilogin } from "../../interface";
let register = require('../model/model')
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken');  



export class StaffLogin {
    
    data: Ilogin = {
        email: '',
        password: '',
    }
    constructor(){}

    loginUser(req: express.Request, res: express.Response): void{
        //when i want to reference this.data in this func it doesnt work oo bro
        
        // this.data = req.body

        //even when i set the secret as a property on the class(i'll move it to the .env later) and reference it in this method 
        //it doenst work oo when it compiles it tells me this.data is undefined
        let secret:string = 'foefjeo'
        register.findOne({email: req.body.email}, (err: any, user: any)=> {
            if(err)
                return res.status(400).send({message: 'unable to connect pls try again later'})
            if(!user)
                return res.status(200).send({message: 'no such email in our database'})
            bcrypt.compare(req.body.password, user.password, (err: any, isMatch: any) => {
                if(!isMatch)
                    return res.status(200).send({message: 'passwords dont much'})
                let token = jwt.sign({id: user._id}, secret)
                res.status(200).send({message: 'login successful', token})
            })
        })
    }


}
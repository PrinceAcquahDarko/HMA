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
    secret:string = 'foefjeo'

    constructor(){this.loginUser = this.loginUser.bind(this)}

    loginUser(req: express.Request, res: express.Response): void{
        
        this.data = req.body

      
     register.findOne({email: this.data.email}, (err: any, user: any)=> {
            if(err)
                return res.status(400).send({ message:"Ops sorry please try again"})
            if(!user)
                return res.status(200).send({ message:"no such user in our database"})
            bcrypt.compare(this.data.password, user.password, (err: any, isMatch: any) => {
                if(!isMatch)
                    return res.status(200)
                let token = jwt.sign({id: user._id}, this.secret)
                res.status(200).send({ auth: true, message:"successful"})
            })
        })
    }



}
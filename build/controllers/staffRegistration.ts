import express from 'express'
import { IstaffRegistration } from '../../interface'
import {StaffRegistration} from '../validations/staffRegitstration'
const Register = require('../model/model')
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken');
require('dotenv').config();



export class RegisterStaff{
    
    private _data = {
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        position: ''
    }
    get data(): IstaffRegistration{
        return this._data
    }

    set data(data){
        this._data.email = data.email;
        this._data.firstname = data.firstname,
        this._data.lastname = data.lastname,
        this._data.position = data.position,
        this._data.password = data.passwordGroup.password
    }
    secret = process.env.SECRETE_KEY
    constructor(){this.saveUser = this.saveUser.bind(this)}

    saveUser(req: express.Request, res:express.Response){
        this.data = req.body
        let user = new StaffRegistration(this.data)
        if(user.allValid()){
            this.implementSave(req.body, res)
        }else{
            return res.status(400).send({ message:"Ops sorry please try again"})
        }
    }

     implementSave(data:IstaffRegistration, res: express.Response){
  
        data.password = bcrypt.hashSync(this.data.password, 8);
        let user = new Register(data)
        user.save((err:any, User:any)=> {
            if(err)
                return res.status(400).send({ message:"Ops sorry please try again"})

            let token = jwt.sign({id: User._id}, this.secret)
            let fullname = user.firstname + ' ' + user.lastname
            return res.status(200).send({message: 'registered successfully', token, auth: true, position: user.position, fullname})
        })
    }

    getUser(req: express.Request, res: express.Response):void{
        Register.find({_id: req.query.id}, (err: any, user: any) => {
            if(err)
                return res.status(400).json({"message":"Ops sorry please try again"})
            if(!user)
                return res.status(200).json({"message":"not authorized"})
            return res.status(200).send({message:"user found", user})



        })
    }

    getAllUsers(req: express.Request, res: express.Response):void{
        Register.find( (err: any, users: any) => {
            if(err)
                return res.status(400).json({"message":"Ops sorry please try again"})
   
            return res.status(200).send({message:"user found", users})

        })
    }

    updateUser(req: express.Request, res: express.Response): void{
        Register.findOne({_id: req.query.id}, (err: any, user: any) => {
            if(err)
                return res.status(400).json({"message":"Ops sorry please try again"})
            if(!user)
                return res.status(200).json({"message":"not authorized"})
            user.firstname = req.body.firstname,
            user.lastname = req.body.lastname,
            user.email = req.body.email,
            user.position = req.body.position,
            user.password = bcrypt.hashSync(req.body.passwordGroup.password, 8);
            user.save((err: any, updated: any) => {
                if(err)
                    return res.status(400).json({"message":"Ops sorry please try again"})
                //
                return res.status(200).send({message: 'updated successfully'})

            })



        })
    }


    deleteUser(req: express.Request, res: express.Response): void{
        Register.findByIdAndDelete({_id: req.query.id}, function (err: any) {
            if(err) 
                return res.status(400).json({"message":"Ops sorry please try again"})

                return res.status(200).json({"done":"successfully deleted"})

          });
    }


}





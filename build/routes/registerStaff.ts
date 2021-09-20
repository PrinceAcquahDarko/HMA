import express from 'express'
import {RegisterStaff} from '../controllers/staffRegistration'
import {Authorization} from '../controllers/auth'
const registerRouter = express.Router()
let registerStaff = new RegisterStaff()
let auth = new Authorization()



function Router(){
    registerRouter.route('/')
        .post(registerStaff.saveUser)
        .get(auth.ifToken, registerStaff.getUser)
        .put(auth.ifToken, registerStaff.updateUser)
    registerRouter.route('/all')
        .get(registerStaff.getAllUsers)
    registerRouter.route('/delete')
        .delete(registerStaff.deleteUser)
   

    return registerRouter
}

export default Router()


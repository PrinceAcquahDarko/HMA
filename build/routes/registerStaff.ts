import express from 'express'
import {Controller} from '../controllers/staffRegistration'
const registerRouter = express.Router()
let controller = Controller()
// let Controller = controller()



export function Router(){
    // let registerStaff = new RegisterStaff()
    registerRouter.route('/')
        .post(controller.saveUser)
        // .get(registerStaff.amae)
   

    return registerRouter
}

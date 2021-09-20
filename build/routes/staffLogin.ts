import {StaffLogin} from '../controllers/staffLogin'
import express from 'express';
let loginRouter = express.Router()


let staffLogin = new StaffLogin()

function Router(){
    loginRouter.route('/')
        .post(staffLogin.loginUser)

    return loginRouter
}



export default Router()




import {StaffLogin} from '../controllers/staffLogin'
import express from 'express';
let loginRouter = express.Router()


let staffLogin = new StaffLogin()

function Router(){
    loginRouter.route('/')
        .post(staffLogin.loginUser)

    return loginRouter
}

// loginRouter.route('/')
//     .get(staffLogin.hello)

// module.exports = Router()

export default Router()




import {StaffLogin} from '../../build/controllers/staffLogin'
// let register = require('../model/model')
import express from 'express';
import Sinon from 'sinon'



describe('login User', ()=> {

    let req: any
    let res: any
    let register: any
    beforeEach(function(){
        req = {
            body: {
              
                email: 'ingo@gmail.com',
                password: 'fjoej',
            }
        }

        res = {
            status: function(x: number){
                function send(y: any){
                    
                }
                return {send}
            }
           
        }

      

        register = {
            //this one should be mocked and made to return something
            findOne: Sinon.spy()
        }
    })
    it('should not login user if user if user has a wrong email', ()=> {
        let staffLogin = new StaffLogin()
        staffLogin.loginUser(req, res)

    })

    it('should not login user if user if user has a wrong password', ()=> {
        let staffLogin = new StaffLogin()
        
    })

    it('should login user if user if user has a right email and password', ()=> {
        let staffLogin = new StaffLogin()
        
    })
})
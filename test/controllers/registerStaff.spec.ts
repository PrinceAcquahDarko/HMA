import { Controller } from "../../build/controllers/staffRegistration"
import { StaffRegistration } from "../../build/validations/staffRegitstration"
// let sinon = require('sinon')
import sinon from 'sinon';



describe.skip('register User', function(){
    let req: any;
    let res: any;
    
    beforeEach(()=>{
        req = {
            body: {
                firstname: 'rpnce',
                lastname: 'sa',
                email: 'ingo@gmail.com',
                password: 'fjoej',
                position: 'kdkde'
            }
        }

        res = {
            
            status: sinon.spy()
           
        }

        
    })
    it('should save user if user is valid', ()=>{
        let controller = Controller()
        // let spy = sinon.spy(controller, 'implementSave')
        controller.saveUser(req, res)
        res.status.called.should.be.true
        // spy.calledOnce.should.be.true


        

    })
})
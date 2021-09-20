import {RegisterStaff} from "../../build/controllers/staffRegistration"
import Sinon from "sinon";

describe('register User', function(){
    let req: any;
    let res: any;
    let user: any;
    
    beforeEach(()=>{
        req = {
            body: {
                firstname: 'rpnce',
                lastname: 'sa',
                email: 'ingo@gmail.com',
                passwordGroup: {
                    password: '0493fdsak;'
                },
                position: 'kdkde'
            }
        }

        res = {
            status: function(x: number){
                function send(y: any){
                    
                }
                return {send}
            }
           
        }

      
        
    })
    it('should save user if user data is valid', ()=>{
        let registerStaff = new RegisterStaff()
        let spy = Sinon.spy(registerStaff, 'implementSave')
        registerStaff.saveUser(req, res)
        spy.calledOnce.should.be.true
 

    })

    it("should not save user if user data is invalid (in this case firstname is invalid)", () => {
        let registerStaff = new RegisterStaff()
        let spy = Sinon.spy(registerStaff, 'implementSave')

        req.body.firstname = '';

        registerStaff.saveUser(req, res)
        spy.calledOnce.should.be.false
        // res.status.called.should.be.true

    })
})
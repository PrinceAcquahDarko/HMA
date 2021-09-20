import { IstaffRegistration } from "../../interface";
import { StaffRegistration } from "../../build/validations/staffRegitstration";
import Sinon from "sinon";
import chai from 'chai';
chai.should()

describe('Staff Validation', ()=>{
    let data: IstaffRegistration;
    let validFunction: StaffRegistration
    beforeEach(()=>{
        data = {
            firstname: 'PRINCE',
            lastname: 'DARKO',
            email:'info@gmail.com',
            password: '123456',
            position: 'doc'
        }
    
        validFunction = new StaffRegistration(data)

    })
    it('should be valid if email is defined and has a correct type', ()=> {
        let email = validFunction.validEmail()
        email.should.be.true

    })

    it('should be valid if firstname is defined', ()=> {
        let firstname = validFunction.validFirstname()
        firstname.should.be.true

    })

    it('should be valid if lastname is defined', ()=> {
        let lastname = validFunction.validLastname()
        lastname.should.be.true

    })

    it('should be valid if password is defined and is more than six chars long', ()=> {
        let password = validFunction.validPassword()
        password.should.be.true

    })
    

    it('should be valid if position is defined and has a correct type', ()=> {
        let position = validFunction.validPostion()
        position.should.be.true

    })

    it('should be valid if all fields all valid', ()=>{
        let allValid = validFunction.allValid()
        allValid.should.be.true
    })

    it('should at least called one of the validate funcs (valid Email)', ()=>{
        let spy = Sinon.spy(validFunction, 'validEmail')
        let allValid = validFunction.allValid()
        spy.calledOnce.should.be.true



    })

    
})
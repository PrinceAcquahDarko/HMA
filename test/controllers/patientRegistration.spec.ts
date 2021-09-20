import Sinon from "sinon";
import chai from 'chai';
chai.should()

import {PatientRegistration} from '../../build/controllers/patientRegistration'
describe('Patient Registation', function(){
    let req: any;
    let res: any
    beforeEach(()=>{
        req = {
            body: {
                lastname: 'prince',
                contact: '74525555157',
                key: ''
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

    it('should set the key correctly', function(){
        let patient = new PatientRegistration();
        let spy = Sinon.spy(patient, 'implementSave')
        patient.savePatient(req, res)
        req.body.key.should.equal('nce157')
        
    })


    it('should call the implement save function', function(){
        let patient = new PatientRegistration();
        let spy = Sinon.spy(patient, 'implementSave')
        patient.savePatient(req, res)
        spy.calledOnce.should.be.true        
    })
})
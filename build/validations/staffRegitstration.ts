import { IstaffRegistration } from "../../interface";

export class StaffRegistration{
    constructor(public data: IstaffRegistration){}
    
    validFirstname(): boolean{
        return !!this.data.firstname

    }
    validLastname(): boolean{
        return !!this.data.lastname

    }
    validEmail(): boolean{
        //also check if email contains index of @
        return !!this.data.email
    }
    validPassword(): boolean{
        return !!this.data.password

    }
    validPostion(): boolean{
        console.log(this.validPassword(), 'from valid password')
        return !!this.data.position
    }

    allValid(): boolean {
        return !!this.validEmail() && !!this.validPassword() && 
        !!this.validFirstname() && !!this.validLastname() && !!this.validPostion()  
    }

}
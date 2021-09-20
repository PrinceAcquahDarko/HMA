export interface IstaffRegistration {
    firstname: string,
    lastname: string
    email:string,
    password: string,
    position: string
    passwordGroup?: any;
}


export interface Ilogin{
    email: string,
    password: string
}
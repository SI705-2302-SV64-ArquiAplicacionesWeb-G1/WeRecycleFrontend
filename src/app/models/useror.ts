import { Roles } from "./roles"


export class Useror extends Roles{
    idUser: number = 0
    userName:string=""
    userPassword : string = ""
    userEmail : string = ""
    userAge: number  = 0
    roles:Roles = new Roles()    
}
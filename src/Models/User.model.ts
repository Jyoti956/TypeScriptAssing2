import { USER_ROLES } from "../Enums";

export class UserModel {
    
    email: string = '';
    password: string = '';
    role:USER_ROLES=USER_ROLES.CUSTOMER;
    

    constructor(data?: Partial<UserModel>) {
        Object.assign(this, data)
    }
}
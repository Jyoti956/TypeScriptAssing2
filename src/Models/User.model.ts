import { USER_ROLES } from "../Enums";

export class UserModel {
    name: string = '';
    email: string = '';
    password: string = '';
    role: USER_ROLES = USER_ROLES.USER;

    constructor(data?: Partial<UserModel>) {
        Object.assign(this, data)
    }
}
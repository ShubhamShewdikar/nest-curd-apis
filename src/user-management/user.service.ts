import { Injectable } from "@nestjs/common";


import {User} from './user.module'


@Injectable()
export class UserService {
    users : User[] = [];
    addUser(fullname: string, email: string, role:string, username: string, password: string){
        const userID = Math.random().toString();
        const user = new User(userID, fullname, email, role, username, password);
        this.users.push(user);
        return userID;
    }
}
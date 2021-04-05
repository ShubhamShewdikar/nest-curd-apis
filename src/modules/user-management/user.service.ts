import { Injectable, NotFoundException } from "@nestjs/common";
// import { IUser } from "./interfaces/user.interface";

import {User} from './user.entity'


@Injectable()
export class UserService {

    users = [];
    addUser(fullname: string, email: string, role:string, username: string, password: string){
        const userId = Math.random().toString();
        // User.create({
        //     id: userId, 
        //     fullname: fullname,
        //     email: email,
        //     role:role, 
        //     username: username, 
        //     password: password
        // }).then(user => {
        //     this.users.push(user);
        //     return userId;
        // })
    }

    async getAllUsers(){
        return await User.findAll()
    }

    async getUserById(userId: string){
        return await User.findOne({where: {id: userId}})
    }

    updateUser(userId: string, fullname: string, email: string, role:string, username: string, password: string) {
        
    }

    async deleteUser(userId: string) {
        console.log(userId)
        return await User.destroy({where: {
            id: userId
        }});
    }
  
}
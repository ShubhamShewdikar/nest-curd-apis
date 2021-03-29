import { Injectable, NotFoundException } from "@nestjs/common";


import {User} from './user.model'


@Injectable()
export class UserService {
    users : User[] = [];
    addUser(fullname: string, email: string, role:string, username: string, password: string){
        const userId = Math.random().toString();
        const user = new User(userId, fullname, email, role, username, password);
        this.users.push(user);
        return userId;
    }

    getAllUsers(){
        return [...this.users];
    }

    getUserById(userId: string){
        const user = this.users.find((item)=> item.id == userId)
        return {...user};
    }

    updateUser(userId: string, fullname: string, email: string, role:string, username: string, password: string) {
        const [user, index] = this.findUser(userId);
        const updatedUser = { ...user };
        if (fullname) {
            updatedUser.fullname = fullname;
        }
        if (email) {
            updatedUser.email = email;
        }
        if (role) {
            updatedUser.role = role;
        }
        if (username) {
            updatedUser.username = username;
        }
        if (password) {
            updatedUser.password = password;
        }
        this.users[index] = updatedUser;
    }

    deleteUser(userId: string) {
        const index = this.findUser(userId)[1];
        this.users.splice(index, 1);
    }
  
 
    private findUser(id: string): [User, number] {
        const userIndex = this.users.findIndex(item => item.id === id);
        const user = this.users[userIndex];
        if (!user) {
        throw new NotFoundException('Could not find user.');
        }
        return [user, userIndex];
    }

}
import { Controller, Post, Query, Get, Param, Patch, Delete } from "@nestjs/common";

import { UserService } from "./user.service"

@Controller('users')
export class UserController{
    constructor(private readonly UserService: UserService){}

    @Post()
    addUser(
        @Query('fullname') fullname: string,
        @Query('email') email: string,
        @Query('role') role: string,
        @Query('username') username: string,
        @Query('password') password: string
    ): any {
        const userID = this.UserService.addUser(fullname, email, role, username, password);
        return {'id': userID};
    }

    @Get()
    getAllUsers(){
        const users = this.UserService.getAllUsers()
        return users
    }

    @Get(':id')
    getUserById(
        @Param('id') userId: string
     ){
        const user = this.UserService.getUserById(userId);
        return user;
    }
    
    @Patch(':id')
    updateProduct(
        @Param('id') userId: string,
        @Query('fullname') fullname: string,
        @Query('email') email: string,
        @Query('role') role: string,
        @Query('username') username: string,
        @Query('password') password: string
    ) {
        this.UserService.updateUser(userId, fullname, email, role, username, password);
        return "Updated!!";
    }

    @Delete(':id')
    removeProduct(@Param('id') userId: string) {
        this.UserService.deleteUser(userId);
        return "Deleted";
    }
  

}

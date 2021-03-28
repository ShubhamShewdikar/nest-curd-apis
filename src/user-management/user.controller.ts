import { Controller, Post, Query } from "@nestjs/common";

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
}

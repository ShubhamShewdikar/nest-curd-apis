import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from "src/core/database/database.module";


@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id: string;

    @Column({
        type: DataType.STRING,
    })
    fullname: string;

    @Column({
        type: DataType.STRING,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        values: ['user', 'admin', 'disabled']
    })
    role: string;

    @Column({
        type: DataType.STRING,
    })
    username: string;

    @Column({
        type: DataType.STRING,
    })
    password: string;
}
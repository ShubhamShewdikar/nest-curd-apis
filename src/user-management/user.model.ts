export class User {
    constructor (
        public id: string,
        public fullname: string,
        public email: string,
        public role: string,
        public username: string,
        public password: string
    ) {}
}
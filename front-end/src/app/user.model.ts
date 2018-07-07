export class User {
    constructor(
    public name?: string,
    public email?: string,
    public password?: { 
        password: string,
        repeatPassword: string}
    ) {}
} 
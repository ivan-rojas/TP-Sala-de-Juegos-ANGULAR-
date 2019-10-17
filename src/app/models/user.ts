export class User 
{
    private email: string;
    private password: string;
    
    public get Email() : string {
        return this.email
    }

    public get Password() : string {
        return this.password
    }
    
    public set Email(v : string) {
        this.email = v;
    }
    
    public set Password(v : string) {
        this.password = v;
    }

    constructor(email: string, pass: string)
    {
        this.email = email;
        this.password = pass;
    }
}
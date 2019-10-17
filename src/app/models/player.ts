import { User } from './user';
import { CommonHelper } from '../classes/helpers/common-helper';

export class Player extends User {

    public wins: number;
    public registerDate: string;
    
    constructor(email: string, password: string)
    {
        super(email, password);
        this.wins = 0;
        this.registerDate = CommonHelper.NowInString();
    }

}

export class CommonHelper 
{
    public static ConvertToObject(objectToConvert:any):Object
    {
        let plainObject = JSON.parse(JSON.stringify(objectToConvert));
        return plainObject;
    }

    public static NowInString(): string
    {
        const now = new Date();
        const date = now.getDate() + '-' + (now.getMonth()+1) + '-' + now.getFullYear();
        const time = now.getHours() + ':' + now.getMinutes();
        return (time + ' ' + date);
    }

    public static IsNotEmpty(strToCheck: string): boolean
    {
        if(strToCheck != '' && strToCheck != undefined && strToCheck != ' ')
        return true;
        else
        return false;
    }
}
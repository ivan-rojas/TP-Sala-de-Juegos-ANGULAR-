export class Score {
    public nombre: string;
    public jugador: string;
    public gano: boolean;

    constructor(nombre: string, gano: boolean)
    {
        this.nombre = nombre;
        this.gano = gano;
    }
}

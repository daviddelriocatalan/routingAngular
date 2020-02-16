export class Proyecto {
    public id: number;
    public nombre: string;
    public descripcion: string;

    constructor (id: number, nombre: string, descripcion: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
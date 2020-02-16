export class Empleado {
    public id: number;
    public nombre: string; 
    public apellidos: string;
    public puesto: string; 

    constructor (id: number, nombre: string, apellidos: string, puesto: string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos; 
        this.puesto = puesto;
    }

}
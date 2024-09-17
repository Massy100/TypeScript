// Ana Massielle Coti Rodas - 2477523
// Cree una clase que represente a una persona (con propiedades privadas como 
//nombre, edad y ciudad). Establezca setters y getters como públicos y 
// finalmente coloque la clase para exportar.

export class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre() {
        return this.nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }

    public getCiudad(): string {
        return this.ciudad;
    }
}

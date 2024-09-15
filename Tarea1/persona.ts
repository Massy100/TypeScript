class Persona {
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
}

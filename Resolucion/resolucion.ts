class Producto {
    codigo: string;
    nombre: string;
    precioCosto: number;
    precioVenta: number;

    constructor(codigo: string, nombre: string, precioCosto: number, precioVenta: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioCosto = precioCosto;
        this.precioVenta = precioVenta;
    }

    public toString(): string {
        return `${this.codigo} - ${this.nombre}, Costo: ${this.precioCosto}, Venta: ${this.precioVenta}`;
    }
}

class Nodo {
    producto: Producto;
    siguiente: Nodo | null;

    constructor(producto: Producto) {
        this.producto = producto;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    private cabeza: Nodo | null;

    constructor() {
        this.cabeza = null;
    }

    public insertar(producto: Producto): void {
        const nuevoNodo = new Nodo(producto);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
    }

    public buscar(codigo: string): Producto | null {
        let actual = this.cabeza;
        while (actual != null) {
            if (actual.producto.codigo === codigo) {
                return actual.producto;
            }
            actual = actual.siguiente;
        }
        return null; 
    }

    public mostrar(): void {
        let actual = this.cabeza;
        while (actual != null) {
            console.log(actual.producto.toString());
            actual = actual.siguiente;
        }
    }
}

class TablaHash {
    private tabla: ListaEnlazada[];
    private tamaño: number;

    constructor(tamaño: number) {
        this.tamaño = tamaño;
        this.tabla = new Array(tamaño);

        for (let i = 0; i < tamaño; i++) {
            this.tabla[i] = new ListaEnlazada();
        }
    }

    private funcionHash(codigo: string): number {
        let hash = 0;
        for (let i = 0; i < codigo.length; i++) {
            hash += codigo.charCodeAt(i);
        }
        return hash % this.tamaño;
    }

    public insertar(producto: Producto): void {
        const indice = this.funcionHash(producto.codigo);
        this.tabla[indice].insertar(producto);
    }

    public buscar(codigo: string): Producto | null {
        const indice = this.funcionHash(codigo);
        return this.tabla[indice].buscar(codigo);
    }

    public mostrar(): void {
        for (let i = 0; i < this.tamaño; i++) {
            console.log(`Índice ${i}:`);
            this.tabla[i].mostrar();
        }
    }
}

let tablaHash = new TablaHash(10); 

let p1 = new Producto("P001", "Pepto-Bismol", 50.00, 65.00);
let p2 = new Producto("P002", "Tylenol", 30.00, 40.00);
let p3 = new Producto("P003", "Aspirina", 20.00, 30.00);

tablaHash.insertar(p1);
tablaHash.insertar(p2);
tablaHash.insertar(p3);

let encontrado = tablaHash.buscar("P002");
if (encontrado != null) {
    console.log("Producto encontrado: " + encontrado.toString());
} else {
    console.log("Producto no encontrado.");
}

tablaHash.mostrar();


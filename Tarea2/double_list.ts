// Ana Massielle Coti Rodas - 2477523

import { DoubleNode } from './double_node';

export class DoubleList{
    private head: DoubleNode | null;
    private tail: DoubleNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public isEmpty(): boolean{
        return this.head === null && this.tail === null
    }

    public getSize(): number {
        return this.size;
    }

    // inserta por la cola
    public append(): void {
        let newNode = new DoubleNode();

        if (this.isEmpty()) {
            // Si la lista está vacía, ambos head y tail apuntan al nuevo nodo
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Si no está vacía, se conecta el nodo actual de tail con el nuevo nodo
            if (this.tail) {
                this.tail.setNext(newNode);
                newNode.setPrev(this.tail);
            }
            // El nuevo nodo se convierte en el nuevo tail
            this.tail = newNode;
        }

        // Incrementa el tamaño de la lista
        this.size++;
    }

    // inserta por la cabeza
    public prepend(): void {
        const newNode = new DoubleNode();

        if (this.isEmpty()) {
            // Si la lista está vacía, ambos head y tail apuntan al nuevo nodo
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Si no está vacía, se conecta el nuevo nodo con el nodo actual de head
            if (this.head) {
                newNode.setNext(this.head);
                this.head.setPrev(newNode);
            }
            // El nuevo nodo se convierte en el nuevo head
            this.head = newNode;
        }

        // Incrementa el tamaño de la lista
        this.size++;
    }

    // elimina por la cabeza
    public unshift(): void {
        if (this.isEmpty()) {
            console.log('La lista esta vacia. No se puede eliminar el nodo.');
            return;
        }

        if (this.head === this.tail) {
            // Si solo hay un nodo en la lista
            this.head = null;
            this.tail = null;
        } else {
            if (this.head) {
                this.head = this.head.getNext(); // Mover el head al siguiente nodo
                if (this.head) {
                    this.head.setPrev(null); // El nuevo head no tiene nodo previo
                }
            }
        }

        this.size--;
    }

    // elimina por la cola
    public pop(): void {
        if (this.isEmpty()) {
            console.log('La lista esta vacia. No se puede eliminar el nodo.');
            return;
        }

        if (this.head === this.tail) {
            // Si solo hay un nodo en la lista
            this.head = null;
            this.tail = null;
        } else {
            if (this.tail) {
                this.tail = this.tail.getPrev(); // Mover el tail al nodo previo
                if (this.tail) {
                    this.tail.setNext(null); // El nuevo tail no tiene nodo siguiente
                }
            }
        }

        this.size--;
    }

    public print(): void {
        let currentNode = this.head;

        while (currentNode !== null) {
            const data = currentNode.getData();
            if (data % 2 === 0) { 
                console.log(data);
            }
            currentNode = currentNode.getNext();
        }
    }

    public traversal(): void {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.getData());
            currentNode = currentNode.getNext();
        }
    }

    public reverseTraversal(): void {
        let currentNode = this.tail;
        while (currentNode !== null) {
            console.log(currentNode.getData());
            currentNode = currentNode.getPrev();
        }
    }
}
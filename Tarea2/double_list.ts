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
}
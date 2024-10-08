// Ana Massielle Coti Rodas - 2477523
// Carlos Enrique de Leon de la Cruz - 1626423

import { NodeTree } from "./node_tree";
import { NodeTreeNull } from "./node_tree_null";

class BST {
    private root: NodeTree | NodeTreeNull;

    constructor() {
        this.root = new NodeTreeNull(0); 
    }

    private setRoot(newRoot: NodeTree): void {
        this.root = newRoot;
    }

    public getRoot(): NodeTree | NodeTreeNull {
        return this.root;
    }

    public insert(data: number): void {
        let newNode: NodeTree = new NodeTree(data);
        let parent: NodeTree | NodeTreeNull = new NodeTreeNull(0); 
        let current: NodeTree | NodeTreeNull = this.root;

        while (current instanceof NodeTree) {
            parent = current;
            if (newNode.getData() < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
        
        newNode.setFather(parent);
        if (parent instanceof NodeTreeNull) {
            this.root = newNode;
        } else if (newNode.getData() < parent.getData()) {
            parent.setLeftChild(newNode);
        } else {
            parent.setRightChild(newNode);
        }
    }

    public search(dataToSearch: number): number {
        let data: number = -1;
        let current: NodeTree | NodeTreeNull = this.root;

        while (current instanceof NodeTree) {
            if (current.getData() === dataToSearch) {
                data = current.getData();
                break;
            } else if (dataToSearch < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
        return data;
    }

    private printNode(nodo: NodeTree | NodeTreeNull): void {
        if (nodo instanceof NodeTree) {
            if (nodo.getLeftChild() instanceof NodeTree) {
                this.printNode(nodo.getLeftChild());
            }
            console.log(nodo.getData());
            if (nodo.getRightChild() instanceof NodeTree) {
                this.printNode(nodo.getRightChild());
            }
        }
    }

    public printAll(): void {
        this.printNode(this.root);
    }
}

// main
let myBinarySearchTree: BST = new BST();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(100);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(38);
if (myBinarySearchTree.search(10) !== -1) {
    console.log("Dato encontrado");
} else {
    console.log("El dato no existe");
}
myBinarySearchTree.printAll();

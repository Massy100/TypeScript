import { NodeTree } from "./node_tree.ts";

class BST {
    private root: NodeTree | null;

    constructor() {
        this.root = null;
    }

    private setRoot(newRoot: NodeTree): void {
        this.root = newRoot;
    }

    public getRoot(): NodeTree | null {
        return this.root;
    }

    public insert(data: number): void {
        let newNode: NodeTree = new NodeTree(data);
        let parent: NodeTree | null = null;
        let current: NodeTree | null = this.root;
        while (current != null) {
            parent = current;
            if (newNode.getData() < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
        newNode.setFather(parent);
        if (parent == null) {
            this.root = newNode;
        } else if (newNode.getData() < parent.getData()) {
            parent.setLeftChild(newNode);
        } else {
            parent.setRightChild(newNode);
        }
    }

    public search(dataToSearch: number): number {
        let data: number = -1;
        let current: NodeTree | null = this.root;
        while (current != null) {
            if (current.getData() == dataToSearch) {
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

    private printNode(nodo: NodeTree | null): void {
        if (nodo?.getLeftChild() != null)
            this.printNode(nodo.getLeftChild());
        if (nodo != null)
            console.log(nodo.getData());
        if (nodo?.getRightChild() != null)
            this.printNode(nodo.getRightChild());
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
if (myBinarySearchTree.search(10) != -1) {
    console.log("Dato encontrado");
} else {
    console.log("El dato no existe");
}
myBinarySearchTree.printAll();

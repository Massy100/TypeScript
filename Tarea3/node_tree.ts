import { NodeTreeNull } from "./node_tree_null";

export class NodeTree {
    private data: number;
    private father: NodeTree | NodeTreeNull;
    private leftChild: NodeTree | NodeTreeNull; 
    private rightChild: NodeTree | NodeTreeNull;

    constructor(data: number) {
        this.data = data;
        this.father = new NodeTreeNull(0); 
        this.leftChild = new NodeTreeNull(0);
        this.rightChild = new NodeTreeNull(0);
    }

    public getData(): number {
        return this.data;
    }

    public setFather(newFather: NodeTree | NodeTreeNull): void {
        this.father = newFather;
    }

    public getFather(): NodeTree | NodeTreeNull {
        return this.father;
    }

    public setLeftChild(newChild: NodeTree | NodeTreeNull): void {
        this.leftChild = newChild;
    }

    public getLeftChild(): NodeTree | NodeTreeNull {
        return this.leftChild;
    }

    public setRightChild(newChild: NodeTree | NodeTreeNull): void {
        this.rightChild = newChild;
    }

    public getRightChild(): NodeTree | NodeTreeNull {
        return this.rightChild;
    }
}

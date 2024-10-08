export class NodeTreeNull {
    private data: number;
    private father: null; // NodeTree* es un apuntador
    private leftChild: null;
    private rightChild: null;

    constructor(data: number) {
        this.data = data;
        this.father = null;
        this.leftChild = null;
        this.rightChild = null;
    }

    public getData(): number {
        return this.data;
    }

    public setFather(newFather: null): void {
        this.father = newFather;
    }

    public getFather() {
        return this.father;
    }

    public setLeftChild(newChild: null): void {
        this.leftChild = newChild;
    }

    public getLeftChild() {
        return this.leftChild;
    }

    public setRightChild(newChild: null): void {
        this.rightChild = newChild;
    }

    public getRightChild() {
        return this.rightChild;
    }
}
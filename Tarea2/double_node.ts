// Ana Massielle Coti Rodas - 2477523

export class DoubleNode {
    private data: number;
    private next: DoubleNode | null;
    private prev: DoubleNode | null;

    constructor(){
        this.data = Math.floor(Math.random() * 9) + 1;
        this.next = null;
        this.prev = null;
    }

    public setData(data:number): void {
        this.data = data;
    }

    public getData(): number {
        return this.data;
    }

    public setNext(next: DoubleNode | null): void {
        this.next = next;
    }

    public getNext(): DoubleNode | null {
        return this.next;
    }

    public setPrev(prev: DoubleNode | null): void {
        this.prev = prev;
    }

    public getPrev(): DoubleNode | null {
        return this.prev;
    }
}
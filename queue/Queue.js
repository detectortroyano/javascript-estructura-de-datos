// JavaScript source code
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.length > 0) {
            if (this.length === 1) {
                this.first = null;
                this.last = null
            } else {
                this.first = this.first.next;
            }
            this.length--;
        }        
    }
}

let myQueue = new MyQueue();
myQueue.enqueue("Jose");
myQueue.enqueue("Oscar");
myQueue.enqueue("Juan");
myQueue.dequeue();
myQueue.peek();

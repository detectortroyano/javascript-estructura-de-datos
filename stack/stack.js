// JavaScript source code
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyStack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0; 
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
        }
        this.length++;
    }

    pop() {
        if (this.length > 0) {
            if (this.length === 1) {
                this.top = null;
                this.bottom = null;
            } else {
                this.top = this.top.next;
            }
            this.length--;            
        }
    }
}

let myStack = new MyStack();
myStack.push("Oscar");
myStack.push("Jose");
myStack.push("Maria");
myStack.pop();
myStack.peek();

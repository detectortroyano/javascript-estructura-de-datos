// JavaScript source code
class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    unshift(item) {
        this.length++;
        for (let i = this.length - 1; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
    }

    shift() {
        this.delete(0);
    }

    splice(index, item) {
        this.length++;
        for (let i = this.length - 1; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
    }
}

const myArray = new MyArray();
myArray.push("Jose");
myArray.push("Juan");
myArray.push("Alex");
myArray.push("Alize");
myArray.pop();
myArray.delete(1);
myArray.unshift("Oscar");
myArray.unshift("Romeo");
myArray.shift();
myArray.splice(1, "Flor");


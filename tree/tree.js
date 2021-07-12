class Node {
    constructor(value) {
        this.left = null;
        this.rigth = null;
        this.value = value;
    }
}

class MyTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.rigth) {
                        currentNode.rigth = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.rigth;
                    }
                }
            }
        }
    }
}

let myTree = new MyTree();
myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
myTree.insert(2);
myTree.insert(8);
myTree.insert(17);
myTree.insert(170);

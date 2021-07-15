class MyGraph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(nodo1, nodo2) {
        this.adjacentList[nodo1].push(nodo2);
        this.adjacentList[nodo2].push(nodo1);
    }
}

const myGraph = new MyGraph();
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");
myGraph.addEdge("3", "5");
myGraph.addEdge("6", "3");
myGraph.addEdge("1", "6");
myGraph.addEdge("1", "3");
myGraph.addEdge("1", "4");
myGraph.addEdge("4", "5");
myGraph.addEdge("8", "4");

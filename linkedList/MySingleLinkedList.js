class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class MySingleLinkedList{
	constructor(value){
		this.head = {
			value : value,
			next : null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value){
		const newNode = new Node(value);

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		//return this;
	}

	prepend(value){
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
		this.length++;

		//return this;
	}

	insert(index, value){
		if( index < 2 ){
			prepend(value);
		}else if(index >= this.length){
			append(value);
		}else{
			const newNode = new Node(value);
			const firstNode = this.getNodeByIndex(index -1);
			const holdingNode = firstNode.next;

			firstNode.next = newNode;
			newNode.next = holdingNode;

			this.length++;

			//return this;
		}
	}

	getNodeByIndex(index){
		let counter = 0;
		let currentNode = this.head;
		while(index !== counter){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index){
		if( index < 2 ){
			this.head = this.head.next;
			this.length--;

			//return this;
		} else if(index >= this.length){
			const firstNode = this.getNodeByIndex(index -1);
			firstNode.next = null;
			this.tail = firstNode;

			this.length--;

			//return this;
		}else{
			const firstNode = this.getNodeByIndex(index -1);
			const removeNode = firstNode.next;

			firstNode.next = removeNode.next;

			this.length--;

			//return this;
		}
	}
}

let mySingleLinkedList = new MySingleLinkedList(1);
mySingleLinkedList.append(2);
mySingleLinkedList.append(3);
mySingleLinkedList.append(4);
mySingleLinkedList.append(5);
mySingleLinkedList.prepend(0);
mySingleLinkedList.insert(2, 1.5);
mySingleLinkedList.remove(2);
mySingleLinkedList;
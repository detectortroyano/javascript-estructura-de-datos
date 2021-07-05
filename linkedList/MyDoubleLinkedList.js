class Node{
	constructor(value){
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoubleLinkedList{
	constructor(value){
		this.head = {
			value : value,
			next : null,
			prev : null,
		};
		this.tail = this.head;

		this.length = 1;
	}

	append(value){
		const newNode = new Node(value);
		newNode.prev = this.tail;

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
			const firsNode = this.getNodeByIndex(index -1);
			const holdingNode = firsNode.next;

			firsNode.next = newNode;
			newNode.next = holdingNode;

			newNode.prev = firsNode;
			holdingNode.prev = newNode;


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
			const firsNode = this.getNodeByIndex(index -1);
			firsNode.next = null;

			this.tail = firsNode;

			this.length--;

			//return this;
		}else{
			const firsNode = this.getNodeByIndex(index -1);
			const removeNode = firsNode.next;
			const holdingNode = removeNode.next;

			firsNode.next = holdingNode;
			holdingNode.prev = firsNode;

			this.length--;

			//return this;
		}
	}
}

let myDoubleLinkedList = new MyDoubleLinkedList(1);
myDoubleLinkedList.append(2);
myDoubleLinkedList.append(3);
myDoubleLinkedList.append(4);
myDoubleLinkedList.append(5);
myDoubleLinkedList.prepend(0);
myDoubleLinkedList.insert(2, 1.5);
myDoubleLinkedList.remove(2);
myDoubleLinkedList;

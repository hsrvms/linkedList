class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
		const newNode = new Node(value);
		this.size++;
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		if (this.size === 1) {
			this.tail.next = newNode;
			this.tail = newNode;
			this.tail.prev = this.head;
			return;
		}

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		return;
	}

	prepend(value) {
		const newNode = new Node(value);
		this.size++;
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		if (this.size === 1) {
			this.head.prev = newNode;
			newNode.next = this.tail;
			this.head = newNode;
			return;
		}

		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		return;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	at(index) {
		if (!this.head) return "The list is empty";
		if (index > this.size) return "Index is more than the list size";

		let currentNode = this.head;
		let count = 0;

		while (currentNode) {
			if (index === count) return currentNode;
			count++;
			currentNode = currentNode.next;
		}
	}

	pop() {
		if (!this.head) return "The list is already empty";

		if (this.size === 1) {
			this.head = null;
			this.tail = null;
			return;
		}

		this.tail = this.tail.prev;
		this.tail.next = null;
	}

	find(value) {
		if (!this.head) return "The list is empty";

		let currentNode = this.head;
		let count = 0;

		while (currentNode) {
			if (currentNode.value === value) return count;

			currentNode = currentNode.next;
			count++;
		}
		return -1;
	}

	contains(value) {
		return this.find(value) !== -1 ? true : false;
	}

	insertAt(value, index) {
		if (index > this.size) return "index is more than list size.";

		this.size++;
		const newNode = new Node(value);

		if (index === 0) {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		} else {
			let currentNode = this.head;
			let count = 0;

			while (currentNode) {
				if (count === index) {
					newNode.prev = currentNode.prev;
					currentNode.prev.next = newNode;
					newNode.next = currentNode;
					currentNode.prev = newNode;
					console.log(newNode);
					return;
				}
				currentNode = currentNode.next;
				count++;
			}
		}
	}

	removeAt(index) {
		if (index > this.size) return "Index is more than the list size";

		if (index === 0) {
			this.head = this.head.next;
      this.head.prev = null;
      return;
		} else if (index === this.size - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }

		const deletedNode = this.at(index);
		const nextNode = deletedNode.next;
		const prevNode = deletedNode.prev;

		prevNode.next = nextNode;
		nextNode.prev = prevNode;
	}

	toString() {
		if (!this.head) return "The list is empty.";

		let result = "null <->";

		let currentNode = this.head;

		while (currentNode) {
			result += ` ${currentNode.value} <-> `;
			currentNode = currentNode.next;
		}

		return (result += "null");
	}
}

const list = new LinkedList();

console.log(list);
list.append(25); //! 2
list.append(29); //! 3
list.append(31); //! 4
list.append(37); //! Tail
list.prepend(13); //! 1
list.prepend(24); //! Head
console.log(list);
console.log(list.toString());
console.log("----------------------------------");
console.log(list.getHead());
console.log(list.getTail());
console.log("----------------------------------");
console.log(list.at(4));
console.log(list.toString());
console.log("----------------------------------");
console.log(list);
console.log(list.toString());
console.log(list);
console.log("----------------------------------");
console.log(list.find(31));
console.log(list.contains(32));
console.log("----------------------------------");
console.log(list.toString());
list.insertAt(99, 0);
list.insertAt(81, 4);
// console.log(list)
console.log(list.toString());
list.removeAt(list.size - 1);
console.log(list)
console.log(list.toString());

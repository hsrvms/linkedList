class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	prepend(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	size() {
		let count = 0;
		let currentNode = this.head;
		while (currentNode) {
			currentNode = currentNode.next;
			count++;
		}
		return count;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	at(index) {
		if (index === 0) return this.head;

		let count = 0;
		let currentNode = this.head;

		while (currentNode) {
			currentNode = currentNode.next;
			count++;
			if (index === count) return currentNode;
		}

		return -1;
	}

	pop() {
		if (!this.head) return;

		let currentNode = this.head;
		while (currentNode.next.next) {
			currentNode = currentNode.next;
		}
		const deletedNode = currentNode.next;
		currentNode.next = null;

		this.tail = currentNode;

		return deletedNode;
	}

	contains(value) {
		if (!this.head) return false;

		let currentNode = this.head;

		while (currentNode) {
			if (value === currentNode.value) return true;

			currentNode = currentNode.next;
		}

		return false;
	}

	find(value) {
		if (!this.head) return;

		let currentNode = this.head;
		let count = 0;

		while (currentNode) {
			if (value === currentNode.value) return count;

			currentNode = currentNode.next;
			count++;
		}

		return null;
	}

	toString() {
		if (!this.head) return null;

		let currentNode = this.head;
		let str = "";

		while (currentNode) {
			str += `( ${currentNode.value} ) -> `;
			currentNode = currentNode.next;
		}

		return str + "null";
	}

	insertAt(value, index) {
		if (index > this.size())
			return console.error("index is out of size");

		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
			return;
		}

		let count = 0;
		let previusNode = this.head;
		let nextNode = previusNode.next;
		while (previusNode) {
			if (index === count + 1) {
				newNode.next = nextNode;
				previusNode.next = newNode;
				return;
			}
			count++;
			previusNode = nextNode;
			nextNode = previusNode.next;
		}
	}

	removeAt(index) {
		if (!this.head) return;

    if(index < 0 || index >= this.size()) return console.error('index is out of size')

		if (index === 0) {
			this.head = null;
			this.tail = null;
		} else {
			const previusNode = this.at(index - 1);
			const currentNode = this.at(index);

			previusNode.next = currentNode.next;
		}
	}
}

const list = new LinkedList();
list.append(3); //! 3
list.append(5); //! 4
list.append(7); //! 5

list.prepend(9); //! 2
list.prepend(11); //! 1
list.prepend(13); //! 0

list.append(1); //! 6

console.log(list);
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log("----------------------------------");
console.log(list.at(0));
console.log(list.at(3));
console.log(list.at(6));
console.log("----------------------------------");
console.log(list);
// console.log(list.pop());
console.log(list);
console.log("----------------------------------");
console.log(list.contains(3));
console.log(list.contains(13));
console.log(list.contains(2));
console.log(list.contains(1));
console.log("----------------------------------");
console.log(list.find(13));
console.log(list.find(9));
console.log(list.find(1));
console.log(list.find("sdf"));
console.log("----------------------------------");
console.log(list.toString());
list.insertAt("asd", 5);
console.log(list.size());
list.insertAt("asd", 9);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());

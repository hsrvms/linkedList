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
			return;
		}
		if (this.head === this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
			this.head.next = this.tail;
			this.tail.next = this.head;
			return;
		}

		newNode.next = this.head;
		this.tail.next = newNode;
		this.tail = newNode;
	}

	prepend(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		if (this.head === this.tail) {
			this.head = newNode;
			this.head.next = this.tail;
			this.tail.next = this.head;
			return;
		}

		newNode.next = this.head;
		this.head = newNode;
		this.tail.next = this.head;
	}

	size() {
		if (!this.head) return 0;
		if (this.head === this.tail) return 1;

		let currentNode = this.head;
		let count = 0;

		do {
			count++;
			currentNode = currentNode.next;
		} while (currentNode !== this.head);

		return count;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	at(index) {
		if (!this.head) return -1;
		if (index === 0) return this.head;

		let currentNode = this.head.next;
		let count = 1;

		do {
      if(count === index) return currentNode;
			count++;
			currentNode = currentNode.next;
		} while (currentNode !== this.head);

    return -1;
	}

  pop() {
    if(!this.head) return;
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;

    while(currentNode.next !== this.tail){
      currentNode = currentNode.next;
    }

    currentNode.next = this.head;
    this.tail = currentNode;
  }

  contains(value) {
    if(!this.head) return false;

    if(this.head.value === value) return true;

    let currentNode = this.head.next;

    while(currentNode !== this.head) {
      if(currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    if(!this.head) return -1;
    if(this.head.value === value) return 0;

    let currentNode = this.head.next;
    let count = 1;

    while(currentNode !== this.head) {
      if(currentNode.value === value) return count;
      count++;
      currentNode = currentNode.next; 
    }

    return -1;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if(!this.head) {
      if(index === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else return -1;
    }

    if(this.head === this.tail) {
      if(index === 1) {
        this.tail = newNode;
        this.head.next = this.tail;
        this.tail.next = this.head;
      } else if(index === 0) {
        newNode.next = this.tail;
        this.head = newNode;
        this.tail.next = this.head;
      }
      return;
    }

    if(index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
      return;
    }

    let prevNode = this.head;
    let currentNode = prevNode.next;
    let count=1;

    do{
      if(count === index){
        newNode.next = currentNode;
        prevNode.next = newNode;
        return;
      }
      count++;
      prevNode = prevNode.next;
      currentNode = currentNode.next;

    } while(currentNode !== this.head);

  }

	toString() {
		let result = this.head.value + "";

		if (!this.head) return "This list is empty";
		if (this.head === this.tail) return this.head.value;

		let currentNode = this.head.next;
		do {
			result += ` => ${currentNode.value}`;
			currentNode = currentNode.next;
		} while (currentNode !== this.head);

		return result;
	}
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.prepend(4);
list.prepend(5);
list.prepend(6);

list.pop();
list.insertAt(0, 0)
list.insertAt(7, 4)


console.log(list.at(5))
console.log(list.contains(2))
console.log(list.contains(9))
console.log(list.find(4))
console.log(list.find(3))
console.log(list.toString());
console.log("listSize: ", list.size());
// console.log(list.getHead());
// console.log(list.getTail());

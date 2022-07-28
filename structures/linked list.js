class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(comparator) {
    this.head = null;
    this.tail = null;
    this.comparator =
      comparator ||
      function (i, j) {
        if (i > j) return -1;
        if (i < j) return 1;
        return 0;
      };
  }
  prepend(value) {
    let newElement = new LinkedListNode(value, this.head);
    this.head = newElement;
    if (!this.tail) this.tail(newElement);
  }
  append(value) {
    let newElement = new LinkedListNode(value);
    if (this.tail) this.tail.next = newElement;
    this.tail = newElement;
    if (!this.head) this.head = newElement;
  }
  delete(value) {
    if (!this.head) return;
    while (this.head && this.comparator(this.head.value, value) === 0) {
      this.head = this.head.next;
    }
    let curr = this.head;
    if (curr) {
      while (curr.next) {
        if (this.comparator(curr.next.value, value) === 0) {
          curr.next = curr.next.next;
        } else {
          curr = curr.next;
        }
      }
      if (this.comparator(this.tail.value, value) === 0) {
        this.tail = curr;
      }
    }
  }
  get(value) {
    let curr = this.head;
    while (curr) {
      if (this.comparator(curr.value, value) === 0) {
        return curr.value;
      } else {
        curr = curr.next;
      }
    }
    return undefined;
  }
  insertAfter(insertValue, afterValue) {
    let curr = this.head;
    while (this.head && curr.next) {
      if (this.comparator(curr.value, afterValue) === 0) {
        curr.next = new LinkedListNode(insertValue, curr.next);
        return true;
      } else {
        curr = curr.next;
      }
    }
    let newElement = new LinkedListNode(insertValue);
    if (!this.head) {
      this.head = newElement;
      this.tail = newElement;
      return true;
    }
    this.tail.next = newElement;
    this.tail = this.tail.next;
  }
  forEach(callbackFunction) {
    let curr = this.head;
    while (curr) {
      callbackFunction(curr);
      curr = curr.next;
    }
  }
}

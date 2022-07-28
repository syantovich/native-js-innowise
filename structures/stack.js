class Stack {
  constructor(arr = []) {
    this.stack = arr;
  }
  add(value) {
    this.stack.push(value);
  }
  get() {
    return this.stack.pop();
  }
  isEmpty() {
    return !this.stack.length;
  }
}

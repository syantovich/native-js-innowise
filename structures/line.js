class Line {
  constructor(arr = []) {
    this.line = arr;
  }
  get() {
    return this.line.shift();
  }
  add(value) {
    this.line.concat(value);
  }
  isEmpty() {
    return !this.line.length;
  }
}

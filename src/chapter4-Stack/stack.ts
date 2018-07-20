export class Stack<T> {
  store: T[] = [];

  push(val: T) {
    this.store.push(val);
  }

  pop(): T | undefined {
    return this.store.pop();
  }

  peek(): T | undefined {
    return this.store[this.store.length - 1]
  }

  get length(): number {
    return this.store.length
  }

  isEmpty(): boolean {
    return this.store.length === 0
  }
}
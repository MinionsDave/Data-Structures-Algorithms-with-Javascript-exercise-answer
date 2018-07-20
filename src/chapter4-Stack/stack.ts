export class Stack<T> {
  private store: T[] = []

  push(val: T) {
    this.store.push(val)
  }

  pop(): T | undefined {
    return this.store.pop()
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

  /** reverse stack */
  reverse(): Stack<T> {
    const newStack = new Stack<T>()
    this.forEach(ele => newStack.push(ele))
    return newStack
  }

  forEach(fn: (ele: T) => any) {
    while(!this.isEmpty()) fn(this.pop())
  }
}
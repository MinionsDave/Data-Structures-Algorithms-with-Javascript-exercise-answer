export class Queue<T> {
  private store: T[] = []

  enqueue(val: T) {
    this.store.push(val)
  }

  dequeue(): T | undefined {
    return this.store.shift()
  }

  front(): T | undefined {
    return this.store[0]
  }

  back(): T | undefined {
    return this.store[this.store.length - 1]
  }

  length(): number {
    return this.store.length
  }

  isEmpty(): boolean {
    return this.store.length === 0
  }
}
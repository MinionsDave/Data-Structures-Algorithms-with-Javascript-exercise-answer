export class Deque<T> {
  private store: T[] = []

  enqueueFromFront(val: T) {
    this.store.unshift(val)
  }

  dequeueFromFront(): T | undefined {
    return this.store.shift()
  }

  enqueueFromBack(val: T) {
    this.store.push(val)
  }

  dequeueFromBack(): T | undefined {
    return this.store.pop()
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
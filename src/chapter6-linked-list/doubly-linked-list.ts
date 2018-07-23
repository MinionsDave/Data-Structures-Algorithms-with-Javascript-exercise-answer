import { TwoWayNode } from "./two-way-node";

export class DoublyLinkedList<T> {
  head = new TwoWayNode<any>('head')

  currentNode = this.head

  find(item: T): TwoWayNode<T> {
    let currentNode = this.head
    while (currentNode.element !== item && currentNode.next) currentNode = currentNode.next
    return currentNode
  }

  insert(element: T, item: T) {
    const newNode = new TwoWayNode<T>(element)
    const current = this.find(item)
    newNode.next = current.next
    newNode.previous = current
    current.next = newNode
  }

  remove(element: T) {
    const currentNode = this.find(element)
    if (currentNode.next !== null) {
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
      currentNode.next = null
      currentNode.previous = null
    }
  }

  findLast(): TwoWayNode<T> {
    let currentNode = this.head
    while (currentNode.next !== null) currentNode = currentNode.next
    return currentNode
  }

  display(): void {
    let currentNode = this.head
    while (currentNode.next !== null) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }

  dispReverse() {
    let currentNode = this.head
    currentNode = this.findLast()
    while (currentNode.previous !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.previous
    }
  }

  // 6.2
  back(n = 1) {
    while (n > 0 && this.currentNode.element !== 'head') {
      this.currentNode = this.currentNode.previous
      n--
    }
  }
}
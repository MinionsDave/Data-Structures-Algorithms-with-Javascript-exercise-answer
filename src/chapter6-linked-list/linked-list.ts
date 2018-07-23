import { Node } from './node'

export class LinkedList<T> {
  head = new Node<any>('head')

  currentNode = this.head

  find(item: T): Node<T> {
    let currentNode = this.head
    while (currentNode.element !== item && currentNode.next) currentNode = currentNode.next
    return currentNode
  }

  findPrevious(item: T): Node<T> {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) currentNode = currentNode.next
    return currentNode
  }

  insert(element: T, item: T) {
    const newNode = new Node<T>(element)
    const current = this.find(item) || this.head
    newNode.next = current.next
    current.next = newNode
  }

  remove(element: T) {
    const prevNode = this.findPrevious(element)
    if (prevNode.next !== null) prevNode.next = prevNode.next.next
  }

  display(): void {
    let currentNode = this.head
    while (currentNode.next !== null) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }

  // 6.1
  advance(n = 1) {
    while (n > 0 && this.currentNode.element !== 'head') {
      this.currentNode = this.currentNode.next
      n--
    }
  }

  // 6.3
  show() {
    console.log(this.currentNode.element)
  }
}
import { CycleLinkedListNode as Node } from './cycle-linked-list-node'

export class CycleLinkedList<T> {
  head = new Node<any>('head', true)

  constructor() { }

  find(item: T): Node<T> {
    let currentNode = this.head
    while (currentNode.element !== item && !currentNode.next.isHeadNode) currentNode = currentNode.next
    return currentNode
  }

  findPrevious(item: T): Node<T> {
    let currentNode = this.head
    while (
      currentNode.next !== null &&
      currentNode.next.element !== item &&
      !currentNode.next.isHeadNode
    ) currentNode = currentNode.next
    return currentNode
  }

  insert(element: T, item: T) {
    const newNode = new Node<T>(element)
    const current = this.find(item)
    newNode.next = current.next
    current.next = newNode
  }

  remove(element: T) {
    const prevNode = this.findPrevious(element)
    if (prevNode.next !== null) prevNode.next = prevNode.next.next
  }

  display(): void {
    let currentNode = this.head
    while (!currentNode.next.isHeadNode) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
}
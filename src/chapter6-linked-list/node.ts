export class Node<T> {

  constructor(
    public element: T,
    public next: Node<T> = null
  ) {
    this.element = element
    this.next = next
  }
}
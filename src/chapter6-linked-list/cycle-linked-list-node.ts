export class CycleLinkedListNode<T> {
  next: CycleLinkedListNode<T> = null

  constructor(
    public element: T,
    public isHeadNode = false
  ) {
    this.element = element
    if (this.isHeadNode) this.next = this
  }
}
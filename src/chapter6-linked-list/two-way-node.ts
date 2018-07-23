export class TwoWayNode<T> {
  constructor(
    public element: T,
    public next: TwoWayNode<T> = null,
    public previous: TwoWayNode<T> = null
  ) {
    this.element = element
    this.next = next
    this.previous = next
  }
}
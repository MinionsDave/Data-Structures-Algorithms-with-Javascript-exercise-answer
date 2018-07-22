import { Deque } from './deque';
import { expect } from 'chai';

const deque = new Deque<number>()

deque.enqueueFromFront(1)
deque.enqueueFromFront(0)
deque.enqueueFromBack(2)
deque.enqueueFromBack(3)

expect(deque.dequeueFromBack()).equals(3)
expect(deque.dequeueFromFront()).equals(0)
expect(deque.front()).equals(1)
expect(deque.back()).equals(2)

console.log('everything ok');
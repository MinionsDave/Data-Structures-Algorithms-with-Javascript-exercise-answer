import { PriorityQueue } from './priority-queue'
import { Patient } from '../patient'
import { expect } from 'chai'

const queue = new PriorityQueue()

queue.enqueue(new Patient('Bob', 5))
queue.enqueue(new Patient('Lonzo', 10))
queue.enqueue(new Patient('Melon', 8))
expect(queue.dequeue().name).equals('Lonzo')
queue.enqueue(new Patient('Dobe', 5))
queue.enqueue(new Patient('Kobe', 2))
expect(queue.dequeue().name).equals('Melon')
expect(queue.dequeue().name).equals('Bob')

console.log('everything ok')
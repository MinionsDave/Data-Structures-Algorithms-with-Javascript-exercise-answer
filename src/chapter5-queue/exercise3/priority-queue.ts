import { Patient } from '../patient';

export class PriorityQueue {
  private store: Patient[] = []

  enqueue(val: Patient) {
    this.store.push(val)
  }

  dequeue(): Patient | undefined {
    const patient = this.store.reduce((pv, p) => p.code > pv.code ? p : pv, this.store[0])
    return this.store.splice(this.store.indexOf(patient), 1)[0]
  }

  front(): Patient | undefined {
    return this.store[0]
  }

  back(): Patient | undefined {
    return this.store[this.store.length - 1]
  }

  length(): number {
    return this.store.length
  }

  isEmpty(): boolean {
    return this.store.length === 0
  }

  toString(): string {
    return this.store.map(p => `${p.name}: ${p.code}`).join(', ')
  }
}
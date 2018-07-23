import { CycleLinkedList } from "../cycle-linked-list";
import * as inquirer from 'inquirer';

async function main() {
  const { input } =  await inquirer.prompt([{
    type: 'input',
    name: 'input',
    message: 'please input the total person count and span. such as "10,5"'
  }]) as { input: string }

  const arr = input.split(',').map(Number)
  const result = getLastTwoIndex(arr[0], arr[1])
  console.log(`safe position is "${result[0]}" and "${result[1]}"`);
}

export function getLastTwoIndex(total: number, span: number): [number, number] {
  const list = new CycleLinkedList<number>()
  let n = 1, last = 0, dropCount = 0, droppedElement
  while(n <= total) {
    list.insert(n, last)
    last = n
    n++
  }
  while(dropCount !== total - 2) {
    let count = 1
    if (!droppedElement) {
      droppedElement = list.head.next
      while(count <= span - 1) {
        droppedElement = droppedElement.next
        if (droppedElement.isHeadNode) continue
        count++
      }
      list.remove(droppedElement.element)
    } else {
      while(count <= span) {
        droppedElement = droppedElement.next
        if (droppedElement.isHeadNode) continue
        count++
      }
      list.remove(droppedElement.element)
    }
    dropCount++
  }

  const result: number[] = []

  return [list.head.next.element, list.head.next.next.element]
}

if (require.main === module) main()
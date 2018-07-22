import { Stack } from '../stack'
import * as inquirer from 'inquirer';

export enum Candies {
  'RED',
  'YELLOW',
  'WHITE'
}

async function main() {
  const { candies } =  await inquirer.prompt([{
    type: 'input',
    name: 'candies',
    message: 'please input the candies'
  }]) as { candies: string }
  const orginalStack = new Stack<Candies>()
  candies.replace(/ /g, '').split(',').forEach(c => orginalStack.push(+c))
  const result: number[] = []
  removeYellowCandy(orginalStack).forEach(c => result.push(c))
  console.log(result.join())
}

export function removeYellowCandy(stack: Stack<Candies>): Stack<Candies> {
  const result = new Stack<Candies>()
  stack.forEach(candy => {
    if (candy !== Candies.YELLOW) result.push(candy)
  })
  return result.reverse()
}

if (require.main === module) main()
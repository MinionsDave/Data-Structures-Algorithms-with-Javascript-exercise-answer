import * as inquirer from 'inquirer';
import { LinkedList } from '../linked-list';

const list = new LinkedList<number>()

let prevScore = 0

async function main() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'what do you want to do?',
      choices: [
        'a: record test score',
        'b: show all test score'
      ],
      filter: answer => {
        return answer.charAt(0)
      }
    }
  ]) as { action: string}

  if (action === 'a') {
    const { score } =  await inquirer.prompt([{
      type: 'input',
      name: 'score',
      message: 'please input the score'
    }]) as { score: number }
    list.insert(+score, prevScore)
    prevScore = score
  } else {
    list.display()
  }

  main()
}

main()
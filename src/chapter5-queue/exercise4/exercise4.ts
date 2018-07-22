import { PriorityQueue } from '../exercise3/priority-queue'
import * as inquirer from 'inquirer';
import { Patient } from '../patient';

const queue = new PriorityQueue()

async function main() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'what do you want to do?',
      choices: [
        'a: patient enter clinic',
        'b: patient visit',
        'c: show waiting visit patient list',
      ],
      filter: answer => {
        return answer.charAt(0)
      }
    }
  ]) as { action: string}

  switch (action) {
    case 'a':
      const { input } =  await inquirer.prompt([{
        type: 'input',
        name: 'input',
        message: 'please input the patient\'s name and code. such as "Bob: 5"'
      }]) as { input: string }
      const [ name, code ] = input.split(': ')
      queue.enqueue(new Patient(name, +code))
      console.log(`${name} enter the clinic`);
      main()
      break;

    case 'b':
      const visitPatient = queue.dequeue()
      if (!visitPatient) {
        console.log('there is no patient in the clinic')
      } else {
        console.log(`${visitPatient.name} visit`);
      }
      main()
      break;

    case 'c':
      console.log(queue.toString())
      main()
      break;
  }
}

main()
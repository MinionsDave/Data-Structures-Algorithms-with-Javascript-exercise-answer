import * as inquirer from 'inquirer'
import { Stack } from './stack';

const Operators = ['+', '-', '*', '/']
const Brackets = ['(', ')']
const OperatorsAndBrackets = Operators.concat(Brackets)

async function main() {
  const { expression } =  await inquirer.prompt([{
    type: 'input',
    name: 'expression',
    message: 'please input the expression'
  }]) as { expression: string }

  const polishNotationStack = toPolishNotation(expression)
  const resultStack = new Stack<string>()
  const polishNotation: string[] = []

  polishNotationStack.forEach(ele => {
    polishNotation.push(ele)
    if (isNumberString(ele)) return resultStack.push(ele)
    const operands2 = resultStack.pop()
    const operands1 = resultStack.pop()
    resultStack.push(eval(`${operands1} ${ele} ${operands2}`))
  })

  console.log('polishNotation: ', polishNotation.join(' '));
  console.log('result: ', resultStack.pop())
}

function toPolishNotation(expression: string): Stack<string> {
  const arr = toArr(expression.replace(/ /g, '')) // convert expression to array of operands and operators
  const s1 = new Stack<string>()
  const s2 = new Stack<string>()

  arr.forEach(ele => {
    if (isNumberString(ele)) return s2.push(ele)

    if (isOperator(ele)) {
      let topEle = s1.peek()
      while (true) {
        if (
          !topEle ||
          topEle === '(' ||
          getOperatorPriority(ele) > getOperatorPriority(topEle)
        ) {
          s1.push(ele)
          break
        }
        s2.push(s1.pop())
        topEle = s1.peek()
      }
    }

    if (ele === '(') return s1.push(ele)

    if (ele === ')') {
      let topEle = s1.pop()
      while (topEle !== '(') {
        s2.push(topEle)
        topEle = s1.pop()
      }
      return
    }
  })

  while(!s1.isEmpty()) s2.push(s1.pop())

  return s2.reverse()
}

function isOperator(char: string): boolean {
  return Operators.includes(char)
}

function getOperatorPriority(operator: string): number {
  return operator === '+' || operator === '-' ? 0 : 1
}

function isNumberString(str: string): boolean {
  return !OperatorsAndBrackets.includes(str)
}

function toArr(content: string): string[] {
  const result = []
  let current = ''
  content.split('').forEach(char => {
    if (OperatorsAndBrackets.includes(char)) {
      if (current) {
        result.push(current)
        current = ''
      }
      return result.push(char)
    }
    current += char
  })
  return result
}

main()
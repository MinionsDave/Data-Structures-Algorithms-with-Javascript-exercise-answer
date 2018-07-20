import { Stack } from './stack';

const Operators = ['+', '-', '*', '/']
const Brackets = ['(', ')']
const OperatorsAndBrackets = Operators.concat(Brackets)

function toPolishNotation(input: string): Stack<string> {
  const arr = toArr(input.replace(/ /g, ''))
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

  return s2
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

toPolishNotation('192 + 23 + 90 * 3 + (2 - 1)')
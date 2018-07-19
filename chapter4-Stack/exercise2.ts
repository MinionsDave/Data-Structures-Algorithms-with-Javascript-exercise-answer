import { Stack } from './stack';

function toPolishNotation(input: string): void {
  const arr = toArr(input.replace(/ /g, ''))
  const s1 = new Stack<string>()
  const s2 = new Stack<string | number>()

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i]
    console.log(ele);
    if (isNumber(ele)) return s2.push(ele)
    if (isOperator(ele as string)) {
      let topEle = s1.peek()
      while (true) {
        if (!topEle || topEle === '(') {
          s1.push(ele as string)
          break
        }
        if (getOperatorPriority(ele as string) > getOperatorPriority(topEle)) {
          s1.push(ele as string)
          break
        } else {
          s2.push(s1.pop())
          topEle = s1.peek()
        }
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
  }

  while(!s1.isEmpty()) {
    s2.push(s1.pop())
  }

  console.log(s2.store.reverse());
}

function isOperator(char: string): boolean {
  return ['+', '-', '*', '/'].includes(char)
}

function getOperatorPriority(operator: string): number {
  return operator === '+' || operator === '-' ? 0 : 1
}

function toArr(content: string): string | number[] {
  const result = []
  const others = ['+', '-', '*', '/', '(', ')']
  let current = ''
  for (let i = 0; i < content.length; i++) {
    const char = content.charAt(i)
    if (others.includes(char)) {
      if (current) {
        result.push(+current)
        current = ''
      }
      result.push(char)
    } else {
      current += char
    }
  }
  return result
}

function isNumber(val: any): boolean {
  return typeof val === 'number'
}


toPolishNotation('192 + 23 + 90 * 3 + (2 - 1)')
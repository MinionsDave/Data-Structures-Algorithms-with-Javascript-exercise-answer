import { expect } from 'chai'
import { toPolishNotation } from './exercise2'

function test(expression: string, expectedResult: string) {
  const polishNotationStack = toPolishNotation(expression)
  const polishNotation: string[] = []
  polishNotationStack.forEach(ele => polishNotation.push(ele))
  expect(polishNotation.join(' ')).equal(expectedResult)
}

test('2 - 1', '2 1 -')
test('2 + 11', '2 11 +')
test('192 + 23 + 90 * 3 + (2 - 1)', '192 23 + 90 3 * + 2 1 - +')
test('(3 + 2) * (2 - 2)', '3 2 + 2 2 - *')

console.log('everything ok');
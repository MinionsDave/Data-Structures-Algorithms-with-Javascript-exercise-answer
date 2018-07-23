import { expect } from 'chai';
import { getLastTwoIndex } from './exercise6';

function test(total: number, span: number, result: string) {
  expect(getLastTwoIndex(total, span).join()).equals(result)
}

test(3, 2, '1,3')
test(8, 3, '4,7')
test(3, 8, '1,3')
test(10, 3, '4,10')

console.log('everything ok')
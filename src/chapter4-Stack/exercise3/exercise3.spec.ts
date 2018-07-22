import { Stack } from "../stack";
import { Candies, removeYellowCandy } from './exercise3';
import { expect } from 'chai';

const orginalStack = new Stack<Candies>()
'0,1,2,2,1,2,0,1'.split(',').reverse().forEach(c => orginalStack.push(+c))
const result: number[] = []
removeYellowCandy(orginalStack).forEach(c => result.push(c))
expect(result.join()).equals('0,2,2,2,0')

console.log('everything ok!');
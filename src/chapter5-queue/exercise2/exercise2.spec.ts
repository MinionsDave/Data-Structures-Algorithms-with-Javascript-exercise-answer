import { expect } from 'chai';
import { isPalindrome } from './exercise2';

expect(isPalindrome('a')).equals(true)
expect(isPalindrome('asa')).equals(true)
expect(isPalindrome('assa')).equals(true)
expect(isPalindrome('assas')).equals(false)

console.log('everything ok');
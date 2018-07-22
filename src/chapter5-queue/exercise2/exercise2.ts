import { Deque } from '../exercise1/deque';

export function isPalindrome(word: string): boolean {
  let isPalindrome = true
  const letterDeque = new Deque<string>()
  for (const letter of word) letterDeque.enqueueFromFront(letter)
  while(!letterDeque.isEmpty()) {
    const frontLetter = letterDeque.dequeueFromFront()
    const backLetter = letterDeque.dequeueFromBack()
    if (backLetter && frontLetter !== backLetter) isPalindrome = false
  }

  return isPalindrome
}
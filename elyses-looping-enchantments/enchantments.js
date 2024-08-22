// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  
  // let acc = 0;

  // for (let i = 0; i < stack.length; i++){
  //   if (stack[i] === card) {
  //     acc++
  //   }
  // }
  // return acc

  return stack.reduce((acc, curr) => {
    if (curr === card) {
      acc++
    }
    return acc
  }, 0)


}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // let even = 0;
  // let odd = 0;
  // for (let i = 0; i < stack.length; i++) {
  //   if (stack[i] % 2 === 0 ) {
  //     even++
  //   } else {
  //     odd++
  //   }
    
  // }
  // return type ? even : odd
  
  const count = stack.filter(card => (card % 2 === 0) === type)
  
  return count.length

}

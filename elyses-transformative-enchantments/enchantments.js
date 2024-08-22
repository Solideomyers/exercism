// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {

  // /**
  //  * @type {number[]}
  //  */
  // const newDeck = []
  // for (let i = 0; i < deck.length; i++){
  //   newDeck.push((deck[i] * 2));
  // }
  // return newDeck;

  return deck.map(card => card * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {

  /**
   * @type {number[]}
   */
  const newDeck = []
  for (const card of deck) {
    if (card === 3) {
      newDeck.push(3, 3, 3)
    } else {
      newDeck.push(card)
    }
  }
  return newDeck;

  // return deck.flatMap(card => card === 3 ? [3,3,3] : [card])


}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(4, 6)  

}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  if (deck.length % 2 !== 0) {
    throw new Error('Deck must have an even number of cards');
  }

  const firstCard = deck[0]
  const lastCard = deck[deck.length - 1]
  const middleDeck = deck.slice(1, -1)

  const middleIndex = Math.floor(middleDeck.length / 2);

  middleDeck.splice(middleIndex, 0, lastCard, firstCard)

  return middleDeck

}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  // const newDeck = []
  // for (let i = 0; i < deck.length; i++) {
  //   if (deck[i] === 2) {
  //     newDeck.push(deck[i])
  //   }
  // }
  // return newDeck

  return deck.filter(card => card === 2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
 
/**
 * @type {number}
 */
  let n = deck.length

  for (let i = 0; i < n - 1; i++){
     for (let j = 0; j < n - i - 1; j++){
       if (deck[j] > deck[j + 1]) {
           [deck[j], deck[j + 1]] = [deck[j + 1], deck[j]]
         }
       } 
    }

  return deck
  // return deck.sort((a, b) => a - b)

}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  
  /**
   * @type {number}
   */
  let n = deck.length

  for (let i = 0; i < n - 1; i++){
     for (let j = 0; j < n - i - 1; j++){
       [deck[j + 1], deck[j]] = [deck[j], deck[j + 1]];
       }
    }

  return deck

  // return deck.reverse()
  
}

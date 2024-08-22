// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console";

export const TIME_STRAWBERRY_JOY = 0.5;
export const TIME_ENRGIZER_AND_GREEN_GARDEN = 1.5;
export const TIME_TROPICAL = 3;
export const TIME_ALL_OR_NOTHING = 5;
export const TIME_STANDARD = 2.5;
export const JUICE_STRAWBERRY_JOY = 'Pure Strawberry Joy'
export const JUICE_ENRGIZER = 'Energizer'
export const JUICE_GREEN_GARDEN = 'Green Garden'
export const JUICE_TROPICAL = 'Tropical Island'
export const JUICE_ALL_OR_NOTHING = 'All or Nothing'

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  switch (name) {
    case JUICE_STRAWBERRY_JOY:     
      return TIME_STRAWBERRY_JOY;
    
    case JUICE_ENRGIZER:
    case JUICE_GREEN_GARDEN:
      return TIME_ENRGIZER_AND_GREEN_GARDEN;
    case JUICE_TROPICAL:
      return TIME_TROPICAL;
    case JUICE_ALL_OR_NOTHING:
      return TIME_ALL_OR_NOTHING;

    default:
      return TIME_STANDARD;
  }
  
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCount = 0;
  let limesCount = 0;

  for (const lime of limes) {
    if (wedgesCount >= wedgesNeeded) {
      break;
    }
    switch (lime) {
      case 'small':
        wedgesCount += 6;
        break;
      case 'medium':
        wedgesCount += 8;
        break;
      case 'large':
        wedgesCount += 10;
        break;
    }
    limesCount++;
  }

  return limesCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders[0])
    orders.shift()
  }

  return orders
}

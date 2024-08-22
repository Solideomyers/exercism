// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let countBirds = 0;

  for (const bird of birdsPerDay) {
    countBirds += bird;
  }
  return countBirds
  // return birdsPerDay.reduce((acc, curr) => acc + curr);

}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

  const startWeek = ((week -1) *7)
  const endWeek = startWeek + 7

  const birdsWeek = birdsPerDay.slice(startWeek, endWeek)

  return totalBirdCount(birdsWeek)

}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2){
    birdsPerDay[i] += 1
  }
  return birdsPerDay

}

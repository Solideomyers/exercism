// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  
  return [...new Set(playlist)];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {

  const newList = new Set(playlist)

  return newList.has(track)

}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  
  return [... new Set([...playlist, track])]

}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  
  const newList = new Set(playlist)
  newList.delete(track)
  return [...newList]

}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */

// There are a few different ways to iterate over a set.
// There is a built-in method for dividing a string into substrings.
// Refer back to the array destructuring concept to recap how to skip an element when destructuring an array.
export function listArtists(playlist) {
  if (playlist.length === 0) {
    return [];
  }

  // set empty
  const artists = new Set()
  for (const track of playlist) { 
    // first iteration track is: 'Onu Alma Beni Al - Sezen Aksu'
    // then '[artist]' is: 'Onu Alma Beni Al'
    const [_, artist] = track.split(' - ')
    // now [artist] that is: 'Onu Alma Beni Al' to added artists (set empty before)
    artists.add(artist)
  }
  
  return Array.from(artists) 
}

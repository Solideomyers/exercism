// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

// Use the test() method for returning a boolean.
// Remember that we can use flags at the end of the regular expression for additional features such as case insensitive.
export function isValidCommand(command) {
  const commandRegex = /^chatbot,\s/i;

  return commandRegex.test(command);

}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */

// In this case we must use the RexExp constructor to build our regular expression.
// Thanks to the common encryption of each emoji, we can use [0-9] to search for any digit after the emojiword.
// The character + matches one or more consecutive items.
// Use the split() method alongside the regex for each emoji to get rid of all encryption.
// Finally, return this splitted array as a string using the join() method.

export function removeEmoji(message) {

  const emojiRegex = /emoji[0-9]+/g;

  return message.split(emojiRegex).join('')
  

}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */

// In this exercise we are playing with groups and ranges. Read this documentation for learning more about it.
// This article is really good at explaining different ways of number validation.
// You may also want to use this cheatsheet for a broad view of available features in regular expressions.
// Use the test() method to check whether the phone number is valid or not.
// Return the final answer with a simple if statement.

export function checkPhoneNumber(number) {
const phoneRegex = /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/;

const isValid = phoneRegex.test(number);

if (isValid) {
  return 'Thanks! You can now download me to your phone.';
} else {
  return `Oops, it seems like I can't reach out to ${number}`;
}
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */

// We are targeting words that are joined by one or more .(dots).
// Remember to put the flag g at the end so we can get all the domains in any sentence.
// Use the match() method to return an array with all the previous matches.

export function getURL(userInput) {
  const urlRegex = /\b(?:[a-z]+\.)?[a-z]+\.[a-z]{2,6}\b/g;

  const urls = userInput.match(urlRegex);

  return urls || null;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */

// First, use the replace() method directly to the given string.
// Use Named Capture Groups to store the name and surname into different values.
// Pass a (...match) destructuring to the replacer function so you can get the name and surname into the object within the matched groups.
// Use the pop() method to store the matched object with name and surname.
// Finally, implement a template String so you can get the values from the regular expression object. See this example for knowing about how match() stores objects.
export function niceToMeetYou(fullName) {
 const namePattern = /(?<lastName>[a-zA-Z]+),\s+(?<firstName>[a-zA-Z]+)/;
 const match = fullName.match(namePattern);

 if (match && match.groups) {
   const { firstName, lastName } = match.groups;
   return `Nice to meet you, ${firstName} ${lastName}`;
 }

 return `Nice to meet you!`;
}

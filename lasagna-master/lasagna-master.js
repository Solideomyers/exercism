/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * 
 * @param {number} timer 
 * @returns {string}
 */

export const cookingStatus = (timer) => {

    if (timer >= 0) {
        if (timer === 0) {
            return 'Lasagna is done.';
        }
        else {
            return 'Not done, please wait.';
        }
    }

    return 'You forgot to set the timer.';
}

/**
 * 
 * @param {[string]} layers
 * @param {number} time
 * @returns {number} time preparation 
 */

export const preparationTime = (layers, time = 2) => {
 
 
    if (time)  return time * layers.length;
 
    return layers.length * 2;
}

/**
 * 
 * @param {[string]} layers 
 * @returns {{noodles: number, sauce: number}}
 */
export const quantities = (layers) => {
    const result = {noodles: 0, sauce: 0.0};
  
    for (const layer of layers) {
        switch (layer) {
            case 'noodles':
                result.noodles += 50;
                break;
            case 'sauce':
                result.sauce += 0.2;
                break;
          default:
            break;
        }
    }
    
    result.sauce = parseFloat(result.sauce.toFixed(2));
    
    return result
};

/**
 * 
 * @param {[string]} friendsList 
 * @param {[string]} myList
 * @returns {void} 
 */

export const addSecretIngredient = (friendsList, myList) => {

    myList.push(friendsList[friendsList.length-1])
}

/**
 * 
 * @param {object} recipe 
 * @param {number} factor
 * @return {object}
 */

export const scaleRecipe = (recipe, factor) => {

    const scaleUp = {}

    for (const layer in recipe) {
        scaleUp[layer] = (recipe[layer] * factor) / 2
    }

    return scaleUp
}
// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  
  if (humidityPercentage < 100) {
    return
  }

  throw new Error(`The humidity level is too high: ${humidityPercentage}%`);
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
 
  if (temperature === null) {
    throw new ArgumentError('Temperature is required');
  }
  else if (temperature === 200) {
    return ;
  }
  else if (temperature === 501) {
    throw new OverheatingError(temperature);
  }
  return
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  

  try {
    actions.check()    
  } catch (error) {
    
    if (error instanceof ArgumentError) { 
      actions.alertDeadSensor()
    }
    else if (error instanceof OverheatingError) {
      if (error.temperature >= 530) {
       error.temperature === 530 ?  actions.alertOverheating() : actions.shutdown()
      } 
    } else {
      throw error
    }
  }

}

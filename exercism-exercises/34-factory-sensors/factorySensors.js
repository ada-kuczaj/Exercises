class ArgumentError extends Error { }

class OverheatingError extends Error {
    constructor(temperature) {
        super(`The temperature is ${temperature} ! Overheating !`);
        this.temperature = temperature;
    }
}

function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70) {
        throw new Error('Humidity percentage is too high!');
    }
}

function reportOverheating(temperature) {
    if (temperature > 500) {
        throw new OverheatingError(temperature);
    } else if (temperature === null) {
        throw new ArgumentError(`The sensor is broken!`);
    }
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

function monitorTheMachine(actions) {
    try {
        actions.check();
    } catch (error) {
        if (error instanceof ArgumentError) {
            actions.alertDeadSensor();
        } else if (error instanceof OverheatingError) {
            if (error.temperature >= 600) {
                actions.shutdown();
            } else {
                actions.alertOverheating();
            }
        } else {
            throw error;
        }
    }
}

module.exports = {
    ArgumentError,
    OverheatingError,
    checkHumidityLevel,
    reportOverheating,
    monitorTheMachine
}
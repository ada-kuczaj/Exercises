const {
    ArgumentError,
    OverheatingError,
    checkHumidityLevel,
    reportOverheating,
    monitorTheMachine
} = require('./factorySensors');

test('checkHumidityLevel > should throw if the humidity percentage is 100', () => {
    expect(() => checkHumidityLevel(100)).toThrow();
});

test('checkHumidityLevel > should not throw if the humidity level is 53', () => {
    expect(() => checkHumidityLevel(53)).not.toThrow();
});

test('reportOverheating > should not throw if the temperature is 200', () => {
    expect(() => reportOverheating(200)).not.toThrow();
});

test('reportOverheating > should throw an ArgumentError if the temperature is null', () => {
    expect(() => reportOverheating(null)).toThrow(ArgumentError);
});

test('reportOverheating > should throw an OverheatingError if the temperature is 501', () => {
    expect(() => reportOverheating(501)).toThrow(OverheatingError);
    const getOverheatingErrorTemperature = () => {
        try {
            reportOverheating(501);
        } catch (error) {
            return error.temperature;
        }
    };
    expect(getOverheatingErrorTemperature()).toBe(501);
});

test('monitorTheMachine > should call the check method once', () => {
    const actions = {
        check: jest.fn(),
        alertDeadSensor: jest.fn(),
        alertOverheating: jest.fn(),
        shutdown: jest.fn()
    };
    monitorTheMachine(actions);
    expect(actions.check).toHaveBeenCalledTimes(1);
});

test("monitorTheMachine > should not call any action if the check doesn't throw", () => {
    const actions = {
        check: jest.fn(),
        alertDeadSensor: jest.fn(),
        alertOverheating: jest.fn(),
        shutdown: jest.fn()
    };
    monitorTheMachine(actions);
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
});

test('monitorTheMachine > should call only the alertDeadSensor if the check throws an ArgumentError', () => {
    const actions = {
        check: jest.fn(() => { throw new ArgumentError(); }),
        alertDeadSensor: jest.fn(),
        alertOverheating: jest.fn(),
        shutdown: jest.fn()
    };
    monitorTheMachine(actions);
    expect(actions.alertDeadSensor).toHaveBeenCalledTimes(1);
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
});

test('monitorTheMachine > should call only the shutdown action if the check throws an OverheatingError with a temperature of 651°C', () => {
    const actions = {
        check: jest.fn(() => { throw new OverheatingError(651); }),
        alertDeadSensor: jest.fn(),
        alertOverheating: jest.fn(),
        shutdown: jest.fn()
    };
    monitorTheMachine(actions);
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).toHaveBeenCalledTimes(1);
});

test('monitorTheMachine > should call only the alertOverheating if the check throws an OverheatingError with a temperature of 530°C', () => {
    const actions = {
        check: jest.fn(() => { throw new OverheatingError(530); }),
        alertDeadSensor: jest.fn(),
        alertOverheating: jest.fn(),
        shutdown: jest.fn()
    };
    monitorTheMachine(actions);
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).toHaveBeenCalledTimes(1);
    expect(actions.shutdown).not.toHaveBeenCalled();
});

test('monitorTheMachine > should rethrow the error if the check throws an unknown error', () => {
    class UnknownError extends Error {}
    const actions = {
        check: jest.fn(() => { throw new UnknownError(); }),
        alertDeadSensor: jest.fn(),
        alertOverheating: jest.fn(),
        shutdown: jest.fn()
    };
    expect(() => monitorTheMachine(actions)).toThrow(UnknownError);
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
});

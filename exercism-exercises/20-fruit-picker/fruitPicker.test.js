const { onSuccess, onError, orderFromGrocer, postOrder } = require('./fruitPicker');

// Mock notify function
jest.mock('./fruitPicker', () => {
  const originalModule = jest.requireActual('./fruitPicker');
  return {
    ...originalModule,
    notify: jest.fn(),
    order: jest.fn()
  };
});

describe('Order Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('onSuccess should call notify with a success message', () => {
    const { notify } = require('./fruitPicker');
    onSuccess();
    expect(notify).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledWith({ message: 'SUCCESS' });
  });

  test('onError should call notify with an error message', () => {
    const { notify } = require('./fruitPicker');
    onError();
    expect(notify).toHaveBeenCalledTimes(1);
    expect(notify).toHaveBeenCalledWith({ message: 'ERROR' });
  });

  test('orderFromGrocer passes query and callback function arguments forward', () => {
    const { order } = require('./fruitPicker');
    const query = { variety: 'apple', quantity: 10 };
    orderFromGrocer(query, onSuccess, onError);
    expect(order).toHaveBeenCalledTimes(1);
    expect(order).toHaveBeenCalledWith(query, onSuccess, onError);
  });

  test('postOrder composes a request to the grocer using the defined callbacks', () => {
    const { order } = require('./fruitPicker');
    const variety = 'banana';
    const quantity = 5;
    postOrder(variety, quantity);
    expect(order).toHaveBeenCalledTimes(1);
    expect(order).toHaveBeenCalledWith(
      { variety, quantity },
      onSuccess,
      onError
    );
  });
});

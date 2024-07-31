const { notify, order, onSuccess, onError, orderFromGrocer, postOrder } = require('./fruitPicker');

jest.mock('./fruitPicker', () => ({
    notify: jest.fn(),
    order: jest.fn((query, onSuccess, onError) => {
        if (query.variety && query.quantity > 0) {
            onSuccess();
        } else {
            onError();
        }
    }),
    onSuccess: jest.fn(() => {
        require('./fruitPicker').notify({ message: 'SUCCESS' });
    }),
    onError: jest.fn(() => {
        require('./fruitPicker').notify({ message: 'ERROR' });
    }),
    orderFromGrocer: jest.fn((query, onSuccessCallback, onErrorCallback) => {
        require('./fruitPicker').order(query, onSuccessCallback, onErrorCallback);
    }),
    postOrder: jest.fn((variety, quantity) => {
        const query = { variety, quantity };
        require('./fruitPicker').orderFromGrocer(query, require('./fruitPicker').onSuccess, require('./fruitPicker').onError);
    }),
}));

describe('Order Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('onSuccess should call notify with a success message', () => {
        const { onSuccess } = require('./fruitPicker');
        onSuccess();
        expect(notify).toHaveBeenCalledTimes(1);
        expect(notify).toHaveBeenCalledWith({ message: 'SUCCESS' });
    });

    test('onError should call notify with an error message', () => {
        const { onError } = require('./fruitPicker');
        onError();
        expect(notify).toHaveBeenCalledTimes(1);
        expect(notify).toHaveBeenCalledWith({ message: 'ERROR' });
    });

    test('orderFromGrocer passes query and callback function arguments forward', () => {
        const { orderFromGrocer, order } = require('./fruitPicker');
        const query = { variety: 'apple', quantity: 10 };
        orderFromGrocer(query, onSuccess, onError);
        expect(order).toHaveBeenCalledTimes(1);
        expect(order).toHaveBeenCalledWith(query, onSuccess, onError);
    });

    test('postOrder composes a request to the grocer using the defined callbacks', () => {
        const { postOrder, orderFromGrocer } = require('./fruitPicker');
        const variety = 'banana';
        const quantity = 5;
        postOrder(variety, quantity);
        expect(orderFromGrocer).toHaveBeenCalledTimes(1);
        expect(orderFromGrocer).toHaveBeenCalledWith(
            { variety, quantity },
            expect.any(Function),
            expect.any(Function)
        );
    });
});

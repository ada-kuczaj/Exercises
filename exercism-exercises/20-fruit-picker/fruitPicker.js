function notify(message) {
    console.log(message.message);
}

function order(query, onSuccess, onError) {
    setTimeout(() => {
        if (query.variety && query.quantity > 0) {
          onSuccess();
        } else {
          onError();
        }
      }, 1000);
}

function onSuccess() {
    notify({ message: 'SUCCESS' });
}

function onError() {

    notify({ message: 'ERROR' });
}


function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback);
}
function postOrder(variety, quantity) {
    const query = { variety, quantity };
    orderFromGrocer(query, onSuccess, onError);
}

module.exports = {
    notify,
    order,
    onSuccess,
    onError,
    orderFromGrocer,
    postOrder
}
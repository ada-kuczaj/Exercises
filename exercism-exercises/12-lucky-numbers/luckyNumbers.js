function twoSum(numberOne, numberTwo) {

    let numberOneString = numberOne.join('');
    let numberOneInt = parseInt(numberOneString, 10);

    let numberTwoString = numberTwo.join('');
    let numberTwoInt = parseInt(numberTwoString, 10);

    let sum = numberOneInt + numberTwoInt;
    return sum;
}

function luckyNumber(value) {
    const number = String(value);
    let reversedNumber = '';
    for (let i = number.length - 1; i >= 0; i--) {
      reversedNumber += number[i];
    }
    return number === reversedNumber;
  }

  function errorMessage(input) {
    if(input === '' || input === null || input === undefined){
      return 'Required field';
    }else if(input > 0) {
      return '';
    }else{
      return 'Must be a number besides 0';
    };
  }


module.exports = {
    twoSum,
    luckyNumber,
    errorMessage
}
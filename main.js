const digits = [2, 3, 4, 5, 6, 7, 8, 9];
const getRange = (from, to) => (
  (new Array(to - from + 1))
    .fill(from)
    .map((value, index) => value + index)
);

console.time('With console');
console.info('Console.log statement');
console.timeEnd('With console');
console.time('Without console');
console.timeEnd('Without console');

console.group('10 iterations');

console.time('0 console statements');
getRange(1, 11).filter(number => {
  const isPrime = digits.every(digit => {
    if (number === digit) {
      return true;
    }
    if (number % digit === 0) {
      return false;
    }

    return true;
  })

  return isPrime;
})
console.timeEnd('0 console statements');

console.time('x1 console statements');
getRange(1, 11).filter(number => {
  const isPrime = digits.every(digit => {
    if (number === digit) {
      return true;
    }
    if (number % digit === 0) {
      return false;
    }

    return true;
  })

  isPrime ? console.info('%d is prime', number) : console.info('%d is not prime', number);

  return isPrime;
})
console.timeEnd('x1 console statements');

console.time('x9 console statements');
getRange(1, 11).filter(number => {
  const isPrime = digits.every(digit => {
    console.info('Number: %d; Digit: %d', number, digit);

    if (number === digit) {
      return true;
    }
    if (number % digit === 0) {
      return false;
    }

    return true;
  })

  isPrime ? console.info('%d is prime', number) : console.info('%d is not prime', number);

  return isPrime;
})
console.timeEnd('x9 console statements');

console.groupEnd();


console.group('1000 iterations');

console.time('0 console statements');
getRange(1, 1001).filter(number => {
  const isPrime = digits.every(digit => {
    if (number === digit) {
      return true;
    }
    if (number % digit === 0) {
      return false;
    }

    return true;
  })

  return isPrime;
})
console.timeEnd('0 console statements');

console.time('x1 console statements');
getRange(1, 1001).filter(number => {
  const isPrime = digits.every(digit => {
    if (number === digit) {
      return true;
    }
    if (number % digit === 0) {
      return false;
    }

    return true;
  })

  isPrime ? console.info('%d is prime', number) : console.info('%d is not prime', number);

  return isPrime;
})
console.timeEnd('x1 console statements');

console.time('x9 console statements');
getRange(1, 1001).filter(number => {
  const isPrime = digits.every(digit => {
    console.info('Number: %d; Digit: %d', number, digit);

    if (number === digit) {
      return true;
    }
    if (number % digit === 0) {
      return false;
    }

    return true;
  })

  isPrime ? console.info('%d is prime', number) : console.info('%d is not prime', number);

  return isPrime;
})
console.timeEnd('x9 console statements');

console.groupEnd();

exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here

  /*
  Find all factors of n

  1) Divide n by all integers from 2 to n/2 + 1, in order, returning only integer results (factors)
  2) Check each factor in turn to see if it is prime
  3) Divide factor by all integers from 2 to factor/2 + 1, returning only integer results
  4) If an integer result is found, factor is not prime, move on to the next factor
  5) If no integer results are found, assign factor to primeNumber and return
  */

  let factors = [];
  for (i = 2; i < n / 2 + 1; i++) {
    if (n % i === 0) {
      factors.push(n / i);
    }
  }

  for (i = 0; i < factors.length; i++) {
    let isPrime = true;
    for (j = 2; j < factors[i] / 2 + 1; j++) {
      if (factors[i] % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      primeNumber = factors[i];
      return primeNumber;
    }
  }

  // for (i = Math.floor(n / 2); i >= 2; i--) {
  //   if (n % i === 0) {
  //     InnerLoop: for (j = 2; j < i / 2 + 1; j++) {
  //       if (i % j === 0) {
  //         break InnerLoop;
  //       }
  //     }
  //     primeNumber = i;
  //     return primeNumber;
  //   }
  // }

  // Try again. Two functions. One to find the factors, another to test the factors.

  // function isPrime(i) {
  //   for (j = 2; j < i / 2 + 1; i++) {
  //     if (i % j === 0) {
  //       return;
  //     }
  //   }
  //   if (i > primeNumber) {
  //     primeNumber = i;
  //   }
  // }

  // for (i = Math.floor(n / 2); i >= 2; i--) {
  //   if (n % i === 0) {
  //     isPrime(i);
  //   }
  // }
  // return primeNumber;
};

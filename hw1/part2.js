#!/usr/bin/env node

var fs = require('fs');
var output = 'primes.txt';

primes = []

for(var i=2; ; i++) {

    // Divided by 2~sart(i), if it is perfectly divided, 
    // then it is not a prime
    isPrime = true;
    for (var j=2; j<=Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break
        }
    }
    
    // If it's a prime, add it to the prime array
    if (isPrime) primes.push(i);

    // If there're already 100 primes, break
    if (primes.length == 100) break;
}


// Convert the prime array to the string and then write it into the output file
fs.writeFileSync(output, primes.toString());
        

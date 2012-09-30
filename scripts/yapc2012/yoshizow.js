// -*- javascript -*-

var primeSum = function(nth) {
    if (nth <= 5) throw new RangeError();

    var primes = new Array(nth);
    primes.splice(0, 5,  2, 3, 5, 7, 11);
    var count = 5;
    var sum = 28;
outer:
    for (var p = primes[count - 1] + 2; ; p += 2) {
        var q;
        for (var i = 1; (q = primes[i]), q * q <= p; i++) {
            if (p % q == 0)
                continue outer;
        }
        primes[count] = p;
        count++;
        sum += p;
        if (count >= nth)
            break;
    }

    return sum;
}

var result = primeSum(10000);
console.log(result);

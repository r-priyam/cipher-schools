// Write a JS program to find 100C2 in less than 5 seconds.

function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}
function ncr(n, r) {
    return fact(n) / (fact(r) * fact(n - r));
}

const value = ncr(100, 2);
console.log(value);

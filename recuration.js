function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);

}
const myfactorial = factorialRecursive(5);
console.log(myfactorial);

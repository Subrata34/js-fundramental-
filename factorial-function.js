// function factorial(number) {
//     let fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact = fact * i;

//     }
//     return fact;
// }

// let facto = factorial(7);
// console.log('factorial of 9 is :', facto);
// function getfactorial(number) {
//     let i = number;
//     let factorial = 1;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// const myfactorial = getfactorial(6);
// console.log(myfactorial);
function factorialFirst(num) {

    factorial = 1;
    for (i = num; i >= 1; i--) {
        factorial = factorial * i;

    }
    return factorial;

}
var numberIs = factorialFirst(4);
console.log('this is my factorial number:', numberIs);
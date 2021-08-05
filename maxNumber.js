// var a = [10, 20, 50, 70, 80, 30, 20];
// var max = 0;
// for (var i = 0; i <= a[i].lenght; i++) {
//     if (max < a[i]) {
//         max = a[i];
//     }
// }
// console.log(max);
// var hamid = 800;
// var halal = 900;
// var balal = 500;
// var maxNumber = Math.max(halal, balal, hamid);
// console.log(maxNumber);
// var minNumber = Math.min(halal, balal, hamid);
// console.log(minNumber);
function number(halal, balal, hamid) {
    var minNumber = Math.min(halal, balal, hamid);
    return minNumber;
}
var minvalue = number(600, 300, 900);
console.log(minvalue);
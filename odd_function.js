function isodd(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const number = 144;
const ismyNumber = isodd(number);
console.log('my odd number', ismyNumber);

const number_1 = 155;
const isthisnumber = isodd(number_1);
console.log('my even number', isthisnumber);
function leap_year(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const number = 2030;
const isnumber = leap_year(number);
console.log(isnumber);
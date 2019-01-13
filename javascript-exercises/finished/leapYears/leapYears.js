const leapYears = function(year) {

    if (Number.isInteger(year / 100) && !Number.isInteger(year / 400)) {
        return false;
    } else if (Number.isInteger(year / 400)) {
        return true;
    } else if (Number.isInteger(year / 4)) {
        return true;
    } else {
        return false;
    }



    // There is a leap year every year whose number is perfectly divisible by four - 
    // except for years which are both divisible by 100 and not divisible by 400. 
    // The second part of the rule effects century years. 
    // For example; the century years 1600 and 2000 are leap years, 
    // but the century years 1700, 1800, and 1900 are not.
}

module.exports = leapYears

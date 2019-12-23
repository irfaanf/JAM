var birthYears = [1990, 1987, 1996, 1956, 1991, 2010];

var useFunction = function (array, fnct ){

    var resultArray = [];

    for (let index = 0; index < array.length; index++) {
        resultArray[index] = fnct(array[index]);
    }
    return resultArray;
};

var calculateAge = function (birthYear) { return 2019 -birthYear;};

var stillAMinor = function (birthYear) { return (calculateAge(birthYear) < 18);};

var ages = useFunction(birthYears, calculateAge);

var isMinor = useFunction(birthYears, stillAMinor);

console.log(ages);
console.log(isMinor);

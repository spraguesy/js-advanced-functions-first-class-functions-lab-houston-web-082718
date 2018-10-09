// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0,2);
};

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2);
};

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function (x) {
    return function multiplier(y) {
        return y * x;
    };
};

function fareDoubler(x) {
    return x * 2;
};

const fareTripler = function (x) {
    return x * 3;
};

const fetchSpecifiedDrivers = function (array, func) {
    return func(array);
};


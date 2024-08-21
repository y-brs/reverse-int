module.exports = function reverse(num) {
    return parseInt(num.toString().split("").reverse().join(""));
};

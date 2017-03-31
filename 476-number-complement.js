var findComplement = function(num) {
    let numArr = [];
    let result = 0;
    while (num > 0) {
        if (num % 2 === 1) {
            numArr.push(0);
        } else {
            numArr.push(1);
        }
        num = Math.floor(num / 2);
    }
    for (let i = 0; i < numArr.length; i++) {
        result += (numArr[i] * Math.pow(2, i));
    }
    return result;
};

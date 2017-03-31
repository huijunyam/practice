var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, "").length;
};

var hammingDistance = function(x, y) {
    let xArr = [];
    let yArr = [];
    let count = 0;
    while (x > 0) {
        xArr.push(x % 2);
        x = Math.floor(x / 2);
    }
    while (y > 0) {
        yArr.push(y % 2);
        y = Math.floor(y / 2);
    }
    if (yArr.length < xArr.length) {
        let tempArr = yArr;
        yArr = xArr;
        xArr = tempArr;
    }
    for (let i = 0; i < yArr.length; i++) {
        if (i < xArr.length && xArr[i] !== yArr[i]) {
            count += 1;
        } else if (i >= xArr.length && yArr[i] === 1) {
            count += 1;
        }
    }
    return count;
};

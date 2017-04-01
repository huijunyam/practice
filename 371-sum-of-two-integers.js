var getSum = function(a, b) {
    let result = a;
    while (b !== 0) {
        result = a ^ b;
        b = (a & b) << 1;
        a = result;
    }
    return result;
};

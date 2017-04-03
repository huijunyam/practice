var twoSum = function(numbers, target) {
    let startPtr = 0;
    let lastPtr = numbers.length - 1;
    while (startPtr < lastPtr) {
        if (numbers[startPtr] + numbers[lastPtr] === target) {
            return [startPtr + 1, lastPtr + 1];
        } else if (numbers[startPtr] + numbers[lastPtr] < target) {
            startPtr++;
        } else {
            lastPtr--;
        }
    }
};

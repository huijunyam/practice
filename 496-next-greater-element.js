var nextGreaterElement = function(findNums, nums) {
    let obj = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }
    for (let i = 0; i < findNums.length; i++) {
        let index = obj[findNums[i]] + 1;
        if (index === nums.length) {
            result.push(-1);
        } else {
          for (let j = index; j < nums.length; j++) {
            if (nums[j] > findNums[i]) {
                result.push(nums[j]);
                break;
            } else if (j === nums.length - 1) {
                result.push(-1);
            }
          }
        }
    }
    return result;
};

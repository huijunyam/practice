var findRelativeRanks = function(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        newArr.push(nums[i]);
    }
    newArr = newArr.sort((a, b) => {return b - a});
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === newArr[0]) {
            nums[i] = "Gold Medal";
        } else if (nums[i] === newArr[1]) {
            nums[i] = "Silver Medal";
        } else if (nums[i] === newArr[2]) {
            nums[i] = "Bronze Medal";
        } else {
            let index = newArr.indexOf(nums[i]);
            nums[i] = (index + 1).toString();
        }
    }

    return nums;
};

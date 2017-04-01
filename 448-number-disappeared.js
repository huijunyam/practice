var findDisappearedNumbers = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = - nums[index];
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) result.push(j + 1);
    }
    return result;
};

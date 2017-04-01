var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count++;
        if (nums[i + 1] !== nums[i]) {
            if (count > max) max = count;
            count = 0;
        }
    }
    return (count > max) ? count : max;
};

var minMoves = function(nums) {
    let moves = 0;
    let minimum = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        if (minimum > nums[i]) {
            minimum = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        moves += (nums[i] - minimum);
    }
    return moves;
};

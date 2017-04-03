def min_moves(nums)
    moves = 0
    minimum = nums.min
    nums.each do |el|
        moves += (el - minimum)
    end
    moves
end

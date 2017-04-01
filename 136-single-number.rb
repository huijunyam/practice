def single_number(nums)
    result = 0
    nums.each do |el|
        result ^= el
    end
    result
end

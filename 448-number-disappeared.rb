def find_disappeared_numbers(nums)
    result = []
    nums.each do |el|
        index = el.abs - 1
        if (nums[index] > 0)
            nums[index] = - nums[index]
        end
    end
    nums.each_with_index do |el, idx|
        if el > 0
            result << (idx + 1)
        end
    end
    result
end

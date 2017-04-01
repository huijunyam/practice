def find_max_consecutive_ones(nums)
    max = 0;
    count = 0;
    nums.each_with_index do |el, idx|
        count += 1
        if nums[idx + 1] != el
            max = count if count > max
            count = 0
        end
    end
    count > max ? count : max
end

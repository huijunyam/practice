def find_relative_ranks(nums)
    sorted_arr = nums.sort{ |a, b| b <=> a }
    (0...nums.length).each do |i|
        if nums[i] == sorted_arr[0]
            nums[i] = "Gold Medal"
        elsif nums[i] == sorted_arr[1]
            nums[i] = "Silver Medal"
        elsif nums[i] == sorted_arr[2]
            nums[i] = "Bronze Medal"
        else
            nums[i] = (sorted_arr.index(nums[i]) + 1).to_s
        end
    end
    nums
end

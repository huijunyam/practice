def next_greater_element(find_nums, nums)
    result = []
    hash = {}
    nums.each_with_index do |el, idx|
        hash[el] = idx
    end
    find_nums.each_with_index do |el, i|
        index = hash[el] + 1
        if index == nums.length
            result << -1
        else
            (index...nums.length).each do |j|
                if (nums[j] > find_nums[i])
                    result << nums[j]
                    break
                elsif j === nums.length - 1
                    result << -1
                end
            end
        end
    end
    result
end

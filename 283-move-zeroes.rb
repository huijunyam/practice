def move_zeroes(nums)
  j = 0
  (0...nums.length).each do |i|
    if nums[i] != 0
      nums[i], nums[j] = nums[j], nums[i]
      j += 1
    end
  end
  nums
end

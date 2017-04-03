def two_sum(numbers, target)
    startPtr = 0
    lastPtr = numbers.length - 1
    while (startPtr < lastPtr)
        if (numbers[startPtr] + numbers[lastPtr] == target)
            return [startPtr + 1, lastPtr + 1]
        elsif numbers[startPtr] + numbers[lastPtr] < target
            startPtr += 1
        else
            lastPtr -= 1
        end
    end
end

def find_complement(num)
    numArr = [];
    result = 0;
    while num > 0
        if num % 2 === 0
            numArr << 1
        else
            numArr << 0
        end
        num /= 2
    end
    numArr.each_with_index do |el, idx|
        result += (el * (2**idx))
    end
    result
end

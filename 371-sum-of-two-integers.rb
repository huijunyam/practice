def get_sum(a, b)
    result = a
    while b != 0
        result = a ^ b
        b = (a & b) << 1
        a = result
    end
    result
end

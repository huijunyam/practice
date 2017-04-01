def find_the_difference(s, t)
    hash = {};
    s.chars.each do |char|
        if hash[char] == nil
            hash[char] = 1
        else
            hash[char] += 1
        end
    end

    t.chars.each do |char|
        if (hash[char] == nil || hash[char] <= 0)
            return char
        end
        hash[char] -= 1
    end

end

def find_the_difference(s, t)
    s = s << t
    result = 0;
    s.chars.each do |char|
        result ^= char.ord
    end
    result.chr
end

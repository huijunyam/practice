def reverse_string(s)
    str = ""
    (s.length - 1).downto(0).each do |i|
        str << s[i]
    end
    str
end

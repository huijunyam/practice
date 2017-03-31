def find_words(words)
    words.select do |word|
        word =~ /^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/i
    end
end

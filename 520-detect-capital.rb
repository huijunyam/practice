def detect_capital_use(word)
    (word =~ /^[A-Z]*$|^[A-Z][a-z]*$|^[a-z]$/) != nil
end

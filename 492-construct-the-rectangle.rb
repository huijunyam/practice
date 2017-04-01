def construct_rectangle(area)
    width = Math.sqrt(area).to_i
    while area % width != 0
        width -= 1
    end
    [(area / width), width]
end

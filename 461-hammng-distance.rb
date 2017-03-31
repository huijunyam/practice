def hamming_distance(x, y)
    (x ^ y).to_s(2).gsub(/0/, "").length
end

def hamming_distance(x, y)
    xArr = [];
    yArr = [];
    count = 0;
    while x > 0
        xArr << (x % 2)
        x = x / 2
    end
    while y > 0
        yArr << (y % 2)
        y = y / 2
    end
    if yArr.length < xArr.length
        xArr, yArr = yArr, xArr;
    end
    (0...yArr.length).each do |idx|
        if (idx < xArr.length && xArr[idx] != yArr[idx])
            count += 1
        elsif (idx > xArr.length && yArr[idx] == 1)
            count += 1
        end
    end
    count
end

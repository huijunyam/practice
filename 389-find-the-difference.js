var findTheDifference = function(s, t) {
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] + 1) || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]] === undefined || hash[t[i]] <= 0) {
            return t[i];
        }
        hash[t[i]]--;
    }
};

var findTheDifference = function(s, t) {
    let combinedStr = s + t;
    let result = 0;
    for (let i = 0; i < combinedStr.length; i++) {
        result ^= combinedStr.charCodeAt(i);
    }
    return String.fromCharCode(result);
};

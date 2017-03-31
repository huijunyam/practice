var findWords = function(words) {
    return words.filter(word => {
        return word.match(/^[qwertyuiop]*$|^[asdfghjkl]*$|^[zxcvbnm]*$/i);
    });
};

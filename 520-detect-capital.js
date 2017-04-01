var detectCapitalUse = function(word) {
    return word.match(/^[A-Z]*$|^[A-Z][a-z]*$|^[a-z]$/g) !== null;
};

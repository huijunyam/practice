var findContentChildren = function(g, s) {
    let result = 0;
    let sortedCookies = s.sort((a, b) => {return a - b});
    let sortedChildren = g.sort((a, b) => {return a - b});
    let childrenPtr = 0;
    let cookiePtr = 0;
    while (childrenPtr < sortedChildren.length && cookiePtr < sortedCookies.length) {
        if (sortedChildren[childrenPtr] <= sortedCookies[cookiePtr]) {
            result++;
            childrenPtr++;
            cookiePtr++;
        } else if (sortedChildren[childrenPtr] > sortedCookies[cookiePtr]) {
            cookiePtr++;
        }
    }
    return result;
};

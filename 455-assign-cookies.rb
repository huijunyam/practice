def find_content_children(g, s)
    sortedChildren = g.sort
    sortedCookies = s.sort
    result = 0
    childrenPtr = 0
    cookiePtr = 0
    while childrenPtr < sortedChildren.length && cookiePtr < sortedCookies.length
        if sortedChildren[childrenPtr] <= sortedCookies[cookiePtr]
            result += 1
            childrenPtr += 1
            cookiePtr += 1
        elsif sortedChildren[childrenPtr] > sortedCookies[cookiePtr]
            cookiePtr += 1
        end
    end
    result
end

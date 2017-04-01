# space complexity O(h), h is the depth of the tree
# time complexity o(n), n is the number of node 
def invert_tree(root)
    return nil if root == nil
    left = invert_tree(root.left);
    right = invert_tree(root.right);
    root.left = right;
    root.right = left;
    return root;
end

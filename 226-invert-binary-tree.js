 // space complexity O(h), h is the depth of the tree
 // time complexity o(n), n is the number of node 
var invertTree = function(root) {
    if (root === null) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

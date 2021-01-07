class Node {
    constructor(name, left, right) {
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
        this.name = name;
    }
}

example = new Node(1,
                   new Node(7, new Node(4)),
                   new Node(5, new Node(3), new Node(9)));


function sumWithinBounds(node, lower, upper) {
    rsf = 0;
    if (node.name >= lower && node.name <= upper) {
        rsf += node.name;
    }
    if (node.left) {
        rsf += sumWithinBounds(node.left, lower, upper);
    }
    if (node.right) {
        rsf += sumWithinBounds(node.right, lower, upper);
    }
    return rsf;
}

sumWithinBounds(example, 3, 5)
// time complexity: O(n) cuz have to visit every node
// space complexity: O(n) cuz not balanced


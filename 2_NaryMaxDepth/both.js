class Node {
    constructor(name, arr) {
        this.children = arr !== undefined ? arr : [];
        this.name = name;
    }
}

example = new Node(4, [new Node(3, [new Node(7)]), new Node(9), new Node(2, [new Node(2)])]);

function findMaxDepth(root) {
    return findMaxDepth_helper(root.children, 1);
}

function findMaxDepth_helper(nodes_arr, cur_depth) {
    if (nodes_arr.length === 0) {
        return cur_depth;
    }
    return Math.max(...nodes_arr.map((x) => findMaxDepth_helper(x.children, cur_depth+1)));
}

findMaxDepth(example)
// space complexity: O(1)
// time complexity: O(n)

function findMaxDepth_ITERATIVE(root) {
    // height of each child_node
    arr = [];
    
    maxDepth = 0;
    arr.push(root);
    while (arr.length > 0) {
        maxDepth++;
        length = arr.length
        for (i=0; i < length; i++) {
            node = arr.shift();
            arr.push(...node.children);
        }
    }
    return maxDepth;
}
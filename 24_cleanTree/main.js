class Node {
    constructor(value, left, right) {
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
        this.value = value;
    }

    insert(value) {
        let node = this;
        while (node !== null) {
            let temp = node;
            if (value < node.value) {
                temp = node.left;
                if (temp === null) {
                    node.left = new Node(value);
                }
            } else {
                temp = node.right;
                if (temp === null) {
                    node.right = new Node(value);
                }
            }
            node = temp;
        }
    }
}

// time complexity:  O(n)
// space complexity: O(n)
function cleanTree(root) {
    if (root === null) {
        return null;
    }
    root.left = cleanTreeHelper(root.left, root.value === 0)
    root.right = cleanTreeHelper(root.right, root.value === 0)
    return root;
}

function cleanTreeHelper(node, onlyZeros) {
    if (node === null) {
        return null;
    }
    if (node.left === null && node.right === null && onlyZeros && node.value === 0) {
        return null;
    }
    onlyZeros = (node.value === 0);
    node.left = cleanTreeHelper(node.left, onlyZeros);
    node.right = cleanTreeHelper(node.right, onlyZeros);
    if (!node.left && !node.right && onlyZeros) {
        node = null;
    }
    return node;
}

example1 = new Node(1, new Node(1), new Node(0));

console.log(JSON.stringify(cleanTree(example1), (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
}, 4), "\n\n");

example2 = new Node(1, new Node(1), new Node(0, new Node(1), new Node(1)))

console.log(JSON.stringify(cleanTree(example2), (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
}, 4), "\n\n");

example3 = new Node(1, new Node(1), new Node(0, new Node(0), new Node(0)))

console.log(JSON.stringify(cleanTree(example3), (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
}, 4), "\n\n");

example4 = new Node(1, new Node(1), new Node(1, new Node(0), new Node(0)))

console.log(JSON.stringify(cleanTree(example4), (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
}, 4), "\n\n");
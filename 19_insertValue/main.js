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

function insertValue(root, value) {
    root.insert(value);
    return root;
}
// time complexity:  O(n) because search tree not guaranteed to be balanced
// space complexity: O(1)

example1 = new Node(2, new Node(1), new Node(3));

console.log(JSON.stringify(example1, (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
}, 4));

insertValue(example1, 4);
console.log(JSON.stringify(example1, (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
}, 4));

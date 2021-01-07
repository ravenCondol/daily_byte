class Node {
    constructor(value, left, right) {
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
        this.value = value;
    }
}

count = 0

function treeRecursive(root, k) {
    let numLeft = 0;
    let numRight = 0;
    if (root.left) {
        numLeft = treeRecursive(root.left, k);
    }
    if (root.right) {
        numRight = treeRecursive(root.right, k);
    }
    return numLeft + numRight + treeRecursiveHelper(root, k, 0, 0);
}

function treeRecursiveHelper(start, k, numPaths, sum) {
    if (!start) {
        return numPaths;
    }
    sum += start.value;
    let numLeft = treeRecursiveHelper(start.left, k, numPaths, sum);
    let numRight = treeRecursiveHelper(start.right, k, numPaths, sum);
    console.log(`${count++ || true ? count : count}numLeft: ${numLeft}, numRight: ${numRight}, numPaths: ${numPaths}, sum: ${sum}`);
    if (sum === k) {
        console.log("ADDING! :sob: " + new Date().getTime());
        numPaths += 1;
    }
    return numPaths + numLeft + numRight;
}

// time complexity: O(n^2)
// space complexity: O(n)

example1 = new Node(3, new Node(1), new Node(8))
example2 = new Node(2, new Node(-4, new Node(2)), new Node(9))
example3 = new Node(2, new Node(0, new Node(2)))


check_expect = (i, j) => console.log(`Expected ${i}, got ${j}! ${i == j ? 'PASSED' : 'FAILED'}`)
// check_expect(1, treeRecursive(example1, 11));

// check_expect(2, treeRecursive(example2, 2));
check_expect(4, treeRecursive(example3, 2));


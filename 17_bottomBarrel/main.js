class Node {
    constructor(value, left, right) {
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
        this.value = value;
    }
}

function bottomBarrel(root) {
    return bottomBarrel_helper(root, 0, root.value)[1];
}

function bottomBarrel_helper(root, current_level, current_value) {
    if (!root) {
        return [current_level, current_value];
    }
    let leftItem = bottomBarrel_helper(root.left, current_level+1, root.value);
    let rightItem = bottomBarrel_helper(root.right, current_level+1, root.value);
    if (leftItem[0] >= rightItem[0]) {
        return [leftItem[0], leftItem[1]];
    } else {
        return [rightItem[0], rightItem[1]];
    }
}
// time complexity: O(n)
// space complexity: O(n)
check_expect = (i, j) => console.log(`Expected ${i}, got ${j}! ${i == j ? 'PASSED' : 'FAILED'}`)
example1 = new Node(1, new Node(2, new Node(4)), new Node(3));
example2 = new Node(8, new Node(1), new Node(4, new Node(2)));
example3 = new Node(8, new Node(1), new Node(4, new Node(2), new Node(5, new Node(6, new Node(7)), new Node(3))));

check_expect(4, bottomBarrel(example1))
check_expect(2, bottomBarrel(example2))
check_expect(7, bottomBarrel(example3))

function bottomLeft(root) {
    let queue = [root];
    let newQueue = [];
    while(queue.length !== 0) {
      for (let index in queue) {
        let currentNode = queue[index];
        if (currentNode.left) {
          newQueue.push(currentNode.left);
        }
        if (currentNode.right) {
          newQueue.push(currentNode.right);
        }
      }
      if (newQueue.length === 0) {
        return queue[0].value;
      } else {
        while (queue.length !== 0) {
          queue.pop();
        }
        while (newQueue.length !== 0) {
          queue.push(newQueue.pop(0));
        }
      }
    }
  }
// time complexity: O(n)
// space complexity: O(n)
class Node {
    constructor(name, arr) {
        this.children = arr !== undefined ? arr : [];
        this.name = name;
    }
}

s1 = new Node(1, [new Node(3), new Node(8)])
t1 = new Node(1, [null, new Node(8)])

s2 = new Node(7, [new Node(8), new Node(3)])
t2 = new Node(7, [new Node(8), new Node(3)]) 

s3 = new Node(7, [new Node(8), new Node(3)])
t3 = new Node(7, [new Node(8), new Node(3, [new Node(1)])])

s4 = new Node(1, [null, new Node(8)])
t4 = new Node(1, [null, new Node(7)])

s5 = new Node(1, [null, new Node(8)])
t5 = new Node(1, [new Node(7), new Node(8)])

s6 = new Node(1, [null, new Node(8)])
t6 = new Node(8)

const Ts1 = new Node(1, [new Node(3), new Node(8)]);
const Tt1 = new Node(1, [new Node(8)]);

const Ts2 = new Node(7, [new Node(8), new Node(3)]);
const Tt2 = new Node(7, [new Node(8), new Node(3)]);

const Ts3 = new Node(7, [new Node(8), new Node(3, [new Node(1)])]);
const Tt3 = new Node(7, [new Node(8), new Node(3)]);

const Ts4 = new Node(1, [
  new Node(2, [new Node(2), new Node(2), new Node(4)]),
  new Node(3),
]);
const Tt4 = new Node(2, [new Node(2), new Node(2), new Node(4)]);

const Ts5 = new Node(1, [
  new Node(2, [new Node(2), new Node(2), new Node(4)]),
  new Node(3),
]);
const Tt5 = new Node(2, [new Node(2), new Node(4)]);

const Ts6 = new Node(1, [
  new Node(2, [new Node(3), new Node(4), new Node(5)]),
  new Node(6),
]);
const Tt6 = new Node(2, [new Node(3), new Node(4), new Node(5)]);

const Ts7 = new Node(2, [new Node(2), new Node(4), new Node(4)]);
const Tt7 = new Node(2, [new Node(2), new Node(4)]);


function treeWithinTree(s, t) {
    return treeWithinTree_helper(s, t, false);
}

function treeWithinTree_helper(s, t, looksLikeSubset) {
    if (t === null && s === null) {
        // initial input t always exists
        return looksLikeSubset;
    }
    if (t === null || s === null) {
        return false;
    }
    looksLikeSubset = s.name === t.name;
    if (s.children.length === 0) {
        return looksLikeSubset && t.children.length === 0;
    }
    for (const node_idx in s.children) {
        const s_node = s.children[node_idx];
        let t_node = t.children[node_idx] || null;
        looksLikeSubset = looksLikeSubset && treeWithinTree_helper(s_node,
                                                                   t_node,
                                                                   looksLikeSubset);
    }
    return looksLikeSubset || s.children.some((child) => treeWithinTree_helper(child, t, looksLikeSubset));
}

console.log(treeWithinTree(s1, t1))
console.log(treeWithinTree(s2, t2))
console.log(treeWithinTree(s3, t3))
console.log(treeWithinTree(s4, t4))
console.log(treeWithinTree(s5, t5))
console.log(treeWithinTree(s6, t6))

console.log("LILLY'S TESTS")

console.log(treeWithinTree(Ts1, Tt1))
console.log(treeWithinTree(Ts2, Tt2))
console.log(treeWithinTree(Ts3, Tt3))
console.log(treeWithinTree(Ts4, Tt4))
console.log(treeWithinTree(Ts5, Tt5))
console.log(treeWithinTree(Ts6, Tt6))
console.log(treeWithinTree(Ts7, Tt7))
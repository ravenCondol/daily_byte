#include <iostream>

using namespace std;

class Node {
    public:
        int data;
    Node * next;
    
    Node (int data, Node* next) {
        this->data = data;
        this->next = next;
    }
    ~Node() {
        delete this->next;
    }
};

ostream& operator<<(ostream &strm, const Node *node) {
    if (node == nullptr) {
        return strm << "NULL";
    }
    return strm << node->data << "->" << node->next;
}

// time complexity:  O(max(a, b))
// space complexity: O(max(a, b))
Node * elementwiseSum(Node * a, Node * b) {
    Node * current = nullptr;
    Node * result = nullptr;
    while (a || b) {
        if (!current) {
            current = new Node(0, nullptr);
        } else {
            current->next = new Node(0, nullptr);
            current = current->next;
        }
        if (!result) {
            result = current;
        } else {
            result->next = current;
        }
        if (a && b) {
            current->data = a->data + b->data;
            a = a->next;
            b = b->next;
            continue;
        } else if (a) {
            a = a->next;
        } else if (b) {
            b = b->next;
        }
        current->data = 0;
    }
    return result;
}
int main()
{
    Node* a = new Node(1, new Node(2, nullptr));
    Node* b = new Node(1, new Node(3, nullptr));
    cout << a << endl;
    cout << b << endl;
    Node * example1 = elementwiseSum(a, b);
    cout << "Example 1: " << example1 << endl;

    a = new Node(1, new Node(9, nullptr));
    b = new Node(1, nullptr);
    Node * example2 = elementwiseSum(a, b);
    cout << "Example 2: " << example2 << endl;
    return 0;
}
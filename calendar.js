class TreeNode {
    constructor(key, event) {
        this.key = key;    // Typically a date or timestamp for event sorting
        this.event = event;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key, event) {
        if (this.root === null) {
            this.root = new TreeNode(key, event);
        } else {
            this._insert(this.root, key, event);
        }
    }

    _insert(node, key, event) {
        if (key < node.key) {
            if (node.left === null) {
                node.left = new TreeNode(key, event);
            } else {
                this._insert(node.left, key, event);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(key, event);
            } else {
                this._insert(node.right, key, event);
            }
        }
    }

    search(key) {
        return this._search(this.root, key);
    }

    _search(node, key) {
        if (node === null || node.key === key) {
            return node ? node.event : null;
        }

        if (key < node.key) {
            return this._search(node.left, key);
        } else {
            return this._search(node.right, key);
        }
    }

    // Additional methods like delete, in-order traversal, etc., can be added here
}

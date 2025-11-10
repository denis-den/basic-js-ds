const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeBase = null;
  }

  root() {
    return this.treeBase;
  }

  add(data) {
    this.treeBase = addTreeNode(this.treeBase, data);

    function addTreeNode(item, data) {
      if (!item) { 
        return new Node(data); 
      }
      if (item.data === data) { 
        return item; 
      }
      if (data < item.data) { 
        item.left = addTreeNode(item.left, data); 
      } else { 
        item.right = addTreeNode(item.right, data); 
      }
      return item;
    }
  }

  find(data) {
    return findItem(this.treeBase, data);
    
    function findItem(item, data) {
      if (!item) { 
        return null; 
      }
      if (item.data === data) { 
        return item; 
      }
      return (data < item.data) 
      ? findItem(item.left, data) 
      : findItem(item.right, data);
    }
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    this.treeBase = removeItem(this.treeBase, data);

    function removeItem(item, data) {
      if (!item) {
        return null;
      }

      if (data < item.data) {
        item.left = removeItem(item.left, data);
        return item;
      } else if (data > item.data) {
        item.right = removeItem(item.right, data);
        return item;
      } else {
        if (!item.left && !item.right) {
          return null;
        }

        if (!item.left) {
          item = item.right;
          return item;
        }

        if (!item.right) {
          item = item.left;
          return item;
        }

        let minItemFromRight = item.right;
        while (minItemFromRight.left) {
          minItemFromRight = minItemFromRight.left;
        }
        item.data = minItemFromRight.data;
        item.right = removeItem(item.right, minItemFromRight.data);

        return item;
      }
    }
  }

  min() {
    if (!this.treeBase) {
      return null;
    }

    let item = this.treeBase;
    while (item.left) {
      item = item.left;
    }

    return item.data;
  }

  max() {
    if (!this.treeBase) {
      return null;
    }

    let item = this.treeBase;
    while (item.right) {
      item = item.right;
    }

    return item.data;
  }
}

module.exports = {
  BinarySearchTree
};
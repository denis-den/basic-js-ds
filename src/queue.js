const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.frstItem = null;
    this.lastItem = null;
  }

  getUnderlyingList() { return this.frstItem; }

  enqueue(value) {
    const newItem = new ListNode(value);
    if (!this.frstItem) {
      this.frstItem = newItem;
      this.lastItem = this.frstItem;
    } else {
      this.lastItem.next = newItem;
      this.lastItem = this.lastItem.next;
    }
  }
  
  dequeue() {
    const delItem = this.frstItem.value;
    this.frstItem = this.frstItem.next;
    return delItem;
  }
}

module.exports = {
  Queue
};

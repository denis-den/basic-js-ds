const { NotImplementedError } = require('../lib/errors');
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
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    let item = this.first;
    if (!item) return null;

    const createResult = function(itm) {
      if (!itm) return null;
      return {
        value: itm.value,
        next: createResult(itm.next)
      };
    }
    
    return createResult(item);
  }

  enqueue(value) {
    const newItem = new ListNode(value);

    if (!this.first) {
      this.first = newItem;
      this.last = this.first;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
  }

  dequeue() {
    if (!this.first) return undefined;
    const delItem = this.first.value;
    this.first = this.first.next;

    return delItem;
  }
}

module.exports = {
  Queue
};

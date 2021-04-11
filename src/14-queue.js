const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.size = 0;
    this.head = new ListNode();
    this.tail = this.head;
  }

  get size() {
    return this.size;
  }

  enqueue(element) {
    // if (this.head === null) {
    //   this.head = new ListNode();
    //   this.head.value = element;
    //   this.tail = this.head;

    //   this.size++;
    // } else {
    //   this.tail.next = new ListNode();
    //   this.tail.value = element;
    //   this.tail = this.tail.next;

    //   this.size++;
    // }

    // this.tail.next = new ListNode(element);
    // this.tail = this.tail.next;

    // this.size++;
  }

  dequeue() {
    const { value } = this.head;

    this.head = this.head.next;

    this.size--;

    return value;
  }
}

module.exports = Queue;

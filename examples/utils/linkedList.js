/**
 * 单向链表实现队列
 */
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
class LinkedList {
  constructor(head, size) {
    this.head = null;
    this.size = 0;
  }
  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("cross the border");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  add(index, element) {
    if (arguments.length === 1) {
      element = index;
      index = this.size;
    }
    if (index < 0 || index > this.size) {
      throw new Error("cross the border");
    }

    if (index === 0) {
      const head = this.head;
      this.head = new Node(element, head);
    } else {
      const preNode = this._getNode(index - 1);
      preNode.next = new Node(element, preNode.next);
    }
    this.size++;
  }
  remove(index) {
    let rmNode = null;
    if (index === 0) {
      rmNode = this.head;
      if (!rmNode) {
        return;
      }
      this.head = rmNode.next;
    } else {
      const prevNode = this._getNode(index - 1);
      rmNode = prevNode.next;
      prevNode.next = rmNode.next;
    }
    this.size--;
    return rmNode;
  }
  set(index, element) {
    const node = this._getNode(index);
    node.element = element;
  }
  get(index) {
    return this._getNode(index);
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }
  enQueue(data) {
    this.linkedList.add(data);
  }
  deQueue() {
    return this.linkedList.remove(0);
  }
}

module.exports = Queue;

class Node {
  constructor(next, value) {
    this.next = next
    this.value = value
  }
}

class Queue {
  constructor() {
    this.queue = null
  }
  
  /*enqueue(element) {
    let head = this.queue
    let newNode = new Node(null, element)
    
    if (!head) {
      this.queue = newNode
    } else {
      while (head.next) {
        head = head.next
      }
      head.next = newNode
    }
  }*/
  
    enqueue(element) {
    let head = this.queue
    let newNode = new Node(null, element)
    console.log(element);
    console.log(Object.assign({}, head), 'head');
    if (!head) {
      this.queue = newNode
    } else {
      while (head.next) {
        console.log(Object.assign({}, head.next), 'head next');
        head = head.next
      }
      console.log('run')
      head.next = newNode
    }
  }
  
  dequeue() {
    let head = this.queue
    
    if (!head) return 'Queue is empty!'
    
    this.queue = head.next
    return head.value
  }
  
  peek() {
    if(!this.queue) return 'Queue is empty!'
    return this.queue.value
  }
}

const queue = new Queue();
queue.enqueue(document.createElement('div'));
queue.enqueue(document.createElement('article'));
queue.enqueue(document.createElement('p'));
queue.enqueue(document.createElement('section'));
console.log(queue, 'test');

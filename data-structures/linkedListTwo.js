var oldHead;
function Node (val) {
    this.value = val;
    this.next = null;
  }

  function LinkedList (val = 42) {
    var node = new Node(val);
    this.head = node;
    this.tail = node;
    this.length = 1;
    //oldHead = node;
  }
  

  LinkedList.prototype.push = function (val) {
    var newTail = new Node(val);
    if (this.length === 1) {
      this.head.next = newTail;
      oldHead = this.head.next;
    } else {
      oldHead.next = newTail;
      oldHead = newTail;
    }
    //this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return newTail;
    
  }
  
  LinkedList.prototype.pop = function (node) {
    if (!this.length) return null;
    var nodeToRemove = this.tail
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove
    }
    var currentNode = this.head;
    var secondToLast;
    
    while(currentNode) {
      if (currentNode.next === this.tail) {
        secondToLast = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    
    secondToLast.next = null;
    // Move the tail to the second to last node
    this.tail = secondToLast;
    this.length--;
  
    // Initialized to this.tail
    return nodeToRemove;
    
  }
  
  LinkedList.prototype.unshift = function (val) {
      var newHead = new Node(val);
      if (this.head === this.tail) {
        console.log('true')
        this.head = newHead;
        this.tail = newHead;
        this.length = 1;
        return this.head;
      }
  
      var oldHead = this.head;
      this.head = newHead;
      console.log(oldHead);
      //newHead.next = oldHead;
      this.head.next = oldHead;
      this.length++;
      return this.head;
  }
  
  LinkedList.prototype.shift = function () {
    var oldHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    oldHead.next = null;
  }
  
  
  
  var myFirstList = new LinkedList('fudge');
  myFirstList.push('lollipop');
  myFirstList.push('cotton candy');
  myFirstList.push('fish')
  myFirstList.pop();
  myFirstList.unshift('pop tarts');
  console.log(myFirstList);

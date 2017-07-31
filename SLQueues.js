Queues

Enqueue

Function SLNode ( values){
  this.val = value;
  this.next = null;
}
funciton SLQueue () {
  var head = null;
  var tail = null;
  this.enqueue = function(val){
    var node = new SLNode;
    if(!this.head){
      this.head = node;
      this.tail = node
    }
    this.tail.next = node;
    this.tail = node;
  }
  return this

  this.dequeue = function(){
    if(! this.head){
      return False;
    }
    if (this.head == this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next;
    }
  }
  return this
}

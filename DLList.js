function DLNode(value){
  this.val = value;
  this.prev = null;
  this.next = null;
}
function DLList(){
  this.head = null;
  this.tail = null;
  this.dlPush = function (){
    var node = new DLNode;
    if (!this.head){
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next=node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  this.dlPop = function(){
    if(!this.tail){
      return false;
    }
    this.tail.prev = null;
  }
  this.dlFront = function(){
    if(!this.head){
      return false;
    }
    return this.head;
  }
  this.dlBack = function(){
    if(!this.head){
      return false;
    }
    return this.tail;
  }
  this.dlContains = function(val){
    if(!this.head){
      return false;
    }
    var current = this.head;
    while(current){
      current = current.next;
      if (current.val == val){
        return current;
      }
    }
  }
  this.dlSize = function(){
    if(!this.head){
      return 0;
    }
    var current = 0;
    while (current.next){
      current = current.next;
      count ++
      if(current.next == this.tail){
        return count;
      }
    }
  }
  this.dlKlast = function(k){
    if(!this.head){
      return false;
    }
    var current = this.tail;
    for(var i=1, i<k,i++){
      current = current.prev;
    }
    return current.val;
  }
  this.dlPalindrome = function(){
    if(!this.head){
      return false;
    }
    if (this.head.val != this.tail.val){
      return false;
    }
    var hc = this.head;
    var tc = this.tail;
    while (hc != tc){
      hc = hc.next;
      tc = tc.prev;
      if (hac.val != tc.val){
        return false;
      }
      if (hc.prev = tc){
        break;
      }
    }
    return true;
  }
}

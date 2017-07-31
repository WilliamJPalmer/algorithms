function Node (value){
  this.val = value;
  this.next=null;
}
function SLL(){
  this.head = null;
  this.addFront = new Node(val)
    var node = new Node(val);
    if (!this.head){
      this.head=node;
      return this; //the return allows you to chain methods together.
    }
    else {
      node.next = this.head;
      this.head = node;
      return this;
    }
  }
  this.addBack = function(val){
    var lastNode = new Node(val);
    var current = this.head;
    if (! current){
      this.head = lastNode;
      return this;
    }
    while(current.next){
      current = current.next;
    }
  }


  this.append = function (val,after){
    var node = new Node(val);
    var current = this.head;
    if (!this.head){
      this.head = node;
    }
    while ( current.next.val != after){
      current = current.next;
      if ( current.next == nul){
        current.next = node
      }
      return this
    }
  }
  this.swapPairs = function(){

    if (!list.head){
      return false
    }
    if (!list.head.next){
      return list;
    }
    var R = this.head;
    var W = this.head;
    var count = 0;
    list.head = R.next;
    R = R.next
    R.next = W;
    while(R.next){
      count ++;
      R = R.next;
      if(count % 2 == 0){
        W.next = R;
        W = R;
        if(current % 2 != 0){
          var temp = W.next
        }
        R.next = temp;
      }
      if (R.next == null){
        return list;
      }
    }
  }
}

var list = new SLL();
list.addBack(1).addBack(2).addBack(3).addBack(4).addBack(5).addBack(6).addBack(7).addBack(8).swapPairs()
console.log()

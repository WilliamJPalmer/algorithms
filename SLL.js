// Singly Linked Lists
// for every new algorithm, you will need to create a new node and SLL
// for the new node
//
// function  Node(val){
//   this.val = value;
//   this.next = null;
// }
//
// for the new SLL
//
// function SLL(){
//   this.head = null;
// }
//
// new functions, addToFront, addToBack, search, insert, etc, live inside the function SLL(){}

function Node (val){
  this.val = value;
  this.next=null;
}
function SLL(){
  this.head = null;
  this.addFront = new Node(val){
    //create a new node
    var node = new Node(val);
    //check whether my list is empty, i.e this.head == null
    if (!this.head){
      this.head=node:
      return this; //the return allows you to chain methods together.
    }
    //if there are already nodes in the list, do soemthing else
    else {
      node.next = this.head;
      this.head = node;
      return this;
    }
  }
  // this.contains = function(){
  //   if (! this.head){ //this if statement can be removed because current is set to
  //     return False;  // this.head in the var and if var current is null, the while
  //   }               // statement will not run becasue this.head is null becasue there is no list.
  //   var current = this.head;
  //   while (current){
  //     if(current.val === val){
  //       return True
  //     }
  //     else{
  //       current=current.next;
  //     }
  //   }
  //   return False
  // }
  // this.removeFront = function(){
  //   if (! this.head){
  //     return False;
  //   }
  //   current = this.head;
  //   current = current.next;
  //   this.head = current;
  //
  //   return this.head
  // }
  // this.length = function(){
  //   if (! this.head){
  //     return False;
  //   }
  //   var count =0;
  //   var current = this.head
  //   while(current){
  //     count++
  //     current=current.next
  //   }
  //   return count;
  // }
  // this.max = function(){
  //   if (! this.head){
  //     return False;
  //   }
  //   var max= this.head.val;
  //   var currnet = this.head;
  //   while(current){
  //     if(current.val > max){
  //       max = current.val;
  //     }
  //     current = current.next;
  //   }
  //   return max;
  // }
  // this.avg = function(){
  //   if (! this.head){
  //     return False;
  //   }
  //   var sum = 0;
  //   var current = this.head;
  //   while (current.next != null){
  //     sum += current.val;
  //     current = current.next;
  //   }
  //   var avg = sum/this.length();
  // }
  // return avg
  //
  // this.back = function(){
  //   if(! this.head){
  //     return False
  //   }
  //   var current = this.head;
  //   while(current.next){
  //     current = current.next
  //   }
  //   return current.val;
  // }
  //
  // this.removeBack = function(){
  //   if (! this.head){
  //     return False;
  //   }
  //   var current = this.head
  //   while (current){
  //     if (current.next.next == null){
  //       current.next=null;
  //       return this;
  //     }
  //     else{
  //       current = current.next
  //     }
  //   }
  // }
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
    current.next = nextNode;
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


  // this.removeVal = function(val){
  //   if (! this.head){
  //     return False;
  //   }
  //   if (!this.head.next){
  //     if(this.head.val == val){
  //       this.head =null;
  //     }
  //   }
  //   if (this.head.next){
  //     if (this.head == val){
  //       this.head=this.head.next;
  //     }
  //   }
  //   var current = this.head;
  //   while (current.next){
  //     if (current.next.val==val){
  //       current.next= current.next.next;
  //     }
  //     current=current.next
  //   }
  //   return this
  // }
  // this.removeNegative = function(){
  //   var current = this.head;
  //   if (!this.head){
  //     return False
  //   }
  //   if(this.head.val < 0 && current.next == null){
  //     this.head = null;
  //     return this;
  //   }
  //   if(this.head.val < 0 && this.head.next){
  //     this.head = current.next;
  //   }
  //   while(current.next){
  //     if(current.next < 0){
  //       current.next = current.next.next;
  //     }
  //     current = current.next
  //
  //   }
  //   return this;
  // }
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

var list = new SLL();
list.addBack(1).addBack(2).addBack(3).addBack(4).addBack(5).addBack(6).addBack(7).addBack(8)addFront(6).swapPairs()
console.log();


//
// // --------------------------
// function Node (val){
//   this.val = value;
//   this.next=null;
// }
// function SLL(){
//   this.head = null;
//   this.addFront = new Node(val){
//     //create a new node
//     var node = new Node(val);
//     //check whether my list is empty, i.e this.head == null
//     if (!this.head){
//       this.head=node:
//       return this; //the return allows you to chain methods together.
//     }
//     //if there are already nodes in the list, do soemthing else
//     else {
//       node.next = this.head;
//       this.head = node;
//       return this;
//     }
//   }
//
//
// function swapPairs(list){
  // this.swapPairs = function(list){
  function swapPairs(list){}
  if (!list.head){
    return false;
  }
  if (!list.head.next){
    return list;
  }
  var R = list.head;
  var W = list.head;
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

swapPairs(1,2,3,4,5,6,7,8)

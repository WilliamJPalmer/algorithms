function Node(value) {
    this.val = value;
    this.next = null;
}

function SLL() {
    this.head = null;
}

var node1 = new Node(13);
var node2 = new Node(25);
var node3 = new Node(34);
var node4 = new Node(67);
var node5 = new Node(15);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


var newList = new SLL();
newList.head = node1;

function partition(list, val){
  if(!list || !list.head){
    return false;
  }
  var current = list.head;
  var tempList;
  while(current){
    if(current.val <= val){
      tempList = current;
    }
  }
};

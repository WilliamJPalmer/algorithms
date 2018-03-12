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

function addNode(val){
  var node = {
    val: val,
    next: null
  };
  if(!this.head){
    this.head = node;
  } else {
    var added = this.head;
    while(added.next){
      added = added.next;
    };
    added.next = node;
  };
};

function partition(list, val){
	if(!list || !list.head){
		return false;
	}
	var current = list.head;
  var lessThanList = new SLL();
  var greaterThanList = new SLL();

	while(current){
		if (current.val <= val){
      lessThanList = addNode(current);
    } else if (current.val > val){
      greaterThanList = addNode(current);
    }
    current = current.next;
  };
  var LTL = lessThanList.head;
  while(LTL.next){
    LTL = LTL.next;
  };
  LTL.next = greaterThanList.head;
  return lessThanList;
};
// console.log(LTL.next);
// console.log(lessThanList);
console.log(partition(newList, 28));

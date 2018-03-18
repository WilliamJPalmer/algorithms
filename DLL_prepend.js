function dlNode (value){
  if(!(this instanceof dlNode)){
    return new dlNode(value);
  }
  this.val = value;
  this.next = null;
  this.prev = null;
}

function dList(){
  if(!(this instanceof dList)){
    return new dList();
  }
  this.head = null;
  this.tail = null;
}
var node1 = new dlNode(13);
var node2 = new dlNode(25);
var node3 = new dlNode(34);
var node4 = new dlNode(67);
var node5 = new dlNode(15);

node1.next = node2;
node1.prev = null;
node2.next = node3;
node2.prev = node1;
node3.next = node4;
node3.prev = node2;
node4.next = node5;
node4.prev = node3;
node5.next = null;
node5.prev = node4;


var newList = new dList();
newList.head = node1;
newList.tail = node5;

function prepend(list, addVal, findVal){
  if(list){
    var current = list.head;
    while(current){
      if (current.val === findVal){
        if(current === list.head){
          var after = current;
          var insertNode = new dlNode(addVal);
          after.prev = insertNode;
          insertNode.next= after;
          list.head = insertNode;
        } else {
          var before = current.prev;
          var after = current;
          var insertNode = new dlNode(addVal);
          before.next = insertNode;
          after.prev = insertNode;
          insertNode.next = after;
          insertNode.prev = before;
          return newList;
        }
      }
      current = current.next;
    };
  };
  return false;
};

prepend(newList, 9, 67);
prepend(newList, 200, 13);

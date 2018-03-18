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
node2.next = null;
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

function isValid(list) {
  debugger;
    var valid = false;
    var current = list.head;
    // console.log(current);
    if((list.head && list.tail) || (!list.head && !list.tail)) {
      valid = true;
      console.log(valid);
    }

    if(list.head && list.tail) {
        if(list.head.prev !== null && list.tail.next !== null) {
          valid = false;
          console.log(valid);
        }
    }

    while(current && current.next) {
      console.log(current.val + "---" + current.next.val);
        if(current.next.prev !== current) {
          valid = false;
          console.log(valid);
          console.log(current.next.val + " has no .prev");
        }
        if(current.next === null && current != list.tail){
          valid = false;
          console.log(valid);
          console.log(current.val + "has no .next and it is not this.tail");
        }
        current = current.next;
        console.log(current.val + "---" + current.next.val);
    }
    return valid ? "this is a valid list" : "this is NOT a valid list";
}

console.log(newList);
console.log(isValid(newList)); //true
// console.log(isValid(emptyList)); //true
// console.log(isValid(anotherSimpleList)); //false

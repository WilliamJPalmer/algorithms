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

function repair(list){
  if(list){
    debugger;
    if(list.tail.next !== null){
      list.tail.next = null;
    } else if (list.head.prev !== null) {
      list.head.prev = null;
    }
    else {
      var walker = list.head;
      var runner = list.head;
      while (runner.next){
        walker = walker.next;
        runner = runner.next.next;
        if(walker === runner){
          var fromEnd = list.tail;
          while(fromeEnd.prev){
            if(fromEnd.prev !== walker){
              fromEnd = fromEnd.prev;
            } else {
              walker.next = fromEnd;
              return list;
            }
          }
        }
      }
    }
  }
  return newList;
}
repair(newList);

// function repair(list) {
//   if(list) {
//     debugger;
//     if (list.tail.next !== null) {
//       list.tail.next = null;
//     }
//     else if (list.head.prev !== null) {
//       list.head.prev = null;
//     }
//     else  {
//         var walker = list.head;
//         var runner = list.head;
//         while(runner.next) {
//
//             walker = walker.next;
//             runner = runner.next.next;
//             if (walker === runner) {
//               var fromEnd = list.tail;
//               while(fromEnd.prev) {
//                 if (fromEnd.prev !== walker) {
//                   fromEnd = fromEnd.prev;
//                 } else {
//                   walker.next = fromEnd;
//                   return list;
//                 }
//               }
//              }
//           }
//      }
//   }
//   return false;
// }
// repair(mylist);

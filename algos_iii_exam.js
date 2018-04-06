// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================

let user = {
    first_name: "William",
    last_name: "Palmer",
    email: "william.palmer@me.com"
}
console.log(user.first_name + " " + user.last_name);
console.log(user.email);


// ========================================================================================================================
// ========================================================================================================================
// PART 1 -- SINGLY LINKED LIST ALGORITHMS
// ========================================================================================================================
// ========================================================================================================================

function slNode(value) {
    this.val = value;
    this.next = null;
}

function sList() {
    this.head = null;
    // ========================================================================================================================
    this.initializeLength = function(list) {
        // Add a length property on the sList with the value of the length of nodes.
        // With an sList object of { head: (1)->(2)-x }
        // Add a length property to the object with the right count { head: (1)->(2)-x, counter: 2 }
        try {
          if(!list.head){
            return false;
          }
          var count = 0;
          var current = list.head;
          while(current){
            count++;
            current = current.next;
          }
          list.length = count;
          return list.length;
        } catch (err) { console.log("Invalid Code", err); }
    }
    // ========================================================================================================================
    this.updateLength = function (list) {
        // Update the length property of the sList based on the number of nodes in the sList.
        // With an sList object of { head: (1)->(2)->(3)-x , counter: 0 }
        // Update the counter property: { head: (1)->(2)->(3)-x , counter: 3 }
        try {
          var node6 = new slNode(value);
          node5.next = node6;
          list.length ++;
          return list.length;
        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
    this.pushNode = function (val) {
        // Add a new node with a value of (val) to the back of the sList.
        // With an sList of (1)->(2)->(3)-x and given val: 4
        // Alter the sList to be (1)->(2)->(3)->(4)-x
        try {
          var node = new slNode(val);
          var current = this.head;
          console.log(current + "current here");
          while(current){
            current = current.next;
            if(current.next === null){
              current.next = node;
            }
          };

        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
    this.popNode = function (list) {
        // Remove the last node in the sList.
        // With a sList of (1)->(2)->(3)-x
        // Alter the sList to be (1)->(2)-x
        try {
          var current = list.head;
          while(current.next){
            if (current.next.next === null){
              current.next = null;
            };
            return list;
          }
        } catch (err) { console.log("Invalid Code", err); }
    }
    // ========================================================================================================================
    this.multiRemoveBack = function (num) {
        // Remove a (num) amount of nodes from the back of the sList.
        // With a sList of (1)->(2)->(3)->(4)->(5)-x and given num: 3
        // Alter the sList to be (1)->(2)-x
        try {







        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
}

var node1 = new slNode(1);
var node2 = new slNode(2);
var node3 = new slNode(3);
var node4 = new slNode(4);
var node5 = new slNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

var newSLList = new sList();
newSLList.head = node1;

// newSLList.initializeLength(newSLList);
// // newSLList.updateLength(newSLList);
// newSLList.pushNode(24);
// console.log(newSLList);
// newSLList.popNode();





























// ========================================================================================================================
// ========================================================================================================================
// PART 2 -- DOUBLY LINKED LIST ALGORITHMS
// ========================================================================================================================
// ========================================================================================================================

function dlNode(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
}

function dList() {
    this.head = null;
    this.tail = null;
    // ========================================================================================================================
    this.pushNode = function (val) {
        // Add a node at the end of the dList with a value of (val)
        try {
          var node = new dlNode(val);
          if(!this.head){
            this.head = node;
            this.tail = node;
          }
          else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
          }
        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
    this.popNode = function () {
        // Remove the last node from the dList.
        try {
          if(!this.tail){
            return false;
          }
          var before = this.tail.prev;
          before.next = null;
        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
    this.prependValue = function(list, val, mark){
        // Add a dlNode with the value of (val), before the first Node in the list with the value of (mark)
        // With a dList of (1)<=>(2)<=>(3)<=>(4), val of 9 and mark of 3
        // Alter the dList to (1)<=>(2)<=>(9)<=>(3)<=>(4)
        try {
          if(list){
            var current = list.head;
            while (current){
              if (current.val === mark){
                if(current === list.head){
                  var after = current;
                  var prependNode = new dlNode(val);
                  prependNode.next = after;
                  after.prev = prependNode;
                  list.head = prependNode;
                }
                var before = current.prev;
                var after = current.next;
                before.next = prependNode;
                after.prev = prependNode;
                prependNode.next = after;
                prependNode.prev = before;
              }
              current = current.next;
            };
          };
          return "Mark not found";
        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
    this.isPalindrome = function () {
        // Identify if the list is a palindrome.
        // With a dList of (1)<=>(2)<=>(2)<=>(1) return true
        // With a dList of (1)<=>(2)<=>(3)<=>(4)<=>(1) return false
        try {
          if(!list){
            return false;
          }
          if(list.head.val != list.tail.val){
            return false;
          }
          var headStart = this.head;
          var tailStart = this.tail;
          while (headStart !== tailStart){
            headStart = headStart.next;
            tailStart = tailStart.prev;
            if(headStart.val != tailStart.val){
              return false;
            }
            if(headStart.prev === tailStart){
              break;
            }
          }
          return true;






        } catch (err) { console.log("Invalid Code", err); }

    }
    // ========================================================================================================================
}



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

newList.pushNode(44);
newlist.popNode();
newList.prependValue(this, 99, 34);


// ========================================================================================================================
// ========================================================================================================================
// TEST CASES -- TEST CASES -- TEST CASES -- TEST CASES -- TEST CASES -- TEST CASES -- TEST CASES -- TEST CASES -- TEST CASES
// ========================================================================================================================
// ========================================================================================================================
score = +String.fromCharCode(48);

// ========================================================================================================================
// SINGLY LINKED LIST - TEST CASES
// ========================================================================================================================

(function sListTests() {
    // slNodes
    var node1;
    var node2;
    var node3;
    var node4;
    // sList
    var slist;

    function resetsList() {
        node1 = new slNode(1);
        node2 = new slNode(2);
        node3 = new slNode(3);
        node4 = new slNode(4);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = null;
        slist = new sList();
        slist.head = node1;
    }

    // Tests

    // initializeLength  =================================================================
    try {

        resetsList();
        slist.initializeLength();
        if (slist.length === 4) {
            console.log("sList - initializeLength - PASS ");
            score = score + +String.fromCharCode(49);
        } else { console.log("sList - initializeLength - FAIL"); }

    } catch (err) { console.log("Invalid Test, initializeLength, err", err) }
    // updateLength  =================================================================
    try {

        resetsList();
        let node5 = new slNode(5);
        node4.next = node5;
        slist.updateLength();
        if (slist.length === 5) {
            console.log("sList - updateLength - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("sList - updateLength - FAIL"); }

    } catch (err) { console.log("Invalid Test, updateLength, err", err) }
    // pushNode  =================================================================
    try {

        resetsList();
        slist.pushNode(5);
        if (slist.head && slist.head.next && slist.head.next && slist.head.next.next
            && slist.head.next.next.next && slist.head.next.next.next.val === 5) {
            console.log("sList - pushNode - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("sList - pushNode - FAIL"); }

    } catch (err) { console.log("Invalid Test, pushNode, err", err) }
    // popNode  =================================================================
    try {

        resetsList();
        slist.popNode();
        if (slist.head && slist.head.next && slist.head.next.next
            && !slist.head.next.next.next) {
            console.log("sList - popNode - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("sList - popNode - FAIL"); }

    } catch (err) { console.log("Invalid Test, popNode, err", err); }
    // multiRemoveBack =================================================================
    try {

        resetsList();
        slist.multiRemoveBack(2);
        if (slist.head && slist.head.next
            && !slist.head.next.next ) {
            console.log("sList - multiRemoveBack - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("sList - multiRemoveBack - FAIL"); }

    } catch (err) { console.log("Invalid Test, multiRemoveBack, err", err); }
    // ==========================================================================

})();

// ========================================================================================================================
// DOUGHLY LINKED LIST - TEST CASES
// ========================================================================================================================

(function dListTests() {
    // dlNodes
    var node1;
    var node2;
    var node3;
    var node4;
    // dList
    var dlist;

    function resetdList() {
        node1 = new dlNode(1);
        node2 = new dlNode(2);
        node3 = new dlNode(3);
        node4 = new dlNode(4);
        node1.next = node2;
        node1.prev = null;
        node2.next = node3;
        node2.prev = node1;
        node3.next = node4;
        node3.prev = node2;
        node4.next = null;
        node4.prev = node3;
        dlist = new dList();
        dlist.head = node1;
        dlist.tail = node4;
    }

    // Tests

    // pushNode =================================================================
    try {

        resetdList();
        dlist.pushNode(5)
        if (dlist.head && dlist.head.next && dlist.head.next.next && dlist.head.next.next.next
            && dlist.head.next.next.next.next && dlist.head.next.next.next.next.val === 5) {
            console.log("dList - pushNode - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("dList - pushNode - FAIL"); }

    } catch (err) { console.log("Invalid Test, pushNode, err", err) }
    // popNode =================================================================
    try {

        resetdList();
        dlist.popNode();
        if (dlist.head && dlist.head.next && dlist.head.next.next
            && !dlist.head.next.next.next) {
            console.log("dList - popNode - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("dList - popNode - FAIL"); }

    } catch (err) { console.log("Invalid Test, popNode, err", err) }
    // prependValue =================================================================
    try {

        resetdList();
        dlist.prependValue(9, 2)
        if (dlist.head
            && dlist.head.next && dlist.head.next.val === 9) {
            console.log("dList - prependValue - PASS ")
            score = score + +String.fromCharCode(49);
        } else { console.log("dList - prependValue - FAIL"); }

    } catch (err) { console.log("Invalid Test, prependValue, err", err) }
    // isPalindrome =================================================================
    try {

        if (testPalindrome()) {
            console.log("dList - isPalindrome - PASS");
            score = score + +String.fromCharCode(49);
        }
        else { console.log("dList - isPalindrome - FAIL"); }
        function testPalindrome() {
            resetdList();
            node3.val = 2;
            node4.val = 1;
            if (!dlist.isPalindrome()) { return false; }
            resetdList();
            if (dlist.isPalindrome()) { return false; }
            return true;
        }

    } catch (err) { console.log("Invalid Test, isPalindrome, err", err); }
    // ==============================================================================

    // ==============================================================================
    // ==============================================================================
    console.log(score+" / 9 "+((score >= 6)?"PASS":"FAIL"));
    console.log("================================================")
})();
function Snode(val) {        //Node constructor
  this.val = val;
  this.next = null;
}
function Slist() {          // Singly linked list constructor
  this.head = null;

  this.addFront = function(node, val) {      //addFront method
    var newnode = new Snode(val);
    if(!this.head) {
      this.head = newnode;
      return this;
    }
    newnode.next = this.head;
    this.head = newnode;
    return this;
  };
this.removeSelf = function(node) {            //     remove node if only reference to node is given.
    node.val = node.next.val;
    node.next = node.next.next;
    this.length--;
    return this;
  };

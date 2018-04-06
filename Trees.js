//Trees wor in a similar way to SLL,
// Instead of this.head, trees have this.root.
//Still make use of Nodes.
// Uses this.right and this.left instead of this.next

//---------------Insert-----------------
function BSTNode(value){
  this.val = value;
  this.right = null;
  this.left = null;
}

function BST(){
  console.log("Starting here");
  this.root = null;
  console.log("Root should eb null");
  this.addNode = function(val){
    var newNode = new BSTNode(val);
    debugger;
    if(this.root){
      var current = this.root;
      console.log(current);
      while(current){
        if(newNode.val >= current.val){
          if(current.right){
            current = current.right;
          } else {
            current.right = newNode;
            return;
          }
        } else if (newNode.val < current.val){
          if(current.left){
            current = current.left;
          } else {
            current.left = newNode;
            return;
          }
        }
      }
    } else {
      this.root = newNode;
      console.log("this.root being set to newNode");
    }
  }
}
var newTree = new BST;
newTree.addNode(10);
newTree.addNode(20);
newTree.addNode(80);
newTree.addNode(7);
newTree.addNode(17);
newTree.addNode(14);
newTree.addNode(3);
console.log(newTree);
//     if (!this.root){
//       var newNode = new BSTNode();
//       this.root = newNode;
//       return this;
//     }
//     else{
//       var current = this.root;
//     }
//     while(current){
//       if(current.val > val){
//         if(current.left == null){
//           current.left = newNode;
//           return this;
//         }else{
//           current = current.left
//         }
//       }
//       else{
//         if(current.right == null){
//           current.right = newNode;
//           return this;
//         }else{
//           current = current.right;
//         }
//       }
//     }
//   }
// }
// var Tree1 = new BST
// console.log(Tree1.addNode(6));
// console.log(this.addNode);


//--------------BST CONTAINS--------------
function BSTNode(value){
  this.val = value;
  this.left = null;
  this.right = null;
}
function BST(){
  this.root = null;
  this.contains = function(val){
    if(!this.root){
      return false;
    }
    var current = this.root;
    while(current){
      if(val = current.val){
        return true;
      }
      else if (val > current.val){
        if(current.right = null){
          return false;
        }
        current = current.right;
      }
      else {
        if(current.left = null){
          return false;
        }
        current = current.left
      }
    }
  }
}

//--------------BST MIN--------------
function BSTNode(value){
  this.val = value;
  this.left = null;
  this.right = null;
}
function BST(){
  this.root = null;
  this.Min = function(){
    if(!this.root){
      return false;
    }
    var current = this.root;
    var Min = 0;
    while(current){
      if(current.left != null){
        current = current.left;
      }else{
        Min = current.val;
        return Min;
      }
    }
  }
}
//--------------BST MAX--------------
function BSTNode(value){
  this.val = value;
  this.left = null;
  this.right = null;
}
function Max(){
  this.root = null;
  this.Min = function(){
    if(!this.root){
      return false;
    }
    var current = this.root;
    var Min = 0;
    while(current){
      if(current.right != null){
        current = current.right;
      }else{
        Max = current.val;
        return Max;
      }
    }
  }
}

//--------------SIZE--------------
function BSTNode(value){
  this.val = value;
  tihs.right=null;
  this.left=null;
}
function BST(){
  this.root = null;
  this.size = function(){
    if(!this.root){
      return 0;
    }
    if (!this.root.right && !this.root.left){
      return 1;
    }
    var current = this.current;
    var count = 0;
    helpLeft = function(current,countL){
      var countL =0;
      if(current.left != null){
        countL++;
        current = current.left
      }
    };
    helpRight = function(current, countR){
      var countR = 0;
      if (current.right != null){
        countR ++;
        current = current.right
      }
    }
  }
}


//---------------Pre-ORDER------------
function BSTPreOrder(BST){
  if (!this.root.left && !this.root.right){
    return this.root.val;
  }
  helperRight = function(this.root){
    var currentR = this.root;
    if(currentR.right){
      console.log(currentR.val);
      currentR = currentR.right;
    }
    if (currentR.left){
      helperLeft(currentR.right);
    }
  }
  helperLeft = function(this.root){
    var currentL = this.root;
    if(currentL.right){
      console.log(currentL.val);
      currentR = currentL.right;
    }
    if (currentL.right){
      helperRight(currentL.left);
    }
  }
  if(this.root.left){
    helperLeft(this.root);
  }
  if(this.root.right){
    helperRight(this.root);
  }
}

//-----------BST ALTERNATE------------
class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insertNode(val){
    var node = {
      data: null,
      left: null,
      right: null
    };

    var currentNode;
    if (!this.root){
      this.root = node;
    } else {
      currentNode = this.root;
      while (currentNode){
        if (val < currentNode.data){
          if (!currentNode.left){
            currentNode.left = node;
            break
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.data){
          if (!currentNode.right){
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log('Ignore this value as BST should only have unique values');
          break;
        }
      }
    }
  }
}
var BST = new BinarySearchTree();
BST.insertNode(5);
BST.insertNode(8);
BST.insertNode(2);
BST.insertNode(13);
BST.insertNode(7);
BST.insertNode(3);
BST.insertNode(23);
BST.insertNode(15);
BST.insertNode(25);
BST.insertNode(9);
BST.insertNode(19);
console.log(BST);

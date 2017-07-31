//Trees wor in a similar way to SLL,
// Instead of this.head, trees have this.root.
//Still make use of Nodes.
// Uses this.right and this.left instead of this.next

//---------------Insert-----------------
function BSTNode(value){
  this.val = value;
  this.right = null;
  this.left = null;ø
}

function BST(){
  this.root = null;
  this.addNode = function(val){
    if (!this.root){
      var newNode = new BSTNode();
      this.root = newNode;
      return this;
    }
    else{
      var current = this.root;
    }
    while(current){
      if(current.val > val){
        if(current.left == null){
          current.left = new BDTNode();
          return this;
        }else{
          current = current.left
        }
      }
      else{
        if(current.right == null){
          current.right = new BSTNode();
          return this;
        }else{
          current = current.right;
        }
      }
    }
  }
}
var Tree1 = new BST
console.log(Tree1.addNode(6));
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

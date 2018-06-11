
//==========================================
//================= MONDAY =================
//==========================================
function bstNode(value){
  this.value = value;
  this.right = null;
  this.left = null;
}

function BST = (){
  this.root = null;
  this.add = function(value){
    var newNode = new bstNode(value);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while(current){
      if(current.val >= value){
        if(current.right){
          current = current.right;
        }
        else {
          current.right = newNode;
        }
      } else {
        if(current.left){
          current = current.left;
        } else {
          current.left = newNode;
        }
      }
    }
  }
}

<script>
// ================================================

function rSigma(num){
    // Given a number (num), return the Simga value of num (Sigma is the sum of all numbers from 0 to num).
    // Use recursion to solve this algorithm.
    if(num === 0 || num === 1){
      return num;
    } else if (num < 0){
      return 0;
    } else {
      return rSigma(num-1) + num;
    }

}
rSigma(5);

// ================================================

function rFibonacci(num){
    // Given num, return the Fibonacci value of num.
    // Use recursion to solve this algorithm.
    if(num == 0 || num == 1){
      return num;
    } else if (num < 0){
      return 0;
    } else {
      return rFibonacci(num - 1) + rFibonacci(num - 2);
    }
}
rFibonacci(4);
// ================================================

function rBinarySearch(arr, val, b=0, e=arr.length-1){
    // Given an array (arr) and a value (val), return true if val exists in the array, or false if it does not.
    // Use recursion to solve this algorithm.
  var m = Math.floor((b+e) / 2);
  if((b === e || b === e-1) && arr[m] !== val) {
	return false;
  }
  if(val < arr[b] || val > arr[e]){
    return false;
  }

  if(arr[m] === val){
    return true;
  } else if (arr[m] < val){
    return rBinarySearch(arr, val, m, e);
  } else if (arr[m] > val){
    return rBinarySearch(arr, val, b, m);
  } else {
    return false;
  }
}
rBinarySearch([1,2,3,4,5,6,7], 3);

// ================================================

function btNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

// ================================================

function bst() {
    this.root = null;
    // --------------------------------------------

    this.add = function(val) {
      //Given a value (val), add a new node with that val in the binary tree.
      var newNode = new btNode(val);
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

    // --------------------------------------------

    this.removeVal = function(val) {
      //Given a value (val), find the node with the value of val and re-assign it to null.
      if(!this.root){
        return false;
      }
      var current = this.root;
      while(current){
        if (current.val === val){
          current.val = null;
        } else if (val < current.val){
          current = current.left;
        } else if (val >= current.val){
          current = current.right;
        }
      }
    }

    // --------------------------------------------

    // this.removeAllVals = function() {
    //   // Re-assign all values of the binary tree to null.
    //   if(!this.root){
    //     console.log("NO ROOT FOUND!!!!!!!!!!!")
    //     return false;
    //   }
    //   var current = this.root;
    //   console.log("The root is: "+this.root);
    //   while(current){
    //     if (current.left){
    //       current = current.left;
    //       if(!current.left){
    //         current.val = null;
    //       }
    //     }
    //     if (current.right){
    //       current = current.right;
    //       if(!current.right){
    //         current.val = null;
    //       }
    //     }
    //   }
    // }

    // --------------------------------------------

    this.isValid = function() {
        // BONUS QUESTION
        // Return true if the entire binary search tree is valid, or false if it is not.

    }

    // --------------------------------------------
}
var newBSTree = new bst;
newBSTree.add(10);
newBSTree.add(13);
newBSTree.add(12);
newBSTree.add(1);
newBSTree.add(5);
newBSTree.add(9);
newBSTree.add(20);
newBSTree.add(70);
newBSTree.removeVal(70);
newBSTree.removeAllVals();


</script>

// Instructions
// Exam Time: 6 hours

// * * * * * * * * * * * * * *
// * * * Exam Guidelines * * *
// * * * * * * * * * * * * * *

// Do not change the given function names.
// Do not comment out the given functions.
// Do not change the given function parameters.
// Do not submit broken code (comment out broken code, do not comment out the given function, leave it empty)
// Make sure you are returning the expected data type.
// Remove all console.logs statements before submitting.


// ========================================================================================
// Please enter your information
user = {
    first_name: "William",
    last_name: "Palmer",
    email: "william.palmer@me.com"
};


// ========================================================================================

function sNode(val) {
    this.val = val;
    this.next = null;
}

function sQueue() {
    this.head = null;

    // Fill in the code for the enqueue method, which should add a new node to the back of the queue.
    // Return the queue.
    this.enqueue = function(val) {
      var newQNode = new sNode(val);
      if(!this.head){
        this.head = newQNode;
      } else {
        this.tail.next = newQNode;
        this.tail = newQNode;
      }
      return this;
    }

    // Fill in the code for the dequeue method, which should remove a node from the front of the queue.
    // Return the node you dequeued.
    this.dequeue = function() {
      if(!this.head){
        return false;
      }
      var temp;
      if (this.head === this.tail){
        temp = this.head;
        temp.next = null;
        this.head = null;
        this.tail = null;
      } else {
        temp = this.head;
        this.head = this.head.next;
        temp.next = null;
      }
      return temp;
    }

    // Fill in the code for the contains method, which should return true if the value given exists in the queue.
    // Return false if the value does not exist in the queue.
    this.contains = function(val) {
      if(!this.head){
        return false; //line 41
      }
      var current = this.head;
      while(current.next){
        if( current.val === val){
          return true;
        }
        current = current.next;
      }
      return false;
    }

    // Fill in the code for the size method, which should return the number of nodes in the queue.
    // Return the number of nodes in the queue.
    this.size = function() {
      var size = 0;
      if(!this.head){
        return null;
      }
      var current = this.head;
      while(current){
        size ++;
        current = current.next;
      }
      return size;
    }

}
var qNode1 = new sNode(1);
var qNode2 = new sNode(2);
var qNode3 = new sNode(3);
var qNode4 = new sNode(4);
var q2Node1 = new sNode(1);
var q2Node2 = new sNode(2);
var q2Node3 = new sNode(3);
var q2Node4 = new sNode(4);
var newQ = new sQueue();
var newQ2 = new sQueue();

newQ.head = qNode1;
newQ.tail = qNode4;
newQ2.head = q2Node1;
newQ2.tail = q2Node4;

qNode1.next = qNode2;
qNode2.next = qNode3;
qNode3.next = qNode4;
q2Node1.next = q2Node2;
q2Node2.next = q2Node3;
q2Node3.next = q2Node4;

// ========================================================================================
// Given two queues, return true the values in the two queues match in order.
// If firstQueue => (1)->(2)->(3)->(4) and secondQueue => (1)->(2)->(3)->(4), return true;
// If firstQueue => (1)->(2) and secondQueue => (1)->(2)->(3)->(4), return false;
function compare(firstQueue, secondQueue) {
  if(!firstQueue.head || !secondQueue.head){
    return false;
  }
  var curr1 = firstQueue.head;
  var curr2 = secondQueue.head;
  while(curr1 && curr2){
    if(curr1.val !== curr2.val){
      return false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next
  }
  return curr1 === curr2;
}
compare(newQ,newQ2);


// ========================================================================================
// Must use recursion:
// Given num, fill in the code that returns the sum of integers from 1 to that number (num).
// Example: rSigma(5) = 15 (1+2+3+4+5);
function rSigma(num) {
  if(num === 0 || num === 1){
    return num;
  } else if (num < 0) {
    return 0;
  } else {
    return rSigma(num-1) + num;
  }
}
rSigma(5);


// ========================================================================================
// Must use recursion:
// Return the factorial of a number (num)
// Example: rFactorial(4) = 24 (1*2*3*4)
function rFactorial(num) {
  Math.floor(num);
  if(num <= 0 || num === 1){
    return 1;
  } else {
    return rFactorial(num-1) * num;
  }
}
rFactorial(4);


// ========================================================================================
// Must use recursion:
// Create the Flood Fill function using recursion:
// Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). BuildfloodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent . Given canvas2D of
// [
//   [3,2,3,4,3],
//   [2,3,3,4,0],
//   [7,3,3,5,3],
//   [6,5,3,4,1],
//   [1,2,3,3,3]
// ]
// …plus startXY of [2,2] and newColor of 1 .. . … we examine the cells that are directly (not diagonally) adjacent to startXY , which is [2,2] .If any have a value of 3 (the original value at startXY ), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .
// [
//   [3,2,1,4,3],
//   [2,1,1,4,0],
//   [7,1,1,5,3],
//   [6,5,1,4,1],
//   [1,2,1,1,1]
// ]
// Return the canvas back.
function rFloodFill(canvas2D, startXY, newColor) {
  var x = startXY[0];
  var y = startXY[1];
  var mark = canvas2D[y][x];
  fill(x,y);
  function fill(x,y){
    if(canvas2D[x][y] !== mark){
      return;
    }
    canvas2D[y][x] = newColor;
    if(y-1 >= 0){
      fill(x,y-1);
    }
    if(y+1 < canvas2D.length){
      fill(x, y+1);
    }
    if(x-1 >= 0){
      fill(x-1,y);
    }
    if(x+1 < canvas2D[y].length){
      fill(x+1,y);
    }
  }
  return matrix;
}
matrix = [
  [5,4,1,5,7],
  [5,5,1,6,2],
  [6,5,1,5,5],
  [5,4,1,5,7],
  [8,3,5,5,5],
];
console.log(floodFill(matrix,[2,3], "X"));

// ========================================================================================
// Must use Bubble Sort
// Given an unsorted array of numbers, return the array sorted using the Bubble Sort.
// Return the sorted array.
function bubbleSort(arr) {
  var notSorted = true;
  var iter = 0;
  while(notSorted){
    notSorted = false;
    for(var i = 0; i < arr.length-1-iter; i++){
      if(arr[i] > arr[i+1]){
        notSorted = true;
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    iter++;
  }
  return arr;
}
bubbleSort([5,2,1,3,8]);

// ========================================================================================
// Must use Selection Sort
// Given an unsorted array of numbers, return the array sorted using the Selection Sort.
// Return the sorted array.
function selectionSort(arr) {
  for(var i = 0; i < arr.length; i++){
    var min = arr[i];
    var temp = 0;
    var count = i;
    for (var j = i+1; j < arr.length; j++){
      if(arr[j] < min){
        min = arr[j]
        count = j;
      }
    }
    temp = arr[i];
    arr[i] = min;
    arr[count] = temp;
  }
  return arr;
}
selectionSort([2,4,1,7,8,5]);


// ========================================================================================
// Must use Insertion Sort
// Given an unsorted array of numbers, return the array sorted using the Insertion Sort.
// Return the sorted array.
function insertionSort(arr, idx) {
  for (var i = 1; i < arr.length; i++){
    var current = arr[i];
    var index = i;
    for(var j = i-1; j >=0; j--){
      if(arr[j] > current){
        arr[index] = arr[j];
        arr[j] = current;
        index --;
      }
    }
  }
  return arr;
}
insertionSort([8,3,5,1,6]);

// ========================================================================================
// Must use Quick Sort
// Given an unsorted array of numbers, return the array sorted using the Quick Sort.
// Return the sorted array.
function quickSort(arr) {
  if(arr.length < 2){
    return arr;
  }
  var lowArr = [];
  var midArr = [arr[0]];
  var hiArr = [];
  for (var i = 1; i < arr.length; i++){
    if(arr[i] < midArr[0]){
      lowArr.push(arr[i]);
    } else {
      hiArr.push(arr[i])
    }
  }
  return quickSort(lowArr).concat(midArr).concat(quickSort(hiArr));
}
quickSort([5,8,2,7,1,9,23,16,72,4,6]);

// ========================================================================================
// Given two arrays, merge sorted arrays so the new array stays sorted.
// Return the new sorted array.
// Example: [1,2,3,4,5] + [1,4,6] = [1,1,2,3,4,4,5,6]
function mergeSortedArray(arr1, arr2) {
  var newArr = [];
  var i = 0;
  var j = 0;
  while (arr1[i] && arr2[j]){
    if(arr1[i] >= arr2[j]){
      newArr.push(arr2[j])
      j++;
    } else {
      newArr.push(arr1[i])
      i++;
    }
  }
  while(arr1[i]){
    newArr.push(arr1[i]);
    i++;
  }
  while(arr2[j]){
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}
mergeSortedArray([1,3,4,5,7], [2,4,5,5,6]);


// Before you submit, please review the following guide lines:

// * * * * * * * * * * * * * *
// * * * Exam Guidelines * * *
// * * * * * * * * * * * * * *

// Do not change the given function names.
// Do not comment out the given functions.
// Do not change the given function parameters.
// Do not submit broken code (comment out broken code, do not comment out the given function, leave it empty)
// Make sure you are returning the expected data type.
// Remove all console.logs statements before submitting.

module.exports = {
    user,
    sNode,
    sQueue,
    compare,
    rSigma,
    rFactorial,
    rFloodFill,
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSortedArray
}

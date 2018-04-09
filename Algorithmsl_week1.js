//==========================================
//================= MONDAY =================
//==========================================

//=============== Push Front ===============
/*
Given an array and an additional value,
insert this value at the beginning of the array.
Do this without using any built-in array methods
*/
function pushFront(arr, val){
  for (var i = arr.length; i > 0; i --){
    console.log(i+"  arr["+arr[i]+"]");
    arr[i] = arr[i -1];
  }
  arr[0] = val;
  return arr;
}
pushFront([1,2,3,4,5], 6);

//=============== Pop Front ===============
/*
Given an array, remove and return the value at the beginning of the array.
Do this without using any built-in array methods except pop().
*/
function popFront(arr){
  var temp = arr[0];
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  console.log(arr);
  return temp;
}
popFront([1,2,3,4,5]);

//=============== Insert At ===============
/*
Given an array, index, and additional value,
insert the value into the array at the given index.
Do this without using built-in array methods.
You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
*/
function insertAt(arr,idx, val){
  for(var i =arr.length; idx <= i; i--){
    console.log(i + ": i value, " + idx + ": insert here");
    arr[i] = arr[i-1];
    console.log(arr);
    if(i === idx){
      arr[i] = val;
    }
  }
  // return arr;
  console.log(arr);
}
insertAt([1,2,3,4,5], 1, 9);
//=============== Remove At ===============
/*
Given an array and an index into the array, remove and return the
array value at that index. Do this without using any
built-in array methods except pop(). Think of PopFront(arr)
as equivalent to RemoveAt(arr,0).
*/
function removeAt(arr, idx){
  var temp = arr[idx];
  for(var i = idx; i< arr.length -1; i++){
    arr[i] = arr[i+1];
  }
  console.log(arr);
  arr.pop();
  console.log(arr);
  return temp;
}
removeAt([1,2,3,4], 1);

//==========================================
//================ WEDNESDAY ===============
//==========================================

//=============== Swap Pairs ===============
/*
Swap positions of successive pairs of values of given array.
If length is odd, do not change the final element. For [1,2,3,4],
return [2,1,4,3]. For example, change input ["Brendan",true,42]
to [true,"Brendan",42]. Do this without using any built-in array methods.
*/
function swapPairs(arr){
  var temp;
  for (var i =0; i < arr.length; i+=2){
    if((arr.length-1) - i > 1){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1]= temp;
    }
  }
  return arr;

}
swapPairs([1,2,3,4,5,6]);

//=============== Remove Duplicates ===============
/*
Given a sorted array, remove duplicate values. Because array elements are
already in order, all duplicate values will be grouped together.
Do this without using any built-in array methods.
*/
function removeDuplicates(arr){
  console.log(arr);
  for(var idx = arr.length-1; idx>=1; idx--){
    if(arr[idx] === arr[idx-1]){
      for(var subIdx = idx; subIdx<arr.length-1; subIdx++){
        arr[subIdx] = arr[subIdx+1];
      }
      arr.pop();
    }
  }
  console.log(arr);
}
removeDuplicates([1,2,3,3,3,3,4,5,5]);

//=============== Min To Front ===============
/*
Given an array of comparable values, move the lowest element
to array’s front, shifting backward any elements previously
ahead of it. Do not otherwise change the array’s order.
Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.
Do this without using any built-in array methods.
*/
function minToFront(arr){
  var min = arr[0];
  var temp;
  // var count = 0;
  for (var i = 0; i < arr.length-1; i++){
    //count ++;
    if(arr[i]<min){
      min = arr[i];
      temp = i;
    }
  }
  for (var j = temp; j >0;j--){
    arr[j] = arr[j-1];
  }
  arr[0]=min;
  console.log(arr);
}
minToFront([5,2,6,3,1,9]);

//=============== Reverse Array ===============
/*
Given a numerical array, reverse the order of values, in-place.
The reversed array should have the same length, with existing
elements moved to other indices so that order of elements is
reversed. Working ‘in-place’ means that you CANNOT use a second array
– move values within the array that you are given.
Do this without using any built-in array methods.
*/
function reverseArray(arr){
  var temp;
  var len = arr.length-1;
  for(var i=0; i<arr.length/2; i++){
    console.log(i, arr);
    temp = arr[i];
    arr[i]=arr[len-i];
    arr[len-i]=temp;
  }
  console.log(arr);
  // return arr;
}
reverseArray([6,5,4,3,2,1]);

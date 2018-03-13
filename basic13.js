// THE BASIC THIRTEEN
/* 1) Print 1-255. Print all intergers from 1 to 255*/
function print1_255(){
  for (var i=1; i<256; i++){
    console.log(i);
  }
}
print1_255();

/*-------------------------------------------*/
/* 2) Return an array with all numbers from 1-255*/
function print1_255(){
  var arr=[];
  for (var i=1; i<256; i++){
    arr.push(i);
  }
  return arr;
}
print1_255();

/*-------------------------------------------*/
/* 3) Print all odd integers from 1-255*/
function printOdd(){
  for( var i=0;i<256; i++){
    if (i % 2 !==0){
      console.log(i);
    }
  }
}
printOdd();

/*-------------------------------------------*/
/* 4) Print all even integers from 1-255*/
function printEven(){
  for( var i=1;i<255; i++){
    if (i % 2 ===0){
      console.log(i);
    }
  }
}
printEven();

/*-------------------------------------------*/
/* 5) Get the sum off all even integers from 1-255*/
function sumEven(){
  var sum=0;
  for( var i=0;i<255; i++){
    if (i % 2 ===0){
      sum+=i;
    }
  }
  return sum;
}
sumEven();

/*-------------------------------------------*/
/* 6) Print intergers from 1-255 and the sum of the intergers*/
function printSum0_255(){
  var sum = 1;
  for (var i=1;i<256; i++){
    sum += i;
    console.log(i);
  }
  return sum;
}
printSum0_255();

/*-------------------------------------------*/
/* 7) Iterate an array (Print all values of a given array.)*/
function iterateArray(arr){
  var sum = 0;
  for(var i = 0; i<arr.length; i++){
    sum += arr[i];
    console.log(arr[i]);
  }
  return sum;
}
iterateArray([3,7,2,8,23]);

/*-------------------------------------------*/
/* 8) Print the largest value of a given array*/
function printMax(arr){
  var max = 0;
  for(var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i]
    }
  }
  return max;
};
printMax([5,1,66,24,7,87,2,5,7]);

/*-------------------------------------------*/
/* 9) Get the average of an array and print it. Both functions will work*/
function getAvg(arr){
  var sum = 0;
  var avg = 0;
  for (var i = 0;i<arr.length;i++){
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  return avg;
};
function getAvg(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum/arr.length;
};
getAvg([4,1,7,4,3,66,12,54,2]);

/*-------------------------------------------*/
/* 10) Create and array with odd intergers from 1-255*/
function arrayOdd(){
  var arr=[];
  for (var i=1; i<256; i++){
    /*if given a defined range, like 1-57,
          should use for(var i=1;i<58;i++)
     if the range is 16-395, should use for(var i=17;1<396;i++)
     if the range is 4-66, should use for(var i=5;i<66;i++)*/
    if(i % 2 !== 0){
      arr.push(i);
    }
  }
  return arr;
}
arrayOdd();

/*-------------------------------------------*/
/* 11) Square the values of an array*/
function squareArray(arr){
  for( var i=0;i<arr.length;i++){
    arr[i]=arr[i]*arr[i];
  }
  return arr;
}
squareArray([3,5,6,2,7]);

/*-------------------------------------------*/
/* 12) count all the values in an Array that are greater than Y*/
function greaterThanY(arr, y){
  var count=0;
  for( var i=0; i<arr.length; i++){
    if(arr[i] > y){
      count++;
    }
  }
  return count;
}
greaterThanY([3,7,2,5,3,1,9], 5);

/*-------------------------------------------*/
/* 13) Zero out integers that are less than zero*/
function lessThanZero(arr){
  for (var i=0; i<arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}
lessThanZero([3,-1,5,2,-6,4,-9]);

/*-------------------------------------------*/
/* 14) print the MIN, MAX, and AVG of a given array*/
function minMaxAvg(arr){
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    /*set i=1 because settting it to 0 will result in comapring
    the first position of the array to the first position
    since min, max and sum are all set to the first position of the given array.*/
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  var avg = sum/arr.length;
  var newArr = [min,max,avg];
  return newArr;
}
minMaxAvg([984,7,12,66,23,16,73,12,9]);

/*-------------------------------------------*/
/* 15) Swap the first and last values of a given array. Array length has the have
a minimum of 2 to work.*/
function swapFirstLast(arr){
  var temp=arr[0];
  arr[0] = arr[arr.length-1];
  arr[arr.length-1]=temp;
  return arr;
}
swapFirstLast([3,1,6,2,4,9]);

/*-------------------------------------------
/* 16) Replace any negative number in an array with a string, use the string "Mongo"*/
function stringToNumber(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0){
      arr[i]="Mongo";
    }
  }
  return arr;
}
stringToNumber([3,6,2,1,-9,4]);

/*-------------------------------------------
/* 17) Return the value of an array n places from last item.*/
function nthToLast(arr, n){
  if(arr.length < n){
    console.log("array length is shorter than n");
    return null;
  }
  else {
    return arr[arr.length -n];
    }
}
 nthToLast([6,1,5,2,7,9,23,65,4], 3);

/*-------------------------------------------*/
/* 18) Reverse the elements in an array*/
function reverseArray(arr){
  var temp;
  for(var i = 0; i < arr.length/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length-(i + 1)] = temp;
  }
  return arr;
}
reverseArray([6,5,4,3,2,1]);

/*-------------------------------------------*/
/* 19) Remove blank from a string*/
function removeBlanks(str){
  var newstr = "";
  for (var i=0; i < str.length; i++){
    if(str[i] !== " "){
      newstr += str[i];
    }
  }
  return newstr;
}
removeBlanks("Th eFac tC  at");

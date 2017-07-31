//##################################
//------BubbleSort Version1---------
//##################################
// function bubbleSort(arr) {
//     var temp = 0;
//     var count = 0;
//     while (count < arr.length){
//       var flag = true;
//       for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i+1]) {
//           console.log(arr);
//           flag = false;
//             temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//             // console.log(arr);
//           }
//         }
//         count++
//         if(flag==true){
//           console.log(count);
//
//           return arr;
//
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([1,4,8,3,6,7,20004055,2234]));

//##################################
//------BubbleSort Version2---------
//##################################
// function bubbleSort(arr) {
//     var temp = 0;
//     var flag = true;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//                 flag = false;
//                 console.log(flag);
//             }
//             if (flag == true){
//               console.log(flag);
//               return arr;
//
//             }
//         }
//     }
//     return arr;
// }
// bubbleSort([4,1,5,2,6,7,8,]);
// console.log(bubbleSort([4,1,5,2,6,7,8,]));

//##################################
//---------Selection Sort ----------
//##################################
function selectionSort(arr){
  var temp = 0;
  for (var i = 0; i <arr.length; i++){
    var min = i;
    for (var j = i+1; j < arr.length; j++){
      if (arr[j] < arr[min]){
        min = j;
      }
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
selectionSort([3,2,52353,6,4,15,899,5,222]);
console.log(selectionSort([3,2,52353,6,4,15,899,5,222]));

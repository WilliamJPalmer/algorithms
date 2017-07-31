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
// function selectionSort(arr){
//   var temp = 0;
//   for (var i = 0; i <arr.length; i++){
//     var min = i;
//     for (var j = i+1; j < arr.length; j++){
//       if (arr[j] < arr[min]){
//         min = j;
//       }
//     }
//     temp = arr[min];
//     arr[min] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }
// selectionSort([3,2,52353,6,4,15,899,5,222]);
// console.log(selectionSort([3,2,52353,6,4,15,899,5,222]));

//##################################
//---------Insert Sort ----------
//##################################
// function insertSort(arr){
//   var temp = 0;
//   for (var x = 1; x <arr.length; x++){
//     temp = arr[x];
//     for(var y = x-1; y>=0; y --){
//       if(arr[y] > temp){
//         arr[y+1] = arr[y];
//         arr[y] = temp;
//       }
//       else{
//         break;
//       }
//     }
//   }
//   return arr;
// }
// insertSort([3,2,7,6,4,15,1,5,9]);
// console.log(insertSort([3,2,7,6,4,15,1,5,9]));


//##################################
//---------Partition Sort ----------
//##################################
// function partitionSort(arr){
//   var pivot = arr[0];
//   var count = 0;
//   for (var i=1; i<arr.length; i++){
//     if (arr[i] < pivot){
//       arr[count] = arr[i];
//       arr[i] = pivot;
//       count ++;
//       console.log(count);
//     }
//   }
//   // return arr[count];
//   return arr;
// }
//
// partitionSort([6,2,5,7,6,1]);
// console.log(partitionSort([6,2,5,7,6,1]));

//##################################
//---------Partition Sort ----------
//##################################
function SLNode(val){
    this.val = value;
    this.head = null;
    }
function SList(){
    this.head = null;
    this.partition = function(SList){
        if (!this.head){
            return false;
            }

        var pivot = this.head;
        var current = pivot.next;
        var temp = null;
        while (current){
            if (pivot.val >= current.val){
                temp = pivot;
                pivot.next = temp;
                temp.next = current.next;
                current.next = temp;
                current = pivot.next
                }
            current = current.next;
        }
    }
    return this.list;
}


var list = new SList();
list.partition(2,5,3,6,7,1);
console.log(list);

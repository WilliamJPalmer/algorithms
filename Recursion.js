//**********************************
//**********************************
// these three if statments are the same
// 1 --if (! str){
//     str = ""
//     }
//
// 2-- if (!str) str=""
//
// 3-- str = str || ""
//**********************************
//**********************************

// function recursionSigma(m){
//   if(m==1){
//     return m;
//   }
//   else{
//     return recursionSigma(m-1)+m;
//   }
// }
// recursionSigma(5);
//
//
// function iterateSigma(m){
//   var sum = 0;
//   for(var i = 0, i <= m; i++){
//     sum += i;
//   }
//   return sum;
// }
//
// iterateSigma(6);
//
// //--------------------------
// function fibonacci(n){
//   if (n ==0 || n == 1){
//     return n;
//   }
//   else if (n < 0){
//     return 0;
//   }
//   else{
//     return fibonacci(n-1) + fibonacci(n-2)
//   }
// }

// ----------FACTORIAL RECURSION----------
// the factorial of ZERO is 1.
// 0! = 1
// function rFactorial(num){
//   if(num == 1 || num <= 0){
//      return num;
//   }
//   else{
//     Math.floor(num);
//     return rFactorial(num-1) * num;
//   }
// }
//
// rFactorial(7);

// // -----------BINARY STRING EXPRESSION-----------
// function rBinStrExp(str){
//   var curr = "";
//   var arr = [];
//   // the parenthesis surrounding the function below, makes the functionan
//   // immediate function and the return needs to be outside the funciton
// (function rBSEHelper(str, curr, arr){
//     if (curr.length == str.length){
//       arr.push(curr);
//     }
//     else{
//       rBSEHelper(str,curr + "0",arr);
//       rBSEHelper(str,curr + "1",arr);
//     }
//   })(str,curr,arr);
//   return arr;
// }
// console.log(rBinStrExp("1,2"));
//
// // ----------VERSION 2-------------
//
// function rBinStrExp(str){
//   var curr = "";
//   var arr = [];
// function rBSEHelper(str, curr, arr){
//     if (curr.length == str.length){
//       arr.push(curr);
//     }
//     else{
//       rBSEHelper(str,curr + "0",arr);
//       rBSEHelper(str,curr + "1",arr);
//     }
//   }
//   rBSEHelper(str,curr,arr); //has to be called before the return
//   return arr;
//
// }
// console.log(rBinStrExp("1,2"));
//
//
// function rBinStrgExpn(str, substr, arr){
//   substr = substr || ""
//   arr = arr || []
//   if (!str[substr.length]){
//     arr.push(substr)
//   } else {
//     if (str[substr.length] != "?"){
//       rBinStrgExpn(str, substr + str[substr.length], arr)
//     } else {
//       rBinStrgExpn(str, substr + "0", arr)
//       rBinStrgExpn(str, substr + "1", arr)
//     }
//   }
//   return arr;
// }
//   console.log(rBinStrgExpn("??????????"));
//
// //------------VERSION TWO------------------
//
// function rBinStrgExpn(str, substr, arr){
//   return helper(str, "", [])
//   function helper (str, substr, arr){
//     if (!str[substr.length]){
//       arr.push(substr)
//     } else {
//       if (str[substr.length] != "?"){
//         helper(str, substr + str[substr.length], arr)
//       } else {
//         helper(str, substr + "0", arr)
//         helper(str, substr + "1", arr)
//       }
//     }
//     return arr;
//   }
// }
// console.log(rBinStrgExpn("??????????"));
//
// //-----------VERSION THREE---------------------
// function rBinStrgExpn(str){
//   var arr = [];
//   (function helper(str, arr){
//     if(str.indexof("?")== -1){
//       arr.push(str)
//     }
//     else{
//       var x = str.indexof("?");
//       if(x==0){
//         tempStr1 += "0";
//       }
//       else {
//         tempStr1 += str.substring(0,x);
//         tempStr1 += "0";
//         tempStr1 == str.substring(x+1, str.length);
//         helper(tempStr1,arr);
//       }
//       var tempStr2 = "";
//       if(x==0){
//         tempStr2 += "1";
//       }
//       else{
//         tempStr2 += str.substring(0,x);
//         tempStr2 += "0";
//         tempStr2 == str.substring(x+1, str.length);
//         helper(tempStr2,arr);
//       }
//     }
//   });
// }

// GREATEST COMMON FACTOR -------------
//*************************************
//possible interview question
// //*************************************
//
// function rGCF(a,b){
//   if(a==b){
//     return a;
//   }
//   else if(a>b){
//     if(a % b == 0){
//       return b;
//       if (a % b != 0){
//         a = a % b;
//       }
//     } else {
//       a = a-b;
//     }
//   }
//   else if (b > a){
//     if (b % a ==0){
//       return a;
//       if ( b % a != 0){
//         b = b % a;
//       }
//     }else {
//       b = b-a;
//     }
//   }
//   return rGCF(a,b);
// }
//
// console.log(rGCF(81,108));

//**********************************************
//------------Recursion Anagrams ---------------
//**********************************************

function rAnagrams(str){
  var arr = [];
  if(str.length < 2){
    arr.push(str);
    return arr;
  }
  var tempStr = "";
  var tempArr = str.split('');
  helper = function(tempArr, tempStr, arr){
    if (tempArr.length ==1){
      arr.push(tempStr + tempArr[0])
    } else {
      for (var i = 0; i <tempArr.length; i++){
        var str = tempArr[i];
        tempArr.splice(i,1);
        helper(tempArr, tempStr + str, arr);
        tempArr.splice(i, 0, str);
      }
    }
  }
  helper(tempArr, "", arr);
  return arr;
}

console.log(rAnagrams("william"));
rAnagrams("william");

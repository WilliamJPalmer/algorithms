//==========================================
//================= MONDAY =================
//==========================================

//=============== Arrs2Map ===============
/*
Given two arrays, create an associative array (map)
containing keys of the first, and values of the second.
*/
function arr2Map(arr1, arr2){
  var assocArr = {};
  for(var i =0; i < arr1.length; i++){
    assocArr[arr1[i]] = arr2[i];
  }
  console.log(assocArr);
}
arr2Map(["name", "age", "color"], ["me", 32, "red"]);

//=============== Invert Hash ===============
/*
Create invertHash(assocArr) that converts a hash’s keys
to values and values to corresponding keys.
Use for ... in method.
*/
function invertHash(assArr){

}

//=============== Join2 ===============
/*
Create join2(arr) that given an array of strings,
return a string with all array strings combined.
Given [‘a’,’b’,’c’], return ‘abc’.
*/
function join2(arr){
  var newStr = "";
  for(var i = 0; i < arr.length; i++){
    newStr += arr[i];
  }
  console.log(arr);
  console.log(newStr);
}
join2(['1', '2', '3']);
//=============== Split2 ===============
/*
Create split2(str) that splits a string into
individual strings and returns them in an array.
Given ‘abc’ return [‘a’,’b’,’c’].
*/
function split2(str){
  var newArr = [];
  for(var i = 0; i < str.length; i++){
    newArr[i] = str[i];
    // ===== or ======
    //newArr.push(str[i]);
  }
  return newArr;
}
split2('monday');

//=============== Reverse String ===============
/*
Implement a function reverseString(str) that, given a string,
will return the string of the same length but with characters
reversed. Example: given "creature", return "erutaerc".
*/
function reverseString(str){
  var temp
  var newStr = '';
  for(var i=str.length-1;i>-1; i--){
    newStr += str[i]
  }
  str = newStr;
  return str;
}
reverseString('automobile');

//==========================================
//================ WEDNESDAY ===============
//==========================================

//=============== Parens Valid ===============
/*
Create a function that, given an input string, returns
a boolean whether parentheses in that string are valid.
Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3",
return false. Given "n)0(t(0)k", return false.
*/
function parensValid(str){
  var openParen = 0;
  var closeParen = 0;
  for (var i = 0; i < str.length-1;i++){
    if (str[i] === "("){
      openParen ++;
    } else if (str[i] === ")"){
      closeParen ++
    }
    if(closeParen > openParen){
      return false;
    }
  }
  if(openParen!=closeParen){
    return false;
  } else {
    return true;
  }
}
parensValid('y(3(p)p(3)r)s');
parensValid('n(0(p)3');
parensValid('n)0(t(0)k');

//=============== Braces Valid ===============
/*
Given a string, returns whether the sequence of various
parentheses, braces and brackets within it are valid.
For example, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!",
return true. Given "d(i{a}l[t]o)n{e", return false.
Given "a(1)s[O(n]0{t)0}k", return false.
*/
function bracesValid(str){

}
bracesValid('w(a{t}s[o(n{c}o)m]e)h[e{r}e]!');

//=============== Is Palindrome ===============
/*
Create a function that returns a boolean whether the string
is a strict palindrome. For "a x a" or "racecar", return true.
Do not ignore spaces, punctuation and capitalization:
if given "Dud" or "oho!", return false.
*/
function isPalindrome(str){
  var x = str.length-1;
  for (var i = 0; i<str.length; i++){
    if (str[i]!== str[x-i]){
      return false;
    }
  }
  return true;
}
isPalindrome('tis tat sit');

//=============== Longest Palindrome ===============
/*
For a string, return the longest palindromic substring.
Given "what up, dada?", return "dad". Given "not much",
return "n". Include spaces as well (i.e. be strict, as
in the “Is Palindrome” challenge): given "My favorite
racecar e ded rupted!", return "e racecar e".
> Find the strict palindrome.
*/
function longestPalindrome(str){

}
longestPalindrome('tis tat sit');

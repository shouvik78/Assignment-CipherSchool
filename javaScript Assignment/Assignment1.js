                                                     /*JAVASCRIPT QUESTIONS
                                                  Deadline: 19/08/2020 (11:59 pm)*/
                                
                                                     //(Very Easy)
/*Q1. Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.
Examples
convert (5) ➞ 300
convert (3) ➞ 180
convert (2) ➞ 120
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/

var a=5;

var sec=60;
function converter(a){
    return console.log(a*sec);
}
converter(a);

/*Q2. Divides Evenly
Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
Examples
dividesEvenly (98, 7) ➞ true
# 98/7 = 14
dividesEvenly (85, 4) ➞ false
# 85/4 = 21.25
Notes
a will always be greater than or equal to b.*/


var a=98,b=7;
function check(a,b){
    if((a%b)===0){
        return true;

    }else 
    return false;
}
console.log(check(a,b));
 
                                                                /*(Easy)*/

/*
Q1. Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
Examples
charCount ("a", "edabit") ➞ 1
charCount ("c", "Chamber of secrets") ➞ 1
charCount ("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).
*/

const a="big fat bubble";
var len=a.length;
const b="b";
var count=0;
function check(a,b){
    for(let i=0;i<len;i++){
          if(a[i]==b){
          count=count+1;     
        }
    }
    return count;
}
check(a,b);
console.log(count);

/*Q2. Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples
addUp (4) ➞ 10
addUp (13) ➞ 91
addUp (600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.*/

var a;
function addUp(a){
    return (a*(a+1))/2;
}
console.log(addUp(600));


/*Q3. Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another character.
a = 1, e = 2, i = 3, o = 4, u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"
replaceVowel("chembur") ➞ "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1ri"
Notes
The input will always be in lowercase.*/ 


function replaceVowel(string) {
  for (var place = 0; place < string.length; place++) {
    if (string.charAt(place) == "a") {
      string = string.replace(string.charAt(place), 1);
    }
    if (string.charAt(place) == "e") {
      string = string.replace(string.charAt(place), 2);
    }
    if (string.charAt(place) == "i") {
      string = string.replace(string.charAt(place), 3);
    }
    if (string.charAt(place) == "o") {
      string = string.replace(string.charAt(place), 4);
    }
    if (string.charAt(place) == "u") {
      string = string.replace(string.charAt(place), 5);
    }
  }
  return string;
}
console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));
               

															// MEDIUM
console.log("-----question1-----");
function specialReverse(string, ch) {
  let arr = string.split(" ");
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i].substr(0, 1) == ch) {
      let newarr = arr[i].split("");
      arr[i] = newarr.reverse().join("");
    }
  }
  return arr.join(" ");
}
console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));
console.log("------question2------");
function testJackpot(arr) {
  if (
    arr[0] == arr[1] &&
    arr[1] == arr[2] &&
    arr[2] == arr[3] &&
    arr[3] == arr[0]
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));

console.log("-----question3-----");
function removeDups(array) {
  return array.filter((a, b) => array.indexOf(a) == b);
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
                                               
                                               //HARD

console.log("-----question1");

function realType(value) {
  let arr = Object.prototype.toString.call(value);
  let type = arr.split(" ");
  let typeStr = "";

  for (i = 0; i < type[1].length; i++) {
    if (type[1].charAt(i) !== "]") typeStr += type[1].charAt(i);
  }

  return typeStr.toLocaleLowerCase();
}

console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));

console.log("------question2------");

function numInStr(string) {
  let finalArray = [];
  for (i = 0; i < string.length; i++) {
    arr = string[i].split("");

    for (j = 0; j < arr.length; j++) {
      if (
        arr[j] == "1" ||
        arr[j] == "2" ||
        arr[j] == "3" ||
        arr[j] == "4" ||
        arr[j] == "5" ||
        arr[j] == "6" ||
        arr[j] == "7" ||
        arr[j] == "8" ||
        arr[j] == "9" ||
        arr[j] == "0"
      ) {
        finalArray.push(arr.join(""));
        break;
      }
    }
  }
  return finalArray;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "ab10c", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));


																/*Done*/





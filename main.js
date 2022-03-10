// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(a, b) {
  let sum = 0;
  if (a % 2 === 0 || a === 0) {
    a += 1;
    while (a <= b) {
      sum += a;
      a += 2;
    }
  }

  if (a % 2 !== 0) {
    while (a <= b) {
      sum += a;
      a += 2;
    }
  }
  return sum;
}

/* console.logs to test */
console.log("sumOfOdds");
console.log(sumOfOdds(-8, 11));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    let it = arr1[i];
    newArray.push(it - arr2[i]);
  }
  return newArray;
}

/* console.logs to test */
console.log("arraySubtract");
console.log(arraySubtract([7, 9, -4, 5], [2, 6, 9, 3]));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arr, str1, str2) {
  arr.unshift(str1);
  arr.push(str2);
  return arr;
}

/* console.logs to test */
console.log("surroundArray");
console.log(surroundArray(["had"], "Mary", "a little lamb."));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(arr) {
  let longest = 0;
  let dex = 0;
  if (arr.length === 0) return "";

  for (let i = 0; i < arr.length; i++) {
    let it = arr[i];
    if (i === 0) {
      longest = it.length;
      dex = i;
    }
    if (longest < it.length) {
      longest = it.length;
      dex = i;
    }
  }
  return arr[dex];
}

/* console.logs to test */
console.log("longestString");
console.log(
  longestString(["mary", "had", "a", "little lamb", "also", "aa", "doggg"])
);
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str) {
  let solution = "";
  for (let it of str) {
    if (it === "s") {
      it = "r";
      solution += it;
    } else if (it === "S") {
      it = "R";
      solution += it;
    } else if (it === "r") {
      it = "s";
      solution += it;
    } else if (it === "R") {
      it = "S";
      solution += it;
    } else {
      solution += it;
    }
  }
  return solution;
}

/* console.logs to test */
console.log("sToR");
console.log(sToR("aRrrSss"));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num) {
  if (num % 4 === 0 && num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log(divisibleBy4And7(27));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str) {
  if (str.includes("!") && str.includes("?")) {
    return true;
  } else {
    return false;
  }
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log(exclamationAndQuestion("Mary had a? little lamb!"));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str) {
  let counterA = 0;
  let counterB = 0;
  let solution = [];
  for (let it of str) {
    if (it === "a" || it === "A") {
      counterA++;
    } else if (it === "b" || it === "B") {
      counterB++;
    }
  }
  return solution.concat(counterA, counterB);
}

/* console.logs to test */
console.log("countAB");
console.log(countAB("mary hadB A little lamb"));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr, str) {
  let solution = [];
  for (let it of arr) {
    if (it.slice(-1) === "s" || it.slice(-1) === "S") {
      it += str;
      solution.push(it);
    } else {
      solution.push(it);
    }
  }
  return solution;
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log(addStringIfLastS(["test", "testing", "testings"], "TEST"));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr) {
  let solution = [];
  if (arr.length < 2) return undefined;
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < firstSmallest) {
      firstSmallest = num;
    } else if (num < secondSmallest && num !== firstSmallest) {
      secondSmallest = num;
    }
  }

  solution.push(firstSmallest);
  solution.push(secondSmallest);
  return solution;
}

/* console.logs to test */
console.log("twoSmallest");
console.log(twoSmallest([2, -11, -9, 5, 6, 44, -6, 7, 1, 0, -2, 22]));
//Add console.logs here to test!  Feel free to format this section however you like

console.log(
  "\n////////////////////////////////////////////////////////////////////////////\n"
);

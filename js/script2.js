//* Question 1
console.log("Question 1");
// Write a function that prints the first 10 integers on the console starting from the number 1 using
function firstint() {
  for (i = 0; i <= 10; i++) {
    console.log(i);
  }
}
console.log(firstint());
firstint();

//* Question 2
console.log("Question 2");
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
function next5num(num2) {
  for (i = num2; i <= num2 + 5; i++) {
    console.log(i);
  }
}
console.log(next5num(7));
next5num(7);

//* Question 3
console.log("Question 3");
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
function sumofthenext10(num3) {
  sumnum = 0;
  for (i = num3 + 1; i <= num3 + 10; i++) {
    sumnum = sumnum + i;
  }
  return sumnum;
}
console.log(sumofthenext10(7));
//* Question 4
console.log("Question 4");
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
function everyelementofthearray(arr1) {
  for (i = 0; i <= arr1.length; i++) {
    // return arr1[i];
    console.log(arr1[i]);
  }
}
console.log(next5num([1, "Hello", 8, 44]));
next5num([1, "Hello", 8, 44]);
//* Question 5
console.log("Question 5");
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
function totalnumberofelements(arr2) {
  // console.log(arr2.length);
  return arr2.length;
}
// console.log(totalnumberofelements([1, "Hello", 8, 44]));
console.log(totalnumberofelements(["world", 13]));
//* Question 6
console.log("Question 6");
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
function sumofarry(arr3) {
  let sumArray = 0;
  for (i = 0; i < arr3.length; i++) {
    sumArray = sumArray + arr3[i];
  }
  return sumArray;
}
console.log(sumofarry([5, 6, 99, 8, 76, 4, 68, 44]));
console.log(sumofarry([3, 0]));

//* Question 7
console.log("Question 7");
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
function differenceBnEandO(arr4) {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 == 0) {
      sumOfEven = sumOfEven + arr4[i];
    } else {
      sumOfOdd = sumOfOdd + arr4[i];
    }
  }
  return sumOfEven - sumOfOdd;
}
console.log(differenceBnEandO([5, 6, 99, 8, 76, 4, 68, 44]));
//* Question 8
console.log("Question 8");
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
function arrayEvenIndexVal(arr5) {
  for (i = 0; i < arr5.length; i += 2) {
    console.log(arr5[i]);
  }
}
arrayEvenIndexVal([5, 6, 99, 8, 76, 4, 68, 44]);
arrayEvenIndexVal([11, "Sam", 3, 7, "car"]);
//* Question 9
console.log("Question 9");
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
//let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
function removeLastAndAdd32(arr6) {
  if (!Array.isArray(arr6)) {
    return "input must be array";
  }

  arr6.pop();
  arr6.push("32");
  return arr6;
}
console.log(removeLastAndAdd32([5, 6, 99, 8, 76, 4, 68, 44]));
console.log(removeLastAndAdd32("3"));
//* Question 10
console.log("Question 10");
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
function sortArrayAscending(arr7) {
  if (!Array.isArray(arr7)) {
    return "input must be array";
  }
  return arr7.sort(function (a, b) {
    return a - b;
  });
}
console.log(sortArrayAscending([5, 6, 99, 8, 76, 4, 68, 44]));

//* Question 10 and 11
console.log("Question 10 and 11");
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
//* Question 10
evangadiClass.lengthOfCourse = "5 Month";
// evangadiClass["lengthOfCourse"] = "6 Month";
console.log(evangadiClass.lengthOfCourse);
//* Question 11
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered);

//* Question 13
console.log("Question 13");
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

function calculatesAverage(evangadiClass){
    let sumage = 0;
    for(i = 0; i < evangadiClass.students.length; i++){
        sumage = sumage + evangadiClass.students[i].age;
    }
    averageAge = sumage / evangadiClass.students.length;
    return averageAge;
}
console.log(calculatesAverage(evangadiClass));

//* Question 14
console.log("Question 14");
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
// function persentageOfMF(evangadiClass){
function calculateMalePercentage(evangadiClass) {
  var maleCount = 0;
  var totalStudents = evangadiClass.students.length;
  for (var i = 0; i < totalStudents; i++) {
    if (evangadiClass.students[i].sex === "M") {
      maleCount++;
    }
  }
  var malePercentage = (maleCount * 100) / totalStudents;
  var femalePercentage = 100 - malePercentage;
  var result =
    "Percentage of male students: " +
    malePercentage +
    "%, Percentage of female students: " +
    femalePercentage +
    "%";
  return result;
}
console.log(calculateMalePercentage(evangadiClass));

//* Puzzles

//* Question 15
console.log("Question 15");
// : Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.
function testDivisorsOfThree(low, high) {
if (
    typeof low !== "number" ||
    typeof high !== "number" ||
    isNaN(low) ||
    isNaN(high)
) {
    
    return "Inputs must be valid numbers";
}
if (low > high) {
    return "Low number must be <= high number";
}
for (var i = low; i <= high; i++) {
    if (i % 3 === 0) {
    console.log(i + " div3");
    } else {
    console.log(i);
    }
}
}
 console.log(testDivisorsOfThree(2, 10));


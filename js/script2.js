//* Question 1
console.log("Question 1");
// Write a function that prints the first 10 integers on the console starting from the number 1 using
function firstint(){
    for(i=0;i<=10;i++){
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
    for(i=num2;i<=num2+5;i++){
        console.log(i) ;
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
function sumofthenext10(num3){
    sumnum=0;
    for(i=num3+1;i<=num3+10;i++){
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
function everyelementofthearray(arr1){
    for(i=0;i<=arr1.length;i++){
        // return arr1[i];
        console.log(arr1[i]);
    }
}
console.log(next5num([1, "Hello", 8, 44]));
next5num([1, "Hello", 8, 44]);


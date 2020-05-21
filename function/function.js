// var fruits = ['apple', 'banana', 'orange', 'pineapple', 'kiwi']
 
// function fruitcounter (foods){
       
//     var totalFruits = 0;

//     for(var i = 0; i < foods.length; i++){
        
//        totalFruits = totalFruits + 1;
         
         
//     }
//     return totalFruits;

// }
//  // Invoque fruitcounter with our fruit array, and log it to the console.
// //console.log(fruitcounter(fruits));
// Question 3:
// Given an arry of of first & last names (see below), write a function that returns an array of first names
        // Example array: ['Patrick Francois', 'Mitsie Paisley', 'George Francais', 'Deboraht Neal']
            // Resulting output: ['Patrick', 'Mitsie', 'George', 'Deboraht']

            //Hints: 
                // 1: use an array instead of a number for our accumilator
                // 2: within the loop use the .push() method to add items into the array 


// Question 4
// Given an array of strings write a function that returns any items that are longer than 4 letters
    // Example array:  


// Question 5
// Given a string write a function that removes every other letter

// var Names = ['Patrick Francois', 'Mitsie Paisley', 'George Francais', 'Deboraht Neal'];
 
// create a function that takes an array of names.
// name it and give it its value.
// declare a variable.
// create the for loop.
// we have to add 1 to the total value.
// return the final array.

// function NameList (selectionOfNamesarr){
//     var FirstNames = [];
    
//     for(let i = 0; i < selectionOfNamesarr.length; i++){
//         var FirstNames = FirstNames + 1;
//         var First= currentselectionOfNames = selectionOfNamesarr[i];
//     } currentselectionOfNames.split(' ') [0]
      
//     return selectionOfNamesarr;
// }  
// console.log(NameList(Names));

// var newNames = [''].push('Benjamin');
// console.log(newNames('')) 

// var words = ['Hello', 'World', 'Pasta',  'Pizza', 'Dog', 'Cat', 'Fish', 'Jump']   
// console.log(words);

// function AllLetters (Words){
//     var FreshLetters = 0;
//     for(let i = 0; i < Words.length; i++){
//         FreshLetters = FreshLetters + 1;
//         if( Words.length <= 3){
//             Words.length = true;
//         }

// }
//     return AllLetters;


// }
// console.log(AllLetters(Letters));



//           ........Homework.......

// 5.15.20

// Example:

// ONLY using comments write a function that turns an array into a string

// Example Solution:

// Declare a function that takes in an array

// The function will join the array into one long string using spaces

// Q1:

// Write a function that takes in a string and turns it into an array 
// based on where it has dashes.
   /// Declare a function of one long string.
   /// create a for loop;
   /// change it into an array by using .replace(" "); from index 0 to 
   /// the end of the array + 1;
   /// Declare a variable with new array name;
   /// Return array;
// Input: var string = "Pizza-Pizza-Give-Me-All-The-Pizza!"

// Output: ["Pizza","Pizza","Give","Me","All","The","Pizza!"]



//Q2:

// Write a function that takes in an array of strings and joins it all 
//together without spaces
   /// Create a function that has an array of strings.
   /// give it a name and its value.
   /// create a variable for the new array;
   /// create a for loop,where we will use index from 0,increasing by 1.
   /// inside we will use .split(" ")....join;
   /// to remove the quotes and connect all strings together.
   /// return new array wiyh no space.
// Input: var arr = ["I","Can","Not","Wait","For", "Warm", "Weather!"]

// Output: "ICanNotWaitForWarmWeather!"

// Q3:

// Write a function that takes in a string and removes all of its dashes
   /// create function,name,value. New variable for new string.
   /// create loop,by adding one to the indices.
   /// inside loop use method .split.join removing dashes;
   /// return new string with no space in between;
// Input: var str = "I-Love-To-Code!"

// Output: "ILoveToCode!"

// Hint: this is the previous two questions combined

//Practice exercise

// function myFunction(){
//    return 'Hello World';
   
   
// }
// console.log('Hello World');

// console.log(myFunction);


// function returnNumber(){
//    return 3;

// }
// console.log('3');


// var str1 = 'Hello World';
// function thirdLetter(){
//    return str1;
// }
// console.log(str1);

// var name = 'Deboraht Neal';
// function thirdLetter(){
//    name = name + ' MD';
//    return name;
// }
// console.log(thirdLetter());

// var array1 = ['This', 'is', 'my', 'first', 'time', 'doing', 'this'];
// var array2 = ['I', "can't", 'wait', 'for', 'the', 'weekend'];
// function makeSentence(array){
//   return (array.join(' '));
// }
// console.log(makeSentence(array1));
// console.log(makeSentence(array2));

// function createDate(){
//    return new Date;
// }
// console.log(new Date);

// var str1 = '8 J 8   MB1I88G   IMJ8888   JI  8'

// function noSpace(x){
//    return x.split(' ').join(''); 
// }
// console.log(noSpace(str1));


// function basicOp(operation, value1, value2){
//   if(operation === '+'){
//      return value1 + value2;
//   }else if(operation === '-'){
//      return value1 - value2;
// //   }else if(operation === '*'){
//      return value1 * value2;
//   }else if(operation === '/'){
//    return value1 / value2;
//   }else if(operation === '^'){
//      return Math.pow(value1, value2);
//   }else{
//      return 'not a valid mathematical operation';
//   }
// }
// console.log(basicOp('+', 8, 8));
// console.log(basicOp('-', 8, 8));
// console.log(basicOp('*', 8, 8));
// console.log(basicOp('/', 8, 8));
// console.log(basicOp('^', 8, 8));


                       // Exercise //

// instructions:
    // write functions that take in arrays and produce results

// // level 1:
//     // return the first element of the following arrays
//         // We are invoking the function twice, once with each array
//         // only add code where there is the text "this is where your code goes"
//  var commonWords = ['Hello', 'World'];
// var uncommonWords = ['flummoxed', 'thenceforward'];
        
// function firstElement (commonWord, uncommonWord) {
// //          return //this is where your code goes
//  return commonWord;
// return uncommonWord;
// }
// console.log(firstElement(commonWords));
// console.log(firstElement(uncommonWords));
    
//     // level 1:
//         // return the second element of the following arrays
//             // We are invoking the function twice, once with each array
//             // only add code where there is the text "this is where your code goes"
        
//         var brightColors = ['White', 'Yellow', 'Pink', 'Neon Green'];
//         var darkColors = ['Black', 'Navy', 'Military Green'];
        
//         function secondElement (parameter) {
//         return //this is where your code goes
//                // light;
//                // dark;
//        }
        
//         console.log(secondElement(light));
//         console.log(secondElement(dark));
        
    // level 2:
        // you may want multiple lines of code in these exercises
        // Feel free to write code where '// something' is written and
        // where 'this is where your code goes' is written        
    
        // dynamically return the last elements of the following arrays
        
       // var flags = ['Old Glory', "Saint George's Cross", 'Tricolore'];
        //var countries = ['United States', 'England', 'France'];
        
        //function lastElement (parameter) {
       //this is where your code goes
       
       //return //something
       
       
       
       
//        var flags = ['Old Glory', "Saint George's Cross", 'Tricolore'];
//        var countries = ['United States', 'England', 'France'];
//       function lastElement(flags, countries){
//          return flags[2];
//          return countries[2];
//       }           
//       // console.log(lastElement(flag));
//       // console.log(lastElement(country));
//        console.log(flags[2]);
//        console.log(countries[2]);


// function greeting(){
//    return "Hello World"
// }
// console.log("Hello World");


// // function goodbye(){
// //    return Goodbye;
// // }
// // console.log('Goodbye');

// // function Test(){
// //    return 'this is a test'
// // }
// // console.log('this is a test');

// // function Summer(){
// //    return "I love the sun"
// // }
// // console.log("I love the sun");

// // function Winter(){
// //    return "I love the snow"
// // }
// // console.log("I love the snow");

// // var headmaster = ('Albus Dumbledore');
// // var student = ('Hermione Granger');

// // function Welcome(){
// //    return student;
// //    return headmaster;
// // }
// // console.log('Welcome', headmaster);
// // console.log('welcome', student);


// // Level 0:
 
//  // Write out 3 functions which don’t require an argument or parameter. 
//  // They return:
//  // Hello World!
//  // Good Morning World!
//  // Goodnight World!
// //  function greeting(){
// //    return 'Hello World'
// //  }
//  console.log('Hello World');

// function Bonjour(){
//    return 'Good Morning'
// }
// console.log('Good Morning');

// function  Bonsoir(){
//    return 'Good Night World!'
// }
// console.log('Good Night World!');

// Level 1:
 
 // Write out 3 functions which take in a number and perform a mathematical operation and return the result
 // Add
 // Multiply
 // Divide
 
// function MathOperation(operation, a, b){
//    //var Newoperation = ('a, b');
//    if (operation === '+'){
//       return a + b;
//    }if (operation === '*'){
//       return a * b;
//    }if (operation === '/'){
//       return a / b;
//    }
// }
// console.log(MathOperation('+', 3, 4));
// console.log(MathOperation('*', 7, 7));
// console.log(MathOperation('/', 4, 2));   






 // Write out 3 functions which take in a string and return 
 // The first character 
 // The last character
 // The middle character
 
 // Create 3 functions which take in an array and return 
 // The first element 
 // The last element 
 // The middle element

// var array1 = ['Haiti', 'Dominican Republic', 'United States', 'Senegal'];
//  function AllCountries(array1){
   
//    return [0];
// }
// console.log(array1[0]);


// var array2 = ['milk', 'diapers', 'wipes', 'baby monitor'];
// function ToddlerShopping(array2){
//    var shopping = array2.pop
//    return shopping;
// }     
// console.log();




// level 0
    // create and invoke a "hello world" function that will always say hello world
function greeting(){
   return 'Hello World'
}
console.log('Hello World');


// level 1 
    // Q1:
        // create and invoke a function that takes in a name and produces hello + givenName + !
            // input: 'Nic'
            // output: Hello Nic!
  var name = ('Nic');
function UserGreeting(strNameparam){
   name = 'Welcome ' + name;
   return name;
   
   
}  
console.log(UserGreeting ());





    // Q2: 
        // create a function that takes in one number and doubles it

function CheckNum(op, a, b){
   if (op === 'a', '+', 'b'){
      return true;
   }
}
console.log(CheckNum('op', 8, '+', 8));


    // Q3:
        // create a function that takes in a number and triples it
const str1 = 5;
const str2 = 3;
function triplesN(string){
    return str1 * str2;
}
console.log(str1 * str2);

// level 2
    // Q1: 
        // create a function that takes in a number and tells us if it is divisible by 2
            // requires an if statement





    // Q2: 
        // create and invoke a function that takes in a first and last name and produces hello + firstName
// level 3:
    // Q1: 
        // create a function that takes in a number and tells us if it is divisible by both 2 & 3
            // requires an if statement
// level 4:
    // Q1: 
        // create a function that returns an array of all the smaller positive numbers that are divisible by either 2 or 3 
            // requires an if statement

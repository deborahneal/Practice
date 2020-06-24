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
// function greeting(){
//    return 'Hello World'
// }
// console.log('Hello World');


// // level 1 
    // Q1:
        // create and invoke a function that takes in a name and produces hello + givenName + !
            // input: 'Nic'
            // output: Hello Nic!
//   var name = ('Nic');
// function UserGreeting(strNameparam){
//    name = 'Welcome ' + name;
//    return name;
   
   
// }  
// console.log(UserGreeting ());





    // Q2: 
        // create a function that takes in one number and doubles it

// function CheckNum(op, a, b){
//    if (op === 'a', '+', 'b'){
//       return true;
//    }
// }
// console.log(CheckNum('op', 8, '+', 8));


//     // Q3:
//         // create a function that takes in a number and triples it
// const str1 = 5;
// const str2 = 3;
// function triplesN(string){
//     return str1 * str2;
// }
// console.log(str1 * str2);

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

// sorted arr exersise.

            // function sorted(arr) {
 
            //     let newArray = arr;
                
            //     for(let j = 0; j < arr.length; j++){
            //     for (let i = 0; i < newArray.length; i++) {
            //     let currentNum = newArray[i];
            //     if(currentNum > newArray[i + 1]){
            //     newArray.splice(i, 1); 
            //     newArray.splice(i + 1, 0, currentNum); 
            //     }
            //     }
            //     } 
            //     return newArray;
            //    }
                
            //    console.log(sorted([0, 5, 1, 3, 2, 9, 7, 6, 4]));



            //    function missing(arr) {
            //     let newArray = [];
            //     let arrLength = arr.length
            //     for (let i = 0; i < arr.length*arrLength; i++) {
            //     let smallNum = Math.min(...arr);
            //     newArray.push(...arr.splice(arr.indexOf(smallNum), 1));
            //     }
            //     return newArray;
            //    }
              // console.log(missing([0, 5, 1, 3, 2, 9, 7, 6, 4]));


              //Higher order functions:
    // Definition:
    // A higher order function is a function that takes a function as an argument, or returns a function. 

// Filter 
    // returns a new array based on if each value is true or false
        // Syntax:
            // Simple: 
            //     arr.filter(element => element.length !== 4);
            // // Single line WITH return
            //     arr.filter(element => { return element.length !== 4});
            // // Multiple line
            //     arr.filter(element => { 
            //         return element.length !== 4
            //     });


        // example: remove all words that are 4 characters from an array or words

        // let words = ['thing', 'item', 'person', 'sun', 'gasp'];

        // let newArr = words.filter(word =>  word.length !== 4);

        // console.log(newArr);

        // let newArr = words.filter(word => {
        //     return word.length !== 4
        // });

        // console.log(newArr);

        // console.log(words);

        // examples:
            // given an array filter it to return all words that are 4 characters
// let arr = ['tree', 'yes', 'present', 'tired', 'none'];           
// let only4Letters = arr.filter( ele => ele.length === 4);
// console.log(only4Letters);


            // given an array filter it to return only the objects or arrays
// let arr = ['may', 'july', true, false, undefined, null, [1, 2, 3, 4], {name: 'car', wheels: '4'}];
// let newArr = arr.filter( element => {
//     return typeof element === 'object'
// });
// console.log(newArr);


            // given an array filter it to return words that only contain the letter a or e            
        
// let arr = ['tree', 'yes', 'sing', 'tired', 'cool', 'car'];           
// let newArr = arr.filter( ele =>
//     ele.indexOf('a') > -1||
//     ele.indexOf('e') > -1);
// //let newArr = arr.filter(ele => ele.indexOf('e') > -1);
// console.log(newArr);
            
// Reduce

// Map

// Sort

// examples:
            // // given an array filter it to return all words that are 4 characters
            //     let arr = ['tree', 'no', 'past', 'hungry'];
            //     let only4Letters = arr.filter( ele => ele.length === 4);
            //     // console.log(only4Letters);
            // // given an array filter it to return only the objects or arrays
            //     let arr1 = [true, false, undefined, null, [1, 2, 3, 4], {name: 'car', wheels:'4'}];
            //     let newArr = arr1.filter(ele => typeof ele === 'object');
            //     // console.log(newArr);
            // // given an array filter it to return words that only contain one of the following letters a, e, i, o, or u
            //     let arr2 = ['hey', 'how', 'are', 'you', 'a', 'by', 1, undefined, null, true]; 
            //     let newArr2 = arr2.filter(ele => 
            //         (typeof ele !== 'number' &&
            //         typeof ele !== 'object' && 
            //         typeof ele !== 'undefined' &&
            //         typeof ele !== 'boolean')
            //         && (ele.indexOf('a') > -1 ||
            //         ele.indexOf('e') > -1 ||
            //         ele.indexOf('i') > -1 ||
            //         ele.indexOf('o') > -1 ||
            //         ele.indexOf('u') > -1)
            //     );

                // console.log(newArr2);

            // Given the array on the following line. Filter all guests for only the ones over 21. 
        //     let guests = [
        //         {name: 'Vernon', age: 40},
        //         {name: 'Petunia', age: 44},
        //         {name: 'Harry', age: 11},
        //         {name: 'Dudley', age: 12}
        //     ]
        //     let newGuests = guests.filter(ele => { 
            
        //         return ele.age >= 21;
        //     });
        //    console.log(newGuests);
    

        

// Reduce

// Map

// Sort

// let newGuests = guests.filter(ele => { 
            
//     return ele.age >= 21;
// });
// console.log(newGuests);

// Reduce
    // returns a single value
    // for example you can:
        // reduce an array of numbers to one number (the total)
        // reduce multiple arrays into one array
        // reduce multiple strings into one string

    // examples:
        // given an array of numbers reduce it to the total (COMMON)
        //let nums = [2,3,4,5];
        //let totalVal = nums.reduce((total, num) => total + num);
        // console.log(totalVal);
    // reduce multiple arrays into one array ("flatten them") (VERY COMMON)
        //let arrs = [['thing1', 'thing2', 'thing3'],[1,2,3],[true, false, true]];
        //let oneArr = arrs.reduce((newArr, arr) => newArr.concat(arr));
        // console.log(oneArr);
    // reduce multiple strings into one string (NOT COMMON PEOPLE USE JOIN INSTEAD)
        //let strings = ['Hello', 'this', 'should', 'be', 'a', 'sentence', '.']
        //let sentence = strings.reduce((newString, currentString) => newString + ' ' + currentString);
        //console.log(sentence);
    // reduce an object to a single array (NOT COMMON & VERY COMPLEX)


// practice
    // Given an array of arrays reduce it to one array.
    // let arrs = [1, 2,[true, undefined], 30, 5, ['may', 'june', 15]];
    // let flatarr = arrs.reduce((newArr, arrs) => newArr.concat(arrs));
    // console.log(oneArr); 


    // Given an array of numbers reduce it to a total plus an additional 50.
    // let nums = [1, 2, 30, 5];
    // let totalVal = nums.reduce((total, num) => total + num, 50);
    // console.log(totalVal); 




    // Given the following list of objects reduce all populations to one.
    //     let countries = {
    //         USA: 300000000,
    //         UK: 66000000,
    //         India:1300000000
    //     }

    // let newCountries = countries.reduce((total, ele) => total + ele.newCountries, 0);

    // let nums = [1, 2, 30, 5];
    // let totalVal = nums.reduce((total, num) => total + num);
    // console.log(totalVal);





    // Given an array of numbers, add all the even ones
    // Given an array of test scores(numbers), get the average score using reduce



// Map

// Sort




// HOMEWORK:

// Reduce: Use reduce for the following questions
// level 0:
// Given an array of numbers, add all of them together
// level 1:
// Given an array of numbers, subtract them all from 100
// level 2:
// Given an array of numbers, add all the even ones
// level 3:
// Given an array of strings, reduce all elements to one string
// level 4:
// Given an array of test scores(numbers) use reduce to get the average score
// level 5:
// Given an array of arrays all only containing strings (given below), reduce all elements to one string
//let arrOfArrOfStr = [[['Peter'],['Piper']],[['Picked'],['A']],[['Pickled'], ['Pepper']]]

// Filter: Use filter for the following questions
// level 0:
// Given an array of strings remove any that are longer than 4 letters
// level 1:
// Given an array of numbers, remove any that are even
// level 2:
// Given an array of numbers, add all the odd ones
// level 3:
// Given an array of people (object given below), add all heights together
//let people = {
// name: 'Sharheight: '160cm',
// name: 'Ali', height: '180cm',
// name: 'Hara', height: '170cm',
// }
// // level 4:
// // Given an array of students with test scores filter out any outliers, any scores that are more or less than 20 points from 75.
// let people = {
// name: 'Paul', score: 40,
// name: 'Darrel', score: 61,
// name: 'Jay', score: 66,
// name: 'Alexi', score: 70,
// name: 'Niko', score: 81,
// name: 'Benjamin', score: 92,
// name: 'Xavier', scmania', height: '130cm',
// name: 'Jessica', ore: 110,
// }
// Output: [61, 66, 70, 81, 92]


// Sort
    // returns the original array but sorted 

    // Examples:
        // sort an array of strings alphabetically
        //let arrOfStr = ['dog', 'doe', 'cat', 'bat', 'rat'];
        // console.log(arrOfStr.sort());
// rOfNums = [0, 99, 1, 34, -144, -51, -13, 0, 1, 4,12312, 51212, -1424211];
//         let sortedNums = () => arrOfNums.sort();
//         // console.time('sortedNums');
//         // console.log(sortedNums(arrOfNums));
//         // console.timeEnd('sortedNums');

//     // sort an array of numbers by ACTUAL size (this is what we generally expect as humans)
//         let arrOfNums2 = [0, 99, 123, 51, 2, 3, -1, 01, 3, -3, -3000, -1000];
//         // console.log(arrOfNums2.sort((a, b) => a - b)); // (Potentially super inefficient)

//     // sort an array of objects (based on numeric Key-Value pairs)
//         let arrOfObjs = [
//             {name: 'Mike', age: 39},
//             {name: 'Sammi', age: 16},
//             {name: 'Shawn', age: 15},
//             {name: 'Sharice', age: 20},
//         ];
    // sort an array of numbers by first digit, then second, etc...
        //let ar

        // console.log(arrOfObjs.sort((person1, person2) => person1.age - person2.age))
        
    // sort an array of objects (based on non-numeric Key-Value pairs)
        // very complex, look-up if needed

// Map
// returns a new array populated with the function results

// examples: (Impossible to cover them all as there are so many possible scenareos)
    // // Duplicated all numeric values in an array
    //     let doubled = [2,4,6,8].map(n => n * 2);
    //     console.log(doubled);

    // // Remove last letter of all string in an array
    //     let strings4 = ['Hello', 'Goodbye', 'Goodmorning'];
    //     let shortStrings = strings4.map(str => str.slice(0, -1))
    //     console.log(shortStrings);

    // Reverse all strings in an array
        // let strings5 = ['Hello', 'Goodbye', 'Goodmorning'];
        // let reversedStrings = strings5.map(str => str.split('').reverse().join(''));
        // console.log(reversedStrings);
        // // before we had .map() this would look like:
        //     let reversedStringsOld = (param) => {
        //         let acc = [];

        //         for(let i = 0; i < param.length; i++){
        //             acc.push(param[i].split('').reverse().join(''));
        //         }
        //         return acc;
        //     }
        //     console.log(reversedStringsOld(strings5));
        
    // More complex syntatically
        // add one to every other element
        // let numbers = [-1, 4, 7, 0, -3, 6];
        // let newNumbers = numbers.map((num, index) => {
        //     if(index % 2){
        //         return num + 1
        //     } else {
        //         return num + 0;
        //     }    
        // })
        
        //console.log(newNumbers);
    



// declaring our variable array of numbers.
//let arr = ['50', '7', '-1', '8', '21', '80'];
//let console.log to check for the biggest number.
//console.log(Math.max('50', '7', '-1', '8', '21', '80'));    // Math.max to determine the biggest num in the array.   
                                           // this works when you console.log invoking the array 
                                           // directly inside the console.
                                           // that was the fastest way to get the largest number.

//  // we need to create a function to do this task, giving us the biggest number in the array.
// function bigNum(arr) {
//     let newNum = 0;                           // declaring a variable as our accumulator for the largest number. 
//     for(let i = 0; i < arr.length; i++){      // a for loop to iterate all elements in array.
//         let element = arr[i];                 // declare the variable element to define our logic.

//         // an if statment to compare the numbers.
//         if(element > -1){    // this works.   //! if element.indexof(element)or indexof('')! don't work.
//         element = Math.max(arr[i]);       // equalize the element to the method Math.max
//         newNum = element;                 // the accumulator will be equal to our element.
//         return newNum;                         // and we need to return the new number.

//        }//else if(element < -1){
//         //return element = Math.min(arr[i]);
        
//        //}
//     }

// }
// console.log(bigNum(arr));
    





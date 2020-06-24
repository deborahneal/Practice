//create a function that will take two strings and return them. 
// const str1 = '3';
// const str2 = 'Mai';
// function returnstr(string1,string2){
//     return str1;
//     return str2;
// }
//console.log(str1,str2);

//Q0. 1
//create a function that always greets us.
// function greeting(){
//     return 'Hello';
// }
// //console.log(greeting());

// // create a function that takes in a string
// // and gives us the first three letters.
// var strname = 'Deboraht';
// function ThreeLetters(strname){
//     return (strname.slice(0, 3));
// }
//console.log(strname.slice(0, 3));
    

// level 0
// Q0.1 create a function that always greets us ( Hello World Function )
// example:
// no input
// output: "Hello!"
 
// level 1:
// Q1.1 
// Create a function that takes in a string and returns the second character
 //const str = 'milk';
//function secCharacter(str){
     //return (str.slice(2, 3))
 //}
 //console.log(str.slice(2, 3));




// Q1.2
// Create a function that takes in an array and returns the second element
// var arrFur = ['couch','coffee table','rug','console table'];
// function arrsec(arrFur){
//     return (arrFur.slice(2, 3));
    
// }
//console.log(arrFur.slice(2, 3));





// Q1.3
// Create a function that takes in an array of birds and adds three birds
// the birds get added one to the front, one to the back, and one at the second index
 
// let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
// let bird1 = 'Quaker';
// let bird2 = 'Cockatoo';
// let bird3 = 'Kingfisher';
//let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
// let array = ['Bald Eagle', 'Robin', 'Blue Jay'];
// function BirdCount(array){
//    let array = (array.unshift('Quaker'));
//    return array
// }
// console.log(BirdCount(array));





// Q1.4
// Create a function that takes in a string and gives us the first three letters

// const strb = 'family';
// function Tletters(str){
//     return (strb.slice(0, 3));
//}
// console.log(strb.slice(0, 3));



 
// Q1.5
// Create a function that takes in an array and combines the elements into a string
// let arr = ['couch','coffee table','rug','console table'];
// function combElements(arr){
//     let allLetters = arr.join('');
//     return allLetters;
// }
// console.log(combElements(arr));




// level 2:
// Q2.1
// Create a function that takes in a string and returns the last character
// let str = 'benefit';
// function happy(str){
//     return str.slice(-1);
// }
// console.log(happy(str));



// Q2.2
// Create a function that takes in an array and returns the last element
//let arr = ['1', '2', '5'];

// function lastN(arr){
//     let element = arr.slice(-1)
//     return element;
// }
// console.log(lastN(arr));

 
// level 3:
// Q3.1
// Create a function that takes in a string and returns the central character
//  let string = "good-job";
//  function central(string){
//     let midChart = string.length;
//     return ([], string.length/2);
// }
// console.log(central(string));




// Q3.1
// Create a function that takes in an array and returns the central element
 
// level 4:
// Create a function that searches for all numbers inside strings in a given array and removes them 
//let arr = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
// output = ['B', 'RTX', 'Hello World', 'HWD']



// function removeNums(arr) {
//     let str = arr.join("-");
    
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
//     if (str[i] * 1 || str[i] === "0") {
//     null;
//     } else {
//     newString = newString + str[i];
//     }
//     }
//     let newArr = newString.split("-");
//     // let newValue = newArr[newArr.length - 1].replace(" ", "");
//     // newArr.splice(newArr.length - 1, 1, newValue);
//     return newArr;
//    }
//    console.log(removeNums(arr));








              // Question //

// Inline, Internal, External, which one is the best to use?
//  Can you explain more the 'id' concept.
// how to use URL with no big deal?






// higher order function practice
// Map

// level 0: using .map() do the following
    // double the values of any array of numbers
let arr = ['50', '7', '-1', '8', '21', '80'];          // declare a variable array number.
let doubled = arr.map(n => n * 2);                     // using .map method in the array with arrow function
                                                       // declaring the higherOrderFunction called doubled.
console.log(doubled);                                  // console.logging the function.

// level 1: using .map() do the following
    // grab the first letter of an array of strings
let colors1 = ['orange', 'beige', 'gold', 'black'];       // declare the variable colors array.
let firstLet = colors1.map(str => str.slice(-0, 1)); // or str[0];      // declaring the HOF using .slice on the strings.
console.log(firstLet);

    // grab the first element of an array of arrays
let array1 = [['orange','bananas'], ['beige'], ['gold'], ['black']];    // declare the variable of an array.
let firstEle = array1.map(array1 => array1[0]);                  // using HOF + .shift.
console.log(firstEle);                                                 // didn't work.

// level 2: using .map() do the following
    // grab the last letter of an array of strings
let colors = ['orange', 'beige', 'gold', 'black'];        // declaring variable color, an array.
let lastLet = colors.map(str => str.slice(0, -1));       // declaring the HOF using .slice on the strings.
console.log(lastLet);

    // grab the last letter of an array of arrays
let array2 = [['orange','bananas'], ['beige'], ['gold'], ['black']]; 
let lastEle = array2.map(element => element[element.length-1].slice( -1));                         // using HOF + .shift.
console.log(lastEle);                                

// level 3: using .map() do the following
    // create a new array of fullNames from an array of objects where ONE object looks similar to this:{first: 'Nic', last: 'Leask'};
let persons =  [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
let fullNames = persons.map(item => [item.first,item.last].join(" ") );
console.log(fullNames); 
    // Output: ['Ro Pili', 'Nic Leask'];

// level 4: using .map() do the following
    // create a new array of objects from an array of objects where ONE object looks similar to this:{first: 'Nic', last: 'Leask'};
    // Input:  [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
    // Output: [{first: 'Ro', last: 'Pili', fullName: 'Ro Pili', initials: 'RP'}, {first: 'Nic', last: 'Leask', fullName: 'Nic Leask', initials: 'NL'}];
let persons1 =  [{first: 'Ro', last: 'Pili'}, {first: 'Nic', last: 'Leask'}];
let fullNames1 = persons1.map(item => [item.first,item.last].join(" "));
console.log(fullNames1); 





















// // this is my first github repo
// // console.log() is use to print (AKA log) information to the Command Line Interface (CLI)
// // console.log("Hello World")                                                                                        
// // A variable is a symbol that stands for another value
// // var x = 2;
// // console.log(1+x);


// //  Javascript Data Types
// //  1. Strings
// //  var name = 'Deborah';
// //  Console.log('Hello, I am ' + name);

// //  var singleQuote = 'single-quote';
// //  var doubleQuoted = "double-quoted";                 
// //  var backsticks = `backsticks`; 
// //  backtics can be used for more complicated stuff

// //  var multiplePeople = `Deborah
// //  Joann
// //  Mika
// //  ` 
// //  Console.log(`My name is ${name}`)
// //  Console.log(multiple-People);


// // var str = "Hello"; 
// // var lengthOfstr = str.length;
// // var laststrChar = str[str.length-1];
// // console.log(laststrChar);

// // get a specific substring
// //      A substring is any small portion of a String    
// // create our fullName variable
// // var fullName = 'Deborah;Neal';

// var fullName = 'Deborah;Neal';
// // look for 'divider' indexedDB. AKA the index of ';' 
// var split = fullName.indexOf(';'); // a number 
// // Slice fullName into its part starting from index 0 until the of ';' AKA the divider
// var first = fullName.slice(0, divider);
// // slice fullName into its first part starting from the index ';' until the end ';'.
// // +1 is to account for inclusisiveness
// var last = fullName.slice(divider + 1, fullName.length)
// // show on the CLI
// console.log(first);
// console.log(last);


// // // character doesnt exist
// // // declare fullName and assign it a value
// // var fullName = 'Deborah Neal';
// // // look for the index of ';' 
// // var divider = fullName.indexOf(';');    // a number
// // // show the result
// // console.log(divider);    // Produces -1



// // Making a string lower case
// var meme = "tHiS is a meme";
// var smallMeme = meme.toLowerCase();
// var BigMeme = meme.toUpperCase();

// console.log(meme);
// console.log(smallMeme);
// console.log(BigMeme);

//Example with no caps
// var fullName = 'deboraht neal';
// var divider = fullName.indexOf(' ');
// var fixedFirst = 'D' + fullName.slice(1, divider);
// var fixedLast = 'N' + fullName.slice(divider + 2, fullName.length);
// var fixedName = fixedFirst + ' ' + fixedLast;
// console.log(fixedName);


// Replace () is a method which searches for a specific string and replaces it with a new one
// Example:
// Assign a variable to a string


// var str = "Hello World.";
// // looking for a specific character and replacing it
// // Setting our original variable to the new strig
// str = str.replace('.', '!');
// // Logging it to the console
// console.log(str);



//  var fullText1 ="MAN67584758;Manchester Picadilly"
//  var text1Divider = fullText1.indexOf(';')
//  var computerText = fullText1.slice(0, text1Divider);
//  var humanText = fullText1.slice(text1Divider + 1, fullText1.length);

//  console.log('Computer: ' + computerText + ', Human:' + humanText)

// var fullText2 ="GNF5767465;Greenfield"

// var text2Divider = fullText2.indexOf(';')
// var computerText = fullText2.slice(0, text2Divider);
// var humanText = fullText2.slice(text2Divider + 1, fullText2.length);

// console.log('Computer: ' + computerText + ', Human:' + humanText)

// var fullText3 ="LIV5hg65hd7374;Liverpool Lime Street"

// var txt3Divider = fullText3.indexOf(';')
// var computerText = fullText3.slice(0, txt3Divider);
// var humanText = fullText3.slice(txt3Divider + 1, fullText3.length);

// console.log('Computer: ' + computerText + ', Human:' + humanText);

// var fullText4 = "SYBf;Syalybridge"

// var txt4Divider = fullText4.indexOf(';')
// var computerText = fullText4.slice(0, txt4Divider);
// var humanText = fullText4.slice(txt4Divider + 1, fullText4.length);

// console.log('Computer: ' + computerText + ', Human:' + humanText);

// var fullText5 = "HUD5767ghtyfyr45;Huddersfield"

// var txt5Divider = fullText5.indexOf(';')
// var computerText = fullText5.slice(0, txt5Divider);
// var humanText = fullText5.slice(txt5Divider + 1, fullText5.length)

// console.log('Computer: ' + computerText + ', Human:' + humanText);





// function countSheeps(arrayOfSheep) {
//      var num = 0;
//     for (var i = 0; i < arrayOfSheep.length;i++){
//         var current = arrayOfSheep[i];
//         if (current === true){
//             num += 1;
//         }

//
//     }
    
//      return num;  

// //}

// //var array1 = [true,  true,  true,  false,true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
// //var array2 = [true,  true,  true,  false,true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, false, false];

// //console.log(countSheeps(array1))
// //console.log(countSheeps(array2))





// // function findSmallestInt(args) {
// //     return args.sort()[0];
// //    }
// //    console.log(findSmallestInt([9, 4, 6]));


// // function findSmallestInt(args) {
//     // var smallestNumber = args[0];
//     // // loop/iterate through each value inside the args array
     
//     // for (var i = 0; i < args.length; i++) {
//     // // 78 78 --> nothing 56 < 78 --> true so smallestNum is assigned the new value
//     // if (args[i] < smallestNumber) {
//     // smallestNumber = args[i];
//     // }
//     // }
//     // return smallestNumber;
//     // }
    // str = ('8 j 8   mBliB8g  imjB8B8  jl  B'),

    // function noSpace(x){
        
    //     var str;
    //    str = str.trim();

    // }     
       
    

    // Math function
        
      
    // function basicOp(o, v1, v2)
    // {
    //  if (o === '+') return v1 + v2;
    //  if (o === '-') return v1 - v2;
    //  if (o === '/') return v1 / v2;
    //  if (o === '*') return v1 * v2;
    // }




    //Q1:

    // Only using comments write a function that gets the first item in an array
    // 
    //  Q1 solution.

    //  Declare a function that will have an array of a few items.
    //  Using the index method , we going to count from 0 => zero to reach the
    //  the first item inside the array.
    //  And the first item in the array will be item index 0 since the indices of an 
    //  item start from 0 to the end of the length of the array.


    //Q2:

    // Given a string remove every other letter
    //
    // Q2 solution.

    // create a string of letters.
    // we will try to remove every other letter by counting and splitting 
    // on the index of every other letter until the last.







    
    //Q3:

    // Given a number minus 5 from it and divide it by 10

    // Q3 solution.

    // we can choose any random number.
    // and will do math operation to substract 5 from it and
    // after that divided it by 10.
    // that will give me 2 operations with 2 differents resuls,
    // but from the same number.
    S

     // microbit home work

//     led.setBrightness(222)
// for (let index = 0; index <= input.lightLevel(); index++) {
//     basic.showNumber(0)
//     if (true) {
//         for (let index2 = 0; index2 < 20; index2++) {
//             basic.pause(500)
//         }
//         basic.showIcon(IconNames.Heart)
//     }
// }

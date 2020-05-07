
//In the next line we going to create a loop up to less than 5 times. And then stop.
for (var index =  0; index < 5; index++) {
    // when we console logging we send the command out and expect the output on the CLI.
    console.log("Hi");
}
// Here we're doing the same process to get a loop count starting on 0, but adding +1 
for (var index = 0; index < 5; index++) {      // to the index to have one more count.
    //Again we console.log to execute the command.
    console.log(`Loop Count ${index + 1}`);
}
// The following line is a variable called array that contains a group of strings
// ['Zeus', 'Hades', 'Hermies', 'Poseidon'].
var arr = ['Zeus', 'Hades', 'Hermies', 'Poseidon'];
// This next line of code is a loop up to the array above, counting from the index 0 
// to the last index that is 3. Because index start from zero to (x)= last item. And the length of 
// an array starts from where the index begins until the last index number reference.
for (var index = 0; index < arr.length; index++){
    console.log(arr[index]);
}


var arr = ['Apples','Bananas', 'Oranges', 'Peach', 'Strawberry', 'Plum'];
console.log(arr);

var fruitNoVowels = [];
for (var i = 0; i < Fruit.length; i++){
    var currrentFruit = fruit[i].toLowerCase();
    var vowels = ['a','e','i','o','u'];
    for (var index = 0; index < vowels.length; index++){
        const currentVowel = vowels[index];
        if (currrentFruit.indexOf( currentVowel ) > -1){
            currrentFruit = currrentFruit.split(currentVowel).join(',')




        }
    }
    fruitVowels.push(currrentFruit);
}

console.log(fruitNoVowels);










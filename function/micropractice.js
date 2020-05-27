
                   // make a sprite variable.

let sprite = 0

                        // create a sprite.

let sprite = game.createSprite(2, 2)

                         // move the dot.

let sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
})

              // bounce .

let sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
let sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})

          // button handling.

let sprite = game.createSprite(2, 2)
input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
    } else {
    }
})
basic.forever(function () {
    sprite.move(1)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
})
                            // score and game over.

let sprite = game.createSprite(2, 2)
input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
basic.forever(function () {
    sprite.move(1)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
})






//  micro:bit homework.//

nput.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 1) {
        game.addScore(1)
        sprite.change(LedSpriteProperty.Direction, 2)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
basic.forever(function () {
    sprite.move(3)
    sprite.ifOnEdgeBounce()
    basic.pause(500)
})


//        ----------Snap the Dot Debbie's version.

// Declare a variable called sprite equal to game that we will create with led light on a microbit.
// and set it equal to 0 because the game will start at 0, and zero is equal nothing then null..

let sprite =  game.LedSprite = null;
// Next we will equalize sprite to game .createSprite on indexOf 1 to index.length of the led light.
sprite = game.createSprite(1, 1);
// After that we create a function that will run the game forever.
basic.forever(function () {
   // we will use the method .move to make the led light jump on 3 led lights at the time.
    sprite.move(3)
    // use .pause to give the led lights a pattern.
    basic.pause(250)
    // and using .ifOnEdgeBounce to mark our actual sprite and bouncing from one edge to the other.
    sprite.ifOnEdgeBounce()
})
console.log()

// Create a game with the input onButtonPressded that create a function
// takes Button A and its parameter , and at button A game will start playing for the player to mark
// scores. That also means that button B will end the game or turn the micro:bit off.
input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {  // setting a conditional statement that if sprite abstractly
        game.addScore(1)                         // equal to num 2. Add score + 1.
    } else {                                     // if else game is over.
        game.gameOver()
    }
})
console.log()

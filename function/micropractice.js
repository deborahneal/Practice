
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

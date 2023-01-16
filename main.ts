input.onButtonPressed(Button.A, function () {
    Personaje_abajo.change(LedSpriteProperty.Y, -1)
    Personaje_arriba.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    Personaje_abajo.change(LedSpriteProperty.Y, 1)
    Personaje_arriba.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Personaje_arriba.change(LedSpriteProperty.X, -1)
    Personaje_arriba.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    Personaje_arriba.change(LedSpriteProperty.X, 1)
    Personaje_arriba.change(LedSpriteProperty.Y, -1)
})
let Personaje_arriba: game.LedSprite = null
let Personaje_abajo: game.LedSprite = null
Personaje_abajo = game.createSprite(1, 4)
Personaje_arriba = game.createSprite(1, 3)
let objeto = game.createSprite(4, 4)
basic.forever(function () {
    objeto.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (objeto.get(LedSpriteProperty.X) == 0) {
        objeto.change(LedSpriteProperty.X, 4)
    }
    if (objeto.isTouching(Personaje_abajo)) {
        game.gameOver()
    }
})

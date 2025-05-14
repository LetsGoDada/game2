namespace SpriteKind {
    export const Gegner = SpriteKind.create()
    export const Baer = SpriteKind.create()
    export const Hintergrund = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`Ani1`,
    100,
    false
    )
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.bobbingLeft),
    5000,
    false
    )
    if (true) {
        timer.after(500, function () {
            scene.setBackgroundImage(assets.image`H2`)
        })
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Hallo Wie Kann ich dir Helfen")
    game.splash("Ich Würde gerne Ein Bisschen Fisch haben zum essen")
    game.splash("Dann komm mit")
    game.splash("Drücke a damit sich der Bär bewegt")
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(assets.song`melodie`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`H1`)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setPosition(80, 40)
mySprite = sprites.create(assets.image`Bär`, SpriteKind.Baer)
mySprite.setPosition(150, 68)
mySprite2 = sprites.create(assets.image`Player`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2, 100, 100)

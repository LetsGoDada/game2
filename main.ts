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
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(assets.song`melodie`), music.PlaybackMode.LoopingInBackground)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setPosition(80, 40)
let mySprite3 = sprites.create(assets.image`Hintergrund`, SpriteKind.Hintergrund)
scaling.scaleByPixels(mySprite3, 121, ScaleDirection.Horizontally, ScaleAnchor.Middle, true)
scaling.scaleByPixels(mySprite3, 30, ScaleDirection.Vertically, ScaleAnchor.Middle, true)
mySprite = sprites.create(assets.image`Bär`, SpriteKind.Baer)
mySprite.setPosition(150, 68)
mySprite2 = sprites.create(assets.image`Player`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2, 100, 100)

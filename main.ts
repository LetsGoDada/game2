namespace SpriteKind {
    export const Gegner = SpriteKind.create()
    export const Baer = SpriteKind.create()
    export const Hintergrund = SpriteKind.create()
}
music.play(music.createSong(assets.song`melodie`), music.PlaybackMode.LoopingInBackground)
let mySprite3 = sprites.create(assets.image`Hintergrund`, SpriteKind.Hintergrund)
scaling.scaleByPixels(mySprite3, 121, ScaleDirection.Horizontally, ScaleAnchor.Middle, true)
scaling.scaleByPixels(mySprite3, 50, ScaleDirection.Vertically, ScaleAnchor.Middle, true)
let mySprite = sprites.create(assets.image`Bär`, SpriteKind.Baer)
mySprite.setPosition(150, 68)
let mySprite2 = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 100)

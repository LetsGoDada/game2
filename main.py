@namespace
class SpriteKind:
    Gegner = SpriteKind.create()
    Baer = SpriteKind.create()
    Hintergrund = SpriteKind.create()

def on_a_pressed():
    animation.run_image_animation(mySprite2,
        assets.animation("""
            Ani1
            """),
        100,
        False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite2: Sprite = None
music.play(music.create_song(assets.song("""
        melodie
        """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
mySprite3 = sprites.create(assets.image("""
        Hintergrund
        """),
    SpriteKind.Hintergrund)
scaling.scale_by_pixels(mySprite3,
    121,
    ScaleDirection.HORIZONTALLY,
    ScaleAnchor.MIDDLE,
    True)
scaling.scale_by_pixels(mySprite3,
    50,
    ScaleDirection.VERTICALLY,
    ScaleAnchor.MIDDLE,
    True)
mySprite = sprites.create(assets.image("""
    Bär
    """), SpriteKind.Baer)
mySprite.set_position(150, 68)
mySprite2 = sprites.create(assets.image("""
    Player
    """), SpriteKind.player)
controller.move_sprite(mySprite2, 100, 100)
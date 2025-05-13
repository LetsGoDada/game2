@namespace
class SpriteKind:
    Gegner = SpriteKind.create()
mySprite = sprites.create(assets.image("""
    Bär
    """), SpriteKind.Gegner)
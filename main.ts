scene.setBackgroundColor(12)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . f . d d d . f . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . 6 e e e 6 . . . . . . 
    . . . . . 6 e e e 6 . . . . . . 
    . . . . . 6 e e e 6 . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`niveau1`)

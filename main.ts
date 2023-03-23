radio.setGroup(1)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 50 && input.rotation(Rotation.Pitch) > -50) {
        radio.sendValue("name", Math.round(Math.map(input.rotation(Rotation.Roll), -90, 90, 0, 100)))
    }
})

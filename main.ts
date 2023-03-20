input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . # . # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . # # #
        # # # # #
        # # # # #
        # . # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . # . # .
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . # . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("G B A G C5 B A B ", 120)
})
basic.forever(function () {
	
})

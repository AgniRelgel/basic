input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.temperature())
})
basic.showIcon(IconNames.Target)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

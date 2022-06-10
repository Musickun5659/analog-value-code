let pressurevalue = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pressurevalue))
})
basic.forever(function () {
    pressurevalue = pins.analogReadPin(AnalogPin.P0)
})

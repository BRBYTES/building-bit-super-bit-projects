radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft) == true) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("left")
    } else if (input.isGesture(Gesture.TiltRight) == true) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("right")
    } else if (input.isGesture(Gesture.LogoUp) == true) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("backward")
    } else if (input.isGesture(Gesture.LogoDown) == true) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("forward")
    } else {
        basic.showIcon(IconNames.No)
    }
})

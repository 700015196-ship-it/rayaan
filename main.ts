let a = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 3)
    if (a == 1) {
        basic.showNumber(1)
    } else if (a == 2) {
        basic.showNumber(2)
    } else if (a == 3) {
        basic.showNumber(3)
    }
})
basic.forever(function () {
	
})

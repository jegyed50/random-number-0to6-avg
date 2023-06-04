input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 99; index++) {
        rnd = randint(0, 6)
        sum = sum + rnd
        serial.writeValue("rnd", rnd)
    }
    avg = sum / 100
    basic.showNumber(avg)
    serial.writeValue("avg", avg)
})
let avg = 0
let rnd = 0
let sum = 0
sum = 0
basic.forever(function () {
	
})

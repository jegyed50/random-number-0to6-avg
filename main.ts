// Log with serial vrite value
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
// Log to SD card with DataLogger
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9999; index++) {
        rnd = randint(0, 6)
        sum = sum + rnd
        datalogger.log(
        datalogger.createCV("index", index),
        datalogger.createCV("rnd", rnd),
        datalogger.createCV("avg", 0)
        )
    }
    avg = sum / 10000
    basic.showNumber(avg)
    datalogger.log(
    datalogger.createCV("index", 0),
    datalogger.createCV("rnd", 0),
    datalogger.createCV("avg", avg)
    )
})
let avg = 0
let rnd = 0
let sum = 0
sum = 0
datalogger.setColumnTitles(
"index",
"rnd",
"avg"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
basic.forever(function () {
	
})

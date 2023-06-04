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
    led.plot(0, 0)
    for (let index = 0; index <= rndcount - 1; index++) {
        rnd = randint(0, 6)
        sum = sum + rnd
        runningavg = sum / (index + 1)
        datalogger.log(
        datalogger.createCV("index", index),
        datalogger.createCV("rnd", rnd),
        datalogger.createCV("running-avg", runningavg)
        )
    }
    avg = sum / (rndcount - 1)
    basic.showNumber(avg)
    datalogger.log(
    datalogger.createCV("index", 0),
    datalogger.createCV("rnd", 0),
    datalogger.createCV("avg", avg)
    )
})
let runningavg = 0
let avg = 0
let rnd = 0
let rndcount = 0
let sum = 0
sum = 0
rndcount = 5000
datalogger.setColumnTitles(
"index",
"rnd",
"running-avg",
"avg"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
basic.forever(function () {
	
})

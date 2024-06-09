input.onButtonPressed(Button.A, function () {
    runOrNot = false
})
input.onButtonPressed(Button.B, function () {
    runOrNot = true
})
let randomName = ""
let runOrNot = false
let names = ["Michael", "Leo", "Jelena"]
runOrNot = true
let realFirstChart = ""
basic.forever(function () {
    while (runOrNot) {
        randomName = names._pickRandom()
        realFirstChart = randomName.charAt(0)
        basic.showString(realFirstChart)
        control.waitMicros(500)
    }
})

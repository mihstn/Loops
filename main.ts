input.onButtonPressed(Button.A, function () {
    runOrNot = false
})
input.onButtonPressed(Button.B, function () {
    runOrNot = true
    finalIndex = names.length
    for (let index = 0; index <= finalIndex - 1; index++) {
        basic.showString("" + (names[index]))
        control.waitMicros(500)
    }
})
let randomName = ""
let finalIndex = 0
let runOrNot = false
let names: string[] = []
names = ["Michael", "Leo", "Jelena"]
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

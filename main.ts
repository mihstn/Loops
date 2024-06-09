input.onButtonPressed(Button.A, function () {
    firstChar += 1
})
let randomName = ""
let myVar1 = ["Michael", "Leo", "Mindaugas"]
let runOrNot = true
let firstChar: number = ""
basic.forever(function () {
    while (runOrNot) {
        randomName = myVar1._pickRandom()
        firstChar = randomName.charAt(0)
        basic.showString("" + (firstChar))
        control.waitMicros(1000)
    }
})

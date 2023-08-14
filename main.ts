radio.onReceivedNumber(function (receivedNumber) {
	
})
function links () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, speed)
}
function stop () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 0)
}
function dialiac () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
function rechts () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, speed)
}
function diareac2 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 0)
}
function diarevo () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function rechtsom () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
function dialivo () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 0)
}
function vooruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, speed)
}
function achteruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, speed)
}
function linksom () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
let speed = 0
radio.setGroup(1)
let tijd = 300
speed = 225
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            vooruit()
            basic.pause(tijd)
            stop()
            basic.pause(500)
            rechts()
            basic.pause(tijd)
            stop()
            basic.pause(500)
            achteruit()
            basic.pause(tijd)
            stop()
            basic.pause(500)
            links()
            basic.pause(tijd)
            stop()
            basic.pause(500)
        }
    }
})

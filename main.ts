basic.forever(function () {
    let índice = 0
    led.plotBrightness(2, randint(0, 255), índice)
    basic.pause(1)
    basic.pause(100)
    basic.pause(100)
    led.unplot(1, 0)
    led.unplot(2, 2)
    led.plot(2, 2)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(4, 4)
})

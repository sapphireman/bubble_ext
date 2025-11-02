controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
let bubblesRemaining = 100
bubble.createBoard()
bubble.load_bubble()

music.setVolume(77)
function sender()
{
let start: number;
radio.setGroup(69);

Sensors.SetLightLevel()
Sensors.OnLightDrop(function () {
start = input.runningTime();
radio.sendNumber(1);

})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
Sensors.SetLightLevel();
})
}

function receiver() {
let start: number;
    radio.onReceivedNumber(function (receiveNumber: number) {
start = input.runningTime();

    })
let finishes: number[];
Sensors.OnLightDrop(function(){
finishes.push(input.runningTime());
    })

}
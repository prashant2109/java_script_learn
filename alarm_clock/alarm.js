console.log('Set Alarm');
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);
var audio = new Audio('https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3')

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    // console.log('Alarm Set');
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`${alarmDate}`);
    now = new Date();
    console.log(now);
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }

}

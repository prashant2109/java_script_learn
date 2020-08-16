console.log('This is tut54');
const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Set Alarm ${alarmDate}`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    if (timeToAlarm>=0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm)
    }

};
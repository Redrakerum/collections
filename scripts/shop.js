const AM_PM_TIME = document.getElementById('time-AP');
const MIL_TIME = document.getElementById('time-mill');

const AM_PM_HOUR = document.getElementById('hour-AP');
const AM_PM_MINUTES = document.getElementById('minutes-AP');
const AM_PM_SECONDS = document.getElementById('seconds-AP');
const AM_PM_PERIOD = document.getElementById('period-AP');

const MIL_HOUR = document.getElementById('hour');
const MIL_MINUTES = document.getElementById('minutes');
const MIL_SECONDS = document.getElementById('seconds');

const SWITCHER_BUTTON = document.getElementById('switch-button');

function switcher() {
    let temp = AM_PM_TIME.style.display;
    if (temp === "none") {
        AM_PM_TIME.style.display = "block";
        MIL_TIME.style.display = "none";
    } else {
        AM_PM_TIME.style.display = "none";
        MIL_TIME.style.display = "block";
    }
}

function updateClock() {
    let temp = new Date();
    let temp_hours = temp.getHours();
    let temp_minutes = temp.getMinutes();
    let temp_seconds = temp.getSeconds();


    AM_PM_MINUTES.innerText = temp_minutes;
    MIL_MINUTES.innerText = temp_minutes;
    AM_PM_SECONDS.innerText = temp_seconds;
    MIL_SECONDS.innerText = temp_seconds;
    MIL_HOUR.innerText = temp_hours;


    if (temp_hours >= 12) {
        AM_PM_PERIOD.innerText = "PM"
    } else {
        AM_PM_PERIOD.innerText = "AM"
    }

    if (temp_hours > 12) {
        AM_PM_HOUR.innerText = temp_hours - 12;
    }

}

function initClock() {
    updateClock();
    window.setInterval('updateClock()', 1);
}


AM_PM_TIME.onload(initClock());
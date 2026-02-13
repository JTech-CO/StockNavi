// clock.js - Real-time Clock Function

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ko-KR', { hour12: false });
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

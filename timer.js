
document.addEventListener('DOMContentLoaded', () => {
    let timerElement = document.querySelector('.time');
    let startTime = new Date().getTime();

    setInterval(() => {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
});

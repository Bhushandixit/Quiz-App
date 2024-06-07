function submitForm(event) {
    event.preventDefault(); 
    const form = event.target;
    const name = form.name.value.trim();

    if (name) {
        
        document.querySelector('.welcome_text').style.display = 'none';
        document.getElementById('header_tag').style.display = 'block';
        document.getElementById('but').style.display = 'block';
        document.getElementById('header_no').style.display = 'block';
        document.getElementById('anothertag').style.display = 'block';
        document.getElementById('time_tag').style.display = 'block';
        document.getElementById('correctClass').style.display = 'block';
        document.querySelector('.quiz_body').style.display = 'block';
        
        
        startTimer();
    } else {
        alert('Please enter your full name.');
    }
}


function startTimer() {
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
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.welcome_form');
    form.addEventListener('submit', submitForm);
});

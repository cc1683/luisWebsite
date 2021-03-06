const countdown = document.querySelector('.ls-counter');

const lauchDate = new Date('September 15, 2019 12:00:00').getTime();

const int = setInterval(function(){
    const current = new Date().getTime();

    const distance = lauchDate - current;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Mins</span></div>
        <div>${secs}<span>Secs</span></div>
    `;

    if(distance < 0) {
        clearInterval(int);

        countdown.style.color='#17a2b8';
        countdown.innerHTML = 'Launched';
    }
}, 1000);
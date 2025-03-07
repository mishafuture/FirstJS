function timer() {
    // timer

    const deadline = '2025-02.1'
    setTimer('.timer', deadline);

    function getTimeRemaining(endTime) {
        const difTime = Date.parse(endTime) - Date.now();
        let days = 0, hours = 0, minutes = 0, seconds = 0;

        if (difTime > 0) {
            days = Math.floor(difTime / (1000 * 60 * 60 * 24));
            hours = Math.floor(difTime / (1000 * 60 * 60) % 24);
            minutes = Math.floor(difTime / (1000 * 60) % 60);
            seconds = Math.floor(difTime / 1000 % 60);
        }

        return {difTime, days, hours, minutes, seconds};
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        }

        return num;
    }

    function setTimer(selector, deadline) {
        const timer = document.querySelector(selector);

        let days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerId = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.difTime <= 0)
                clearInterval(timerId);
        }
    }
}

export default timer;
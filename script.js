function updateCountdown() {
    const countdownDate = new Date("April 26, 2025").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + " Days";
    document.getElementById("hours").innerText = hours + " Hours";
    document.getElementById("minutes").innerText = minutes + " Minutes";
    document.getElementById("seconds").innerText = seconds + " Seconds";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);

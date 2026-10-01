function openLetter() {
    const welcome = document.getElementById("welcome");
    const main = document.getElementById("main");

    welcome.style.transition = "opacity 1s ease";
    welcome.style.opacity = "0";

    setTimeout(() => {
        welcome.style.display = "none";
        main.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1000);
}


/* COUNTDOWN */

const birthday = new Date("October 24, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = birthday - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
            "♡ HAPPY BIRTHDAY, SCARA ♡";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

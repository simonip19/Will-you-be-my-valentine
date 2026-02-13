const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// When user clicks Yes
yesBtn.addEventListener("click", () => {
    message.textContent = "BEST HUSBAND EVER 💖✨";
    message.classList.remove("hidden");
    message.classList.add("beating");
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // Confetti burst
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
});

// When user clicks No
function moveNoButton() {
    message.textContent = "Oh no! 💔 But that’s okay 😊";
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Desktop mouse hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent default tap
    moveNoButton();
});

// Also move on click just in case
noBtn.addEventListener("click", (e) => {
    moveNoButton();
});
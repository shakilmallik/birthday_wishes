// script.js
document.addEventListener('DOMContentLoaded', function () {
    const balloons = document.querySelectorAll('.balloon');
    const audio = document.getElementById('birthday-audio');

    balloons.forEach(balloon => {
        balloon.addEventListener('click', function () {
            audio.play();
            balloon.style.animation = "none";  // Stop the balloon's float animation
            balloon.style.transition = "transform 0.5s ease";
            balloon.style.transform = "scale(0)";  // Shrink the balloon
            setTimeout(() => {
                balloon.style.display = "none";  // Hide the balloon after the animation
            }, 500);
        });
    });
});

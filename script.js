document.addEventListener("DOMContentLoaded", function () {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    
    // Create multiple shooting stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.animationDuration = `${Math.random() * 4 + 2}s`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        shootingStarsContainer.appendChild(star);
    }
});

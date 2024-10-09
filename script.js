document.addEventListener("DOMContentLoaded", function () {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.animationDuration = `${Math.random() * 3 + 3}s`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * -20}%`;
        shootingStarsContainer.appendChild(star);
    }
});

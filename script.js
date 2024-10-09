document.addEventListener("DOMContentLoaded", function () {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    
    // Create multiple shooting stars
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.animationDuration = `${Math.random() * 4 + 3}s`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * -20}%`;
        shootingStarsContainer.appendChild(star);
    }
    
    // Add hover light aura effect around the cursor
    document.body.addEventListener("mousemove", function (e) {
        const aura = document.createElement("div");
        aura.className = "light-aura";
        aura.style.top = e.clientY + "px";
        aura.style.left = e.clientX + "px";
        document.body.appendChild(aura);
        setTimeout(() => {
            document.body.removeChild(aura);
        }, 500);
    });
});

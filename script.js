document.addEventListener("DOMContentLoaded", function () {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const bgOptions = document.querySelectorAll('.bg-option');

    // Create multiple shooting stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.animationDuration = `${Math.random() * 4 + 2}s`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        shootingStarsContainer.appendChild(star);
    }

    // Open Sidebar
    openSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = "250px";
    });

    // Close Sidebar
    closeSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = "0";
    });

    // Close Sidebar if clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
            sidebar.style.width = "0";
        }
    });

    // Change Background
    bgOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const bg = this.getAttribute('data-bg');
            document.body.style.backgroundImage = `url(${bg})`;
            sidebar.style.width = "0"; // Automatically close sidebar after selection
        });
    });
});

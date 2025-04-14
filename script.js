document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to switch sections
    function showSection(targetId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active-section');
            // section.style.display = 'none'; // Alternative way to hide
        });

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            // targetSection.style.display = 'block'; // Alternative way to show
        }

        // Update active state for nav links
        navLinks.forEach(link => {
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor link behavior
            const targetId = link.dataset.target; // Get target section id from data attribute
            showSection(targetId);

            // Optional: Update URL hash without page jump
            // history.pushState(null, null, `#${targetId}`);
        });
    });

    // Optional: Show section based on URL hash on page load
    const currentHash = window.location.hash.substring(1);
    if (currentHash) {
        showSection(currentHash);
    } else {
        // Show the default section ('posts') if no hash
        showSection('posts');
    }
});

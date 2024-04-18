// Hamburger bar for tablet and mobile view
document.getElementById('menuToggle').addEventListener('click', function() {
    // Toggle the 'show' class on the navigation menu
    document.querySelector('.navigation ul').classList.toggle('show');
});
// Horizontal nav bar for desktop


document.addEventListener('DOMContentLoaded', function() {
    function adjustDetails() {
        const detailsElements = document.querySelectorAll('details');
        const isDesktop = window.innerWidth >= 992;

        detailsElements.forEach(details => {
            if (isDesktop) {
                details.setAttribute('open', true);
            } else {
                details.removeAttribute('open');
            }
        });
    }

    // Initial adjustment when the page loads
    adjustDetails();

    // Adjust when the window is resized
    window.addEventListener('resize', adjustDetails);
});
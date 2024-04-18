// Hamburger bar for tablet and mobile view
document.getElementById('menuToggle').addEventListener('click', function() {
    // Toggle the 'show' class on the navigation menu
    document.querySelector('.navigation ul').classList.toggle('show');
});
// Horizontal nav bar for desktop


function toggleDetailsBasedOnScreenWidth() {
    const detailsElements = document.querySelectorAll('details');
    const desktopBreakpoint = 992; // Define your breakpoint for desktop view

    if (window.innerWidth >= desktopBreakpoint) {
        // For desktop view, keep all details elements open and disable interaction
        detailsElements.forEach(details => {
            details.setAttribute('open', 'open');
            details.removeEventListener('click', handleDetailsToggle);
            details.style.pointerEvents = 'none';
        });
    } else {
        // For mobile and tablet view, allow collapsible functionality
        detailsElements.forEach(details => {
            details.removeAttribute('open');
            details.addEventListener('click', handleDetailsToggle);
            details.style.pointerEvents = 'auto';
        });
    }
}

// Event listener function for handling toggle behavior
function handleDetailsToggle(event) {
    const details = event.target;
}

// Call the function on page load and window resize
window.addEventListener('load', toggleDetailsBasedOnScreenWidth);
window.addEventListener('resize', toggleDetailsBasedOnScreenWidth);
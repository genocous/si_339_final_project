// Hamburger bar for tablet and mobile view
document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('.navigation ul').classList.toggle('show');
});

// Getting rid of toggle and click features when in desktop view
function toggleDetailsBasedOnScreenWidth() {
    const detailsElements = document.querySelectorAll('details');
    const desktopBreakpoint = 992; // Breakpoint for desktop view

    if (window.innerWidth >= desktopBreakpoint) {
        // For desktop view, keep all details elements open and disable interaction except for links
        detailsElements.forEach(details => {
            details.open = true;
            details.querySelectorAll('a').forEach(link => {
                link.style.pointerEvents = 'auto'; // Allow clicking for links
            });
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


// Form 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Shows success message
        successMessage.classList.remove('hidden');
        form.reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
    });
});
// Hamburger bar for tablet and mobile view
document.getElementById('menuToggle').addEventListener('click', function() {
    // Toggle the 'show' class on the navigation menu
    document.querySelector('.navigation ul').classList.toggle('show');
});
// Horizontal nav bar for desktop


document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust the behavior of details elements based on screen width
    function adjustDetails() {
        const detailsElements = document.querySelectorAll('details');
        const isDesktop = window.innerWidth >= 992; // Define the breakpoint for desktop view

        detailsElements.forEach(details => {
            if (isDesktop) {
                // Set the open attribute to keep the details open
                details.setAttribute('open', true);
                
                // Disable the ability to toggle the open state in desktop view
                details.querySelector('summary').addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent the toggle behavior
                });
            } else {
                // Enable the default toggle behavior in mobile view
                details.removeAttribute('open');
                
                // Remove the event listener in mobile view
                details.querySelector('summary').removeEventListener('click', preventToggle);
            }
        });
    }

    // Function to prevent toggling of details elements
    function preventToggle(event) {
        event.preventDefault();
    }

    // Initial adjustment when the page loads
    adjustDetails();

    // Adjust when the window is resized
    window.addEventListener('resize', adjustDetails);
});
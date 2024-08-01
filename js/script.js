// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the height of the header element
    const headerHeight = document.querySelector('header').offsetHeight;

    // Select all anchor links that have href attributes starting with "#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Add a click event listener to each of these anchor links
        anchor.addEventListener('click', function(event) {
            // Prevent the default anchor link behavior
            event.preventDefault();
            
            // Get the target ID from the href attribute of the clicked anchor link
            const targetId = this.getAttribute('href').substring(1);
            // Find the element with the target ID
            const targetElement = document.getElementById(targetId);

            // Smoothly scroll to the target element, adjusting for the height of the header
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});

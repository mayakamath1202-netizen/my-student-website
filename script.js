$(document).ready(function() {
    
    // --- 1. jQuery Interactivity (Targeting resume.html) ---
    // This feature adds a toggle button for the Professional Summary section.
    
    // Check if the 'summary' section exists (to avoid errors on index.html/biodata.html)
    if ($('#summary').length) {
        // Add a button to the summary section
        $('#summary h2').after('<button id="toggle-summary" class="btn">Hide Details</button>');
        
        // Target the <p> tag inside the summary section
        const summaryText = $('#summary p');
        
        // Click handler for the button
        $('#toggle-summary').click(function() {
            // Slide up or down the paragraph content
            summaryText.slideToggle(400, function() {
                 // Change button text based on visibility
                if (summaryText.is(':visible')) {
                    $('#toggle-summary').text('Hide Details');
                } else {
                    $('#toggle-summary').text('Show Details');
                }
            });
        });
    }

    // --- 2. Pure JavaScript Feature (Highlighting the active page) ---
    const navLinks = document.querySelectorAll('nav a');
    // Get the current file name (e.g., 'resume.html' or 'index.html')
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; // Fallback to index.html

    navLinks.forEach(link => {
        // Check if the link's href matches the current file name
        if (link.getAttribute('href') === currentPath) {
            link.style.backgroundColor = '#2c3e50'; 
            link.style.fontWeight = 'bold';
            link.style.borderRadius = '5px';
        }
    });

});
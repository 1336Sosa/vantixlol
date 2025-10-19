document.addEventListener('DOMContentLoaded', function() {
    // Get all tab headers and panes
    const tabHeaders = document.querySelectorAll('.tab-header > div');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Add click event listeners to tab headers
    tabHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            // Remove active class from all headers and panes
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked header and corresponding pane
            header.classList.add('active');
            const tabId = header.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Check for URL hash on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tabToActivate = document.querySelector(`.tab-header > div[data-tab="${hash}"]`);
        if (tabToActivate) {
            tabToActivate.click();
        }
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Function to handle download button clicks (can be customized further)
function handleDownload(button, url) {
    // Add loading state
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
    button.disabled = true;
    
    // Simulate download (replace with actual download logic)
    setTimeout(() => {
        if (url) {
            window.location.href = url;
        } else {
            alert('Download link not configured. Please contact support.');
        }
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 1000);
}

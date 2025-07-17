// Navigation functionality
let currentPage = 'home';

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    
    currentPage = pageId;
    
    // Initialize page-specific content
    if (pageId === 'calendar') {
        generateCalendar();
    } else if (pageId === 'recipes') {
        generateRecipeLibrary();
    }
}

// Initialize navigation event listeners
function initializeNavigation() {
    // Set up navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });
}

// Export functions for global access
window.showPage = showPage;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showPage, initializeNavigation };
}
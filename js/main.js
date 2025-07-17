// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize modals
    initializeModals();
    
    // Initialize shopping lists
    initializeShoppingLists();
    
    // Initialize filters when recipes page is accessed
    setTimeout(() => {
        if (document.getElementById('recipe-search')) {
            initializeFilters();
        }
    }, 100);
    
    // Initialize calendar on first load if starting on calendar page
    if (currentPage === 'calendar') {
        generateCalendar();
    }
    
    console.log('Vegan Family Menu application initialized successfully!');
});

// Utility functions
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatTime(minutes) {
    if (minutes < 60) {
        return `${minutes} min`;
    } else {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins > 0 ? mins + 'm' : ''}`;
    }
}

// Make utility functions globally available
window.capitalizeWords = capitalizeWords;
window.formatTime = formatTime;
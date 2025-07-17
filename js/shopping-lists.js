// Shopping list functionality
function initializeShoppingLists() {
    const listTabs = document.querySelectorAll('.list-tab');
    const shoppingLists = document.querySelectorAll('.shopping-list');
    
    listTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and lists
            listTabs.forEach(t => t.classList.remove('active'));
            shoppingLists.forEach(list => list.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding list
            tab.classList.add('active');
            const listType = tab.getAttribute('data-list');
            const targetList = document.getElementById(`${listType}-list`);
            if (targetList) {
                targetList.classList.add('active');
            }
        });
    });
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeShoppingLists };
}
// Calendar generation
function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';
    
    for (let day = 1; day <= 30; day++) {
        const dayData = getDayData(day);
        const dayCard = createDayCard(day, dayData);
        calendarGrid.appendChild(dayCard);
    }
}

function getDayData(day) {
    const menuDay = menuCalendar.find(menu => menu.days.includes(day));
    if (!menuDay) return null;
    
    return {
        breakfast: recipeDatabase[menuDay.breakfast],
        lunch: recipeDatabase[menuDay.lunch],
        dinner: recipeDatabase[menuDay.dinner]
    };
}

function createDayCard(day, dayData) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.onclick = () => showDayDetail(day, dayData);
    
    // Get nutrition badges for the day
    const badges = getDayBadges(dayData);
    
    card.innerHTML = `
        <div class="day-header">
            <div class="day-number">Day ${day}</div>
            <div class="day-badges">
                ${badges.map(badge => `<div class="badge ${badge}"></div>`).join('')}
            </div>
        </div>
        <div class="day-meals">
            ${createMealItem('breakfast', dayData.breakfast)}
            ${createMealItem('lunch', dayData.lunch)}
            ${createMealItem('dinner', dayData.dinner)}
        </div>
    `;
    
    return card;
}

function getDayBadges(dayData) {
    const badges = new Set();
    
    ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
        const recipe = dayData[mealType];
        if (recipe) {
            if (recipe.nutrition.isIronRich) badges.add('iron');
            if (recipe.nutrition.isProteinRich) badges.add('protein');
            if (recipe.nutrition.isB12Fortified) badges.add('b12');
            if (recipe.nutrition.isKidFriendly) badges.add('kid-friendly');
        }
    });
    
    return Array.from(badges);
}

function createMealItem(mealType, recipe) {
    if (!recipe) return '';
    
    const mealIcons = {
        breakfast: 'fa-sun',
        lunch: 'fa-cloud-sun', 
        dinner: 'fa-moon'
    };
    
    return `
        <div class="meal-item" onclick="event.stopPropagation(); showRecipeDetail('${recipe.id}')">
            <div class="meal-icon ${mealType}">
                <i class="fas ${mealIcons[mealType]}"></i>
            </div>
            <div class="meal-info">
                <div class="meal-name">${recipe.name}</div>
                <div class="meal-prep-time">${recipe.prepTime + (recipe.cookTime || 0)} min</div>
            </div>
        </div>
    `;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generateCalendar, 
        getDayData, 
        createDayCard, 
        getDayBadges, 
        createMealItem 
    };
}
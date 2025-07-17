// Modal functionality with proper z-index management
function showRecipeDetail(recipeId) {
    const recipe = recipeDatabase[recipeId];
    if (!recipe) return;
    
    const modal = document.getElementById('recipe-modal');
    const recipeDetail = document.getElementById('recipe-detail');
    
    // Create nutrition badges
    const badges = [];
    if (recipe.nutrition.isIronRich) badges.push('<span class="nutrition-badge iron">Iron-Rich</span>');
    if (recipe.nutrition.isProteinRich) badges.push('<span class="nutrition-badge protein">High-Protein</span>');
    if (recipe.nutrition.isB12Fortified) badges.push('<span class="nutrition-badge b12">B12-Fortified</span>');
    if (recipe.nutrition.isKidFriendly) badges.push('<span class="nutrition-badge kid-friendly">Kid-Friendly</span>');
    
    recipeDetail.innerHTML = `
        <div class="recipe-detail-header">
            <h2 class="recipe-detail-title">${recipe.name}</h2>
            <div class="recipe-detail-meta">
                <span><i class="fas fa-clock"></i> Prep: ${recipe.prepTime} min</span>
                ${recipe.cookTime ? `<span><i class="fas fa-fire"></i> Cook: ${recipe.cookTime} min</span>` : ''}
                <span><i class="fas fa-users"></i> Serves: ${recipe.servings}</span>
                <span><i class="fas fa-star"></i> Difficulty: ${'★'.repeat(recipe.difficulty)}</span>
            </div>
            <div class="recipe-detail-badges">
                ${badges.join('')}
            </div>
        </div>
        
        <div class="recipe-sections">
            <div class="recipe-section">
                <h3><i class="fas fa-list"></i> Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="recipe-section">
                <h3><i class="fas fa-clipboard-list"></i> Instructions</h3>
                <ol>
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
            
            ${recipe.kidTips ? `
            <div class="recipe-section">
                <h3><i class="fas fa-child"></i> Kid-Friendly Tips</h3>
                <p>${recipe.kidTips}</p>
            </div>
            ` : ''}
            
            <div class="recipe-section">
                <h3><i class="fas fa-box"></i> Storage</h3>
                <p>${recipe.storage}</p>
            </div>
            
            <div class="recipe-section">
                <h3><i class="fas fa-chart-bar"></i> Nutrition (per serving)</h3>
                <ul>
                    <li>Calories: ${recipe.nutrition.calories}</li>
                    <li>Protein: ${recipe.nutrition.protein}g</li>
                    <li>Iron: ${recipe.nutrition.iron}mg</li>
                    <li>Vitamin B12: ${recipe.nutrition.b12}μg</li>
                </ul>
            </div>
            
            <div class="recipe-section">
                <h3><i class="fas fa-external-link-alt"></i> Source</h3>
                <p>${recipe.source}</p>
            </div>
        </div>
    `;
    
    // Ensure recipe modal has highest z-index
    modal.style.zIndex = '3000';
    modal.style.display = 'block';
}

function showDayDetail(day, dayData) {
    const modal = document.getElementById('day-modal');
    const dayDetail = document.getElementById('day-detail');
    
    // Calculate total nutrition for the day
    let totalCalories = 0, totalProtein = 0, totalIron = 0, totalB12 = 0;
    
    ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
        if (dayData[mealType]) {
            const nutrition = dayData[mealType].nutrition;
            totalCalories += nutrition.calories;
            totalProtein += nutrition.protein;
            totalIron += nutrition.iron;
            totalB12 += nutrition.b12;
        }
    });
    
    dayDetail.innerHTML = `
        <div class="day-detail-header">
            <h2>Day ${day} Menu</h2>
            <p>Complete daily nutrition: ${totalCalories} cal | ${totalProtein}g protein | ${totalIron}mg iron | ${totalB12}μg B12</p>
        </div>
        
        <div class="day-meals-detail">
            ${createMealDetail('Breakfast', dayData.breakfast)}
            ${createMealDetail('Lunch', dayData.lunch)}
            ${createMealDetail('Dinner', dayData.dinner)}
        </div>
    `;
    
    // Set lower z-index for day modal
    modal.style.zIndex = '2500';
    modal.style.display = 'block';
}

function createMealDetail(mealName, recipe) {
    if (!recipe) return '';
    
    return `
        <div class="meal-detail">
            <h3><i class="fas fa-utensils"></i> ${mealName}</h3>
            <div class="meal-detail-recipe" onclick="showRecipeDetail('${recipe.id}')">
                <h4>${recipe.name}</h4>
                <p><strong>Prep time:</strong> ${recipe.prepTime + (recipe.cookTime || 0)} minutes | 
                   <strong>Nutrition:</strong> ${recipe.nutrition.calories} cal, ${recipe.nutrition.protein}g protein, ${recipe.nutrition.iron}mg iron</p>
                <p><em>Click to view full recipe details</em></p>
            </div>
        </div>
    `;
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function initializeModals() {
    // Close modal functionality
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Export functions for global access
window.showRecipeDetail = showRecipeDetail;
window.showDayDetail = showDayDetail;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        showRecipeDetail, 
        showDayDetail, 
        createMealDetail, 
        closeModal, 
        initializeModals 
    };
}
// Recipe library generation
function generateRecipeLibrary() {
    const recipes = Object.values(recipeDatabase);
    displayRecipes(recipes);
}

function displayRecipes(recipes) {
    const recipeGrid = document.getElementById('recipe-grid');
    recipeGrid.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeGrid.appendChild(recipeCard);
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => showRecipeDetail(recipe.id);
    
    // Create nutrition badges
    const badges = [];
    if (recipe.nutrition.isIronRich) badges.push('<span class="nutrition-badge iron">Iron-Rich</span>');
    if (recipe.nutrition.isProteinRich) badges.push('<span class="nutrition-badge protein">High-Protein</span>');
    if (recipe.nutrition.isB12Fortified) badges.push('<span class="nutrition-badge b12">B12-Fortified</span>');
    if (recipe.nutrition.isKidFriendly) badges.push('<span class="nutrition-badge kid-friendly">Kid-Friendly</span>');
    
    // Get recipe icon based on meal type
    const mealIcons = {
        breakfast: '🌅',
        lunch: '🌞',
        dinner: '🌙'
    };
    
    const cuisineColors = {
        american: '#ff6b6b',
        'middle-eastern': '#4ecdc4',
        italian: '#45b7d1',
        asian: '#f9ca24',
        mexican: '#f0932b',
        indian: '#eb4d4b',
        fusion: '#6c5ce7',
        african: '#a29bfe',
        japanese: '#fd79a8'
    };
    
    card.innerHTML = `
        <div class="recipe-image" style="background: linear-gradient(45deg, ${cuisineColors[recipe.cuisine] || '#ff9800'}, #ffc107);">
            ${mealIcons[recipe.mealType]}
        </div>
        <div class="recipe-content">
            <div class="recipe-header">
                <h3 class="recipe-title">${recipe.name}</h3>
                <span class="cuisine-tag">${recipe.cuisine.replace('-', ' ').toUpperCase()}</span>
            </div>
            <div class="recipe-meta">
                <span><i class="fas fa-clock"></i> ${recipe.prepTime + (recipe.cookTime || 0)} min</span>
                <span><i class="fas fa-users"></i> ${recipe.servings} servings</span>
                <span><i class="fas fa-star"></i> ${'★'.repeat(recipe.difficulty)}</span>
            </div>
            <div class="recipe-nutrition">
                ${badges.join('')}
            </div>
            <p class="recipe-description">
                ${recipe.kidTips || recipe.instructions[0]}
            </p>
        </div>
    `;
    
    return card;
}

// Search and filter functionality
function initializeFilters() {
    const searchInput = document.getElementById('recipe-search');
    const mealTypeFilter = document.getElementById('meal-type-filter');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const prepTimeFilter = document.getElementById('prep-time-filter');
    const nutritionFilter = document.getElementById('nutrition-filter');
    
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const mealType = mealTypeFilter.value;
        const cuisine = cuisineFilter.value;
        const prepTime = prepTimeFilter.value;
        const nutrition = nutritionFilter.value;
        
        let recipes = Object.values(recipeDatabase);
        
        // Apply search filter
        if (searchTerm) {
            recipes = recipes.filter(recipe => 
                recipe.name.toLowerCase().includes(searchTerm) ||
                recipe.cuisine.toLowerCase().includes(searchTerm) ||
                recipe.ingredients.some(ingredient => 
                    ingredient.toLowerCase().includes(searchTerm)
                )
            );
        }
        
        // Apply meal type filter
        if (mealType) {
            recipes = recipes.filter(recipe => recipe.mealType === mealType);
        }
        
        // Apply cuisine filter
        if (cuisine) {
            recipes = recipes.filter(recipe => recipe.cuisine === cuisine);
        }
        
        // Apply prep time filter
        if (prepTime) {
            recipes = recipes.filter(recipe => {
                const totalTime = recipe.prepTime + (recipe.cookTime || 0);
                switch (prepTime) {
                    case 'quick': return totalTime <= 15;
                    case 'medium': return totalTime > 15 && totalTime <= 30;
                    case 'long': return totalTime > 30;
                    default: return true;
                }
            });
        }
        
        // Apply nutrition filter
        if (nutrition) {
            recipes = recipes.filter(recipe => {
                switch (nutrition) {
                    case 'iron-rich': return recipe.nutrition.isIronRich;
                    case 'protein-rich': return recipe.nutrition.isProteinRich;
                    case 'b12-fortified': return recipe.nutrition.isB12Fortified;
                    case 'kid-friendly': return recipe.nutrition.isKidFriendly;
                    default: return true;
                }
            });
        }
        
        displayRecipes(recipes);
    }
    
    // Add event listeners
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (mealTypeFilter) mealTypeFilter.addEventListener('change', applyFilters);
    if (cuisineFilter) cuisineFilter.addEventListener('change', applyFilters);
    if (prepTimeFilter) prepTimeFilter.addEventListener('change', applyFilters);
    if (nutritionFilter) nutritionFilter.addEventListener('change', applyFilters);
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generateRecipeLibrary, 
        displayRecipes, 
        createRecipeCard, 
        initializeFilters 
    };
}
// Recipe Database - All 45 recipes from the document
const recipeDatabase = {
    // BREAKFAST RECIPES
    "banana-pb-oatmeal": {
        id: "banana-pb-oatmeal",
        name: "Banana Peanut Butter Oatmeal",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 10,
        cookTime: 5,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 280,
            protein: 9,
            iron: 3,
            b12: 2,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups rolled oats",
            "2 ripe bananas, mashed",
            "4 tbsp peanut butter",
            "2 tbsp ground flaxseed",
            "4 cups fortified soy milk",
            "1 tsp cinnamon",
            "Mixed berries for topping",
            "Maple syrup (optional)"
        ],
        instructions: [
            "Cook oats with soy milk in a large pot over medium heat for 5 minutes",
            "Stir in mashed banana and peanut butter until well combined",
            "Add ground flaxseed and cinnamon",
            "Serve in bowls topped with berries",
            "Drizzle with maple syrup if desired for extra sweetness"
        ],
        kidTips: "Drizzle a little maple syrup if needed for sweetness. Let kids add their own berry toppings.",
        storage: "Store overnight in fridge, can reheat with a splash of milk",
        tags: ["iron-rich", "b12-fortified", "kid-friendly"],
        source: "Adapted from plant-based nutrition guidelines"
    },

    "overnight-chia-pudding": {
        id: "overnight-chia-pudding",
        name: "Overnight Chia Berry Pudding",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 250,
            protein: 6,
            iron: 4,
            b12: 2.4,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "1/2 cup chia seeds",
            "2 cups B12-fortified almond or oat milk",
            "1 tsp vanilla extract",
            "2 cups mixed berries",
            "3 tbsp maple syrup",
            "Pinch of salt"
        ],
        instructions: [
            "Mix chia seeds with milk, vanilla, maple syrup and salt in a large bowl",
            "Whisk well and let sit for 5 minutes, then whisk again to prevent clumping",
            "Cover and refrigerate for at least 6 hours or overnight",
            "Stir before serving and top with mixed berries",
            "Divide into 4 portions"
        ],
        kidTips: "Layer with soy yogurt to make it a 'parfait'. Let kids choose their favorite berry toppings.",
        storage: "Keeps 3 days in refrigerator",
        tags: ["iron-rich", "b12-fortified", "kid-friendly"],
        source: "Plant-based breakfast collection"
    },

    "avocado-toast": {
        id: "avocado-toast",
        name: "Avocado Toast with Fruit",
        cuisine: "fusion",
        mealType: "breakfast",
        prepTime: 5,
        cookTime: 2,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 220,
            protein: 6,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "4 slices whole grain bread",
            "2 ripe avocados",
            "2 tbsp lemon juice",
            "2 tbsp hemp seeds",
            "Salt to taste",
            "Seasonal fruit for serving"
        ],
        instructions: [
            "Toast bread slices until golden brown",
            "Mash avocados with lemon juice and a pinch of salt",
            "Spread avocado mixture on toast",
            "Sprinkle hemp seeds on top",
            "Serve with sliced seasonal fruit on the side"
        ],
        kidTips: "Cut toast into triangles or fun shapes. Serve deconstructed for toddlers.",
        storage: "Avocado mash best served fresh to avoid browning",
        tags: ["iron-rich", "kid-friendly"],
        source: "Healthy breakfast ideas"
    },

    "pumpkin-oat-muffins": {
        id: "pumpkin-oat-muffins",
        name: "Pumpkin Oat Muffins",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 20,
        cookTime: 20,
        servings: 12,
        difficulty: 2,
        nutrition: {
            calories: 150,
            protein: 4,
            iron: 2,
            b12: 1,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups whole wheat flour",
            "1 cup rolled oats",
            "1 cup pumpkin puree",
            "1/2 cup fortified plant milk",
            "1/3 cup maple syrup",
            "1/4 cup ground flax + 6 tbsp water",
            "2 tsp baking powder",
            "1 tsp cinnamon",
            "1/2 cup raisins"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Mix ground flax with water and let sit for 5 minutes",
            "Combine dry ingredients in a large bowl",
            "Mix wet ingredients including flax mixture",
            "Fold wet into dry ingredients until just combined",
            "Fill muffin cups 2/3 full and bake for 18-20 minutes"
        ],
        kidTips: "Add dairy-free mini chocolate chips to some muffins as a treat",
        storage: "Keep 3 days airtight or freeze up to 1 month",
        tags: ["iron-rich", "kid-friendly", "b12-fortified"],
        source: "Vegan baking collection"
    },

    "green-monster-smoothie": {
        id: "green-monster-smoothie",
        name: "Green Monster Smoothie",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 180,
            protein: 6,
            iron: 2,
            b12: 2,
            isIronRich: false,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "2 ripe bananas",
            "2 cups baby spinach",
            "4 tbsp peanut butter",
            "2 cups fortified soy milk",
            "1 cup ice cubes",
            "1 tsp vanilla (optional)"
        ],
        instructions: [
            "Add all ingredients to a high-speed blender",
            "Blend until completely smooth, about 60 seconds",
            "Add more milk if needed for desired consistency",
            "Serve immediately in fun cups with straws"
        ],
        kidTips: "The smoothie is naturally sweet from banana - kids won't taste the spinach! Serve in a fun cup with a colorful straw.",
        storage: "Best served fresh as nutrients degrade quickly",
        tags: ["b12-fortified", "kid-friendly"],
        source: "Kid-friendly smoothie recipes"
    },

    "blueberry-pancakes": {
        id: "blueberry-pancakes",
        name: "Blueberry Banana Pancakes",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 240,
            protein: 6,
            iron: 2,
            b12: 0.5,
            isIronRich: false,
            isProteinRich: false,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups whole wheat flour",
            "1/2 cup rolled oats",
            "2 tsp baking powder",
            "1 large banana, mashed",
            "1.5 cups almond milk",
            "1 cup fresh blueberries",
            "2 tbsp maple syrup",
            "1 tsp vanilla"
        ],
        instructions: [
            "Whisk dry ingredients in a large bowl",
            "Mix wet ingredients including mashed banana",
            "Combine wet and dry ingredients until just mixed",
            "Gently fold in blueberries",
            "Cook on lightly oiled skillet over medium heat, about 2 minutes per side"
        ],
        kidTips: "Make silver-dollar size pancakes for easy handling. Let kids add berries in smiley-face patterns.",
        storage: "Keep 2 days in fridge; freeze extras and toast to reheat",
        tags: ["kid-friendly"],
        source: "Family pancake recipes"
    },

    "tofu-scramble": {
        id: "tofu-scramble",
        name: "Tofu Veggie Scramble",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 15,
        cookTime: 8,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 200,
            protein: 12,
            iron: 3,
            b12: 2,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "1 block (400g) firm tofu, crumbled",
            "1 tsp turmeric",
            "1/2 tsp garlic powder",
            "1 bell pepper, diced",
            "2 cups baby spinach",
            "1 tbsp nutritional yeast",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat olive oil in a large skillet over medium heat",
            "Add crumbled tofu and turmeric, cook for 3 minutes",
            "Add bell pepper and cook for 2 minutes",
            "Add spinach, garlic powder, and nutritional yeast",
            "Season with salt and pepper, cook until spinach wilts"
        ],
        kidTips: "Serve with ketchup or toast soldiers for dipping",
        storage: "Keeps 2 days in fridge; reheat in microwave",
        tags: ["protein-rich", "iron-rich", "b12-fortified", "kid-friendly"],
        source: "Plant-based breakfast proteins"
    },

    "fortified-cereal": {
        id: "fortified-cereal",
        name: "Fortified Cereal with Fruit",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 2,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 200,
            protein: 8,
            iron: 10,
            b12: 3,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "4 cups fortified whole-grain cereal",
            "4 cups fortified soy or oat milk",
            "2 bananas, sliced",
            "1 cup berries"
        ],
        instructions: [
            "Pour cereal into bowls",
            "Add sliced banana and berries",
            "Pour cold fortified milk over cereal",
            "Serve immediately"
        ],
        kidTips: "Let kids pick a fun, fortified cereal that they enjoy - many kid cereals have added vitamins",
        storage: "Serve fresh",
        tags: ["iron-rich", "b12-fortified", "kid-friendly"],
        source: "Quick breakfast solutions"
    },

    "pb-overnight-oats": {
        id: "pb-overnight-oats",
        name: "Peanut Butter Overnight Oats",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 300,
            protein: 10,
            iron: 4,
            b12: 2,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups rolled oats",
            "2 tbsp chia seeds",
            "4 tbsp peanut butter",
            "2 cups fortified plant milk",
            "1 tsp cinnamon",
            "2 apples, diced",
            "2 tbsp raisins"
        ],
        instructions: [
            "Combine oats, chia seeds, and cinnamon in mason jars",
            "Mix peanut butter with plant milk until smooth",
            "Add peanut butter mixture to jars",
            "Add diced apples and raisins",
            "Refrigerate overnight, eat cold or warm slightly"
        ],
        kidTips: "Use almond butter if peanuts not allowed. Let kids add their favorite mix-ins.",
        storage: "Keeps 3 days in refrigerator",
        tags: ["iron-rich", "protein-rich", "b12-fortified", "kid-friendly"],
        source: "Make-ahead breakfast ideas"
    },

    "pumpkin-waffles": {
        id: "pumpkin-waffles",
        name: "Pumpkin Oat Waffles",
        cuisine: "middle-eastern",
        mealType: "breakfast",
        prepTime: 15,
        cookTime: 12,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 250,
            protein: 7,
            iron: 3,
            b12: 1,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups whole wheat flour",
            "1/2 cup rolled oats",
            "2 tsp baking powder",
            "1 cup pumpkin puree",
            "1.5 cups fortified plant milk",
            "3 tbsp date syrup",
            "1 tsp cinnamon",
            "1/2 tsp cardamom"
        ],
        instructions: [
            "Preheat waffle iron",
            "Blend dry ingredients in a large bowl",
            "Mix wet ingredients including pumpkin puree",
            "Combine wet and dry ingredients until smooth",
            "Cook in waffle iron according to manufacturer's instructions"
        ],
        kidTips: "Top with banana slices and raisins to make a smiley face",
        storage: "Freeze waffles up to 1 month",
        tags: ["iron-rich", "b12-fortified", "kid-friendly"],
        source: "Middle Eastern inspired breakfast"
    },

    "chocolate-smoothie-bowl": {
        id: "chocolate-smoothie-bowl",
        name: "Chocolate Banana Smoothie Bowl",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 300,
            protein: 8,
            iron: 3,
            b12: 2,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "4 frozen bananas",
            "3 tbsp cocoa powder",
            "4 tbsp peanut butter",
            "1 cup baby spinach (optional)",
            "1/2 cup fortified soy milk",
            "Granola and strawberries for topping"
        ],
        instructions: [
            "Blend frozen bananas until creamy",
            "Add cocoa powder, peanut butter, spinach, and soy milk",
            "Blend to thick 'nice cream' consistency",
            "Scoop into bowls",
            "Top with granola and sliced strawberries"
        ],
        kidTips: "They'll think it's dessert for breakfast! Use colorful bowls and let them sprinkle the granola.",
        storage: "Best served immediately",
        tags: ["iron-rich", "b12-fortified", "kid-friendly"],
        source: "Healthy dessert-style breakfast"
    },

    "baked-oatmeal": {
        id: "baked-oatmeal",
        name: "Apple-Cinnamon Baked Oatmeal",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 10,
        cookTime: 30,
        servings: 6,
        difficulty: 2,
        nutrition: {
            calories: 320,
            protein: 8,
            iron: 4,
            b12: 1,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "3 cups rolled oats",
            "2 apples, diced",
            "1 tsp cinnamon",
            "1/2 cup walnuts, chopped",
            "2 tbsp ground flaxseed",
            "2 cups fortified almond milk",
            "1/4 cup maple syrup"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C)",
            "Mix oats, diced apples, cinnamon, walnuts, and flaxseed",
            "Whisk together almond milk and maple syrup",
            "Pour wet ingredients over oat mixture",
            "Bake in 8x8 pan for 30 minutes until set"
        ],
        kidTips: "Serve with a drizzle of dairy-free yogurt or brown sugar on top",
        storage: "Keeps 4 days in fridge; portion and microwave to reheat",
        tags: ["iron-rich", "b12-fortified", "kid-friendly"],
        source: "Make-ahead breakfast casseroles"
    },

    "besan-pancakes": {
        id: "besan-pancakes",
        name: "Chickpea Flour Pancakes (Besan)",
        cuisine: "indian",
        mealType: "breakfast",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 150,
            protein: 6,
            iron: 2,
            b12: 0,
            isIronRich: false,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: false
        },
        ingredients: [
            "2 cups chickpea flour (besan)",
            "2.5 cups water",
            "1/4 tsp turmeric",
            "1/2 tsp cumin",
            "1 carrot, grated",
            "1 zucchini, grated",
            "Salt to taste",
            "Oil for cooking"
        ],
        instructions: [
            "Whisk chickpea flour with water until smooth",
            "Add turmeric, cumin, and salt",
            "Fold in grated vegetables",
            "Heat oil in pan over medium heat",
            "Pour batter to make small pancakes, cook 3 minutes each side"
        ],
        kidTips: "Omit spices for kids; serve with ketchup or chutney for dipping",
        storage: "Best served fresh",
        tags: ["protein-rich"],
        source: "Indian breakfast traditions"
    },

    "yogurt-parfait": {
        id: "yogurt-parfait",
        name: "Yogurt Parfait with Granola",
        cuisine: "american",
        mealType: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 250,
            protein: 5,
            iron: 1,
            b12: 3,
            isIronRich: false,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups fortified soy yogurt",
            "2 cups mixed berries",
            "1 cup granola",
            "2 tbsp agave syrup",
            "1 tbsp nutritional yeast (optional)"
        ],
        instructions: [
            "If using nutritional yeast, mix into yogurt",
            "Layer yogurt, berries, and granola in glasses",
            "Drizzle with agave syrup",
            "Repeat layers",
            "Serve immediately"
        ],
        kidTips: "Let kids assemble their own layers for fun",
        storage: "Best served fresh",
        tags: ["b12-fortified", "kid-friendly"],
        source: "Quick breakfast parfaits"
    },

    "cinnamon-toast-tofu": {
        id: "cinnamon-toast-tofu",
        name: "Cinnamon Toast & Tofu Egg Bites",
        cuisine: "fusion",
        mealType: "breakfast",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: 3,
        nutrition: {
            calories: 300,
            protein: 12,
            iron: 3,
            b12: 1,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "4 slices whole grain bread",
            "Vegan butter",
            "2 tbsp cinnamon sugar",
            "1 package silken tofu",
            "2 tbsp chickpea flour",
            "1/2 tsp black salt (kala namak)",
            "1 tbsp nutritional yeast"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Butter bread and sprinkle with cinnamon sugar",
            "Toast under broiler until golden",
            "Blend tofu with chickpea flour, black salt, and nutritional yeast",
            "Pour into mini muffin tins and bake 15 minutes"
        ],
        kidTips: "The sweet toast balances the savory bites; serve with ketchup if needed",
        storage: "Toast best fresh; tofu bites keep 2 days",
        tags: ["protein-rich", "iron-rich", "b12-fortified", "kid-friendly"],
        source: "Creative breakfast combinations"
    },

    // LUNCH RECIPES
    "lentil-soup": {
        id: "lentil-soup",
        name: "Lebanese Red Lentil Soup",
        cuisine: "middle-eastern",
        mealType: "lunch",
        prepTime: 10,
        cookTime: 20,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 181,
            protein: 12,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups red lentils, rinsed",
            "1 large onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "4 cloves garlic, minced",
            "1 tsp ground cumin",
            "4 cups vegetable broth",
            "Juice of 1 lemon",
            "Salt and pepper to taste",
            "Olive oil for sautéing"
        ],
        instructions: [
            "Heat olive oil in large pot over medium heat",
            "Sauté onion, carrots, and celery until softened, about 5 minutes",
            "Add garlic and cumin, cook 1 minute more",
            "Add lentils and broth, bring to boil",
            "Simmer 15-20 minutes until lentils are soft",
            "Stir in lemon juice and season with salt and pepper",
            "Blend slightly for texture or leave chunky"
        ],
        kidTips: "This soup is creamy and mild; serve with pita bread for dipping",
        storage: "Keeps 3 days refrigerated; can freeze",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Keeping the Peas - Lebanese recipes"
    },

    "pesto-pasta-beans": {
        id: "pesto-pasta-beans",
        name: "Whole-Grain Pesto Pasta with White Beans",
        cuisine: "italian",
        mealType: "lunch",
        prepTime: 25,
        cookTime: 12,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 350,
            protein: 14,
            iron: 5,
            b12: 2,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "1 lb whole wheat rotini pasta",
            "2 cups fresh basil leaves",
            "1 cup baby spinach",
            "3 cloves garlic",
            "1/2 cup walnuts",
            "1/2 cup olive oil",
            "1/4 cup nutritional yeast",
            "1 can (15oz) white cannellini beans, drained",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook pasta according to package directions",
            "Meanwhile, blend basil, spinach, garlic, walnuts, olive oil, and nutritional yeast until smooth",
            "Drain pasta and return to pot",
            "Toss with pesto and white beans",
            "Season with salt and pepper, serve warm"
        ],
        kidTips: "Call it 'Hulk pasta' or 'Ninja turtle noodles' - the bright green is fun for kids",
        storage: "Keeps 3 days refrigerated",
        tags: ["iron-rich", "protein-rich", "b12-fortified", "kid-friendly"],
        source: "Italian family favorites"
    },

    "baked-falafel": {
        id: "baked-falafel",
        name: "Baked Falafel with Veggie Salad",
        cuisine: "middle-eastern",
        mealType: "lunch",
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        difficulty: 3,
        nutrition: {
            calories: 220,
            protein: 10,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups dried chickpeas, soaked overnight",
            "1 small onion, quartered",
            "1/4 cup fresh parsley",
            "1/4 cup fresh cilantro",
            "4 cloves garlic",
            "1 tsp ground cumin",
            "2 tbsp olive oil",
            "2 cucumbers, diced",
            "2 tomatoes, diced",
            "Mixed greens",
            "Tahini dressing"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Pulse soaked chickpeas (uncooked) with herbs, onion, garlic, and cumin in food processor",
            "Form mixture into 12 small patties",
            "Brush with olive oil and bake 25 minutes, flipping once",
            "Serve with cucumber-tomato salad and tahini dressing"
        ],
        kidTips: "Shape into smaller 'nuggets' for easy handling. Serve with ketchup or hummus for dipping.",
        storage: "Unbaked mixture holds 2 hours; baked falafel freeze well",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Cookie and Kate falafel recipe"
    },

    "chickpea-tuna-salad": {
        id: "chickpea-tuna-salad",
        name: "Chickpea 'Tuna' Salad Sandwich",
        cuisine: "american",
        mealType: "lunch",
        prepTime: 15,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 250,
            protein: 9,
            iron: 1,
            b12: 0,
            isIronRich: false,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cans (15oz each) chickpeas, drained",
            "1/4 cup vegan mayo",
            "2 celery stalks, diced",
            "1/4 red onion, minced",
            "2 dill pickles, chopped",
            "2 tbsp lemon juice",
            "8 slices whole grain bread",
            "Lettuce leaves",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Mash chickpeas with fork, leaving some chunks for texture",
            "Mix in vegan mayo, celery, onion, pickles, and lemon juice",
            "Season with salt and pepper",
            "Spread on bread with lettuce to make sandwiches",
            "Serve with orange slices for vitamin C"
        ],
        kidTips: "Remove onion or pickles if too strong for kids. Crusts can be removed for little ones.",
        storage: "Filling keeps 3 days refrigerated",
        tags: ["protein-rich", "kid-friendly"],
        source: "Plant-based sandwich alternatives"
    },

    "four-bean-chili": {
        id: "four-bean-chili",
        name: "Four-Bean Chili",
        cuisine: "mexican",
        mealType: "lunch",
        prepTime: 15,
        cookTime: 45,
        servings: 6,
        difficulty: 2,
        nutrition: {
            calories: 300,
            protein: 14,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "1 can each: kidney, black, pinto, navy beans",
            "1 can (28oz) diced tomatoes",
            "1 large onion, diced",
            "1 bell pepper, diced",
            "1 cup corn kernels",
            "2 tsp mild chili powder",
            "1 tsp ground cumin",
            "4 cloves garlic, minced",
            "2 cups vegetable broth"
        ],
        instructions: [
            "Sauté onion, bell pepper, and garlic until softened",
            "Add tomatoes, all beans, corn, and spices",
            "Add vegetable broth and bring to boil",
            "Simmer 30-45 minutes until flavors meld",
            "Serve with avocado, vegan sour cream, or tortilla chips"
        ],
        kidTips: "Use mild spices and add sweetness with a touch of maple syrup. Serve with tortilla chips for dipping fun.",
        storage: "Keeps 4 days refrigerated; freezes excellently",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Family chili recipes"
    },

    "sweet-potato-burritos": {
        id: "sweet-potato-burritos",
        name: "Sweet Potato & Black Bean Burritos",
        cuisine: "mexican",
        mealType: "lunch",
        prepTime: 30,
        cookTime: 25,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 350,
            protein: 10,
            iron: 4.5,
            b12: 0,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 large sweet potatoes, diced",
            "1 can (15oz) black beans, drained",
            "1 onion, diced",
            "1 tsp ground cumin",
            "1/2 tsp mild chili powder",
            "4 large whole wheat tortillas",
            "1 avocado, sliced",
            "Salsa",
            "2 tbsp olive oil"
        ],
        instructions: [
            "Roast diced sweet potatoes with olive oil at 400°F for 20 minutes",
            "Sauté onion until soft, add cumin and chili powder",
            "Mix roasted sweet potatoes with black beans and onion",
            "Fill tortillas with mixture, add avocado and salsa",
            "Roll tightly into burritos"
        ],
        kidTips: "Sweet potatoes add natural sweetness kids love. Cut into pinwheels for easier handling.",
        storage: "Can assemble ahead and wrap in foil",
        tags: ["iron-rich", "kid-friendly"],
        source: "Mexican comfort food"
    },

    "rainbow-veggie-bowl": {
        id: "rainbow-veggie-bowl",
        name: "Rainbow Veggie Bowl with Tahini",
        cuisine: "middle-eastern",
        mealType: "lunch",
        prepTime: 25,
        cookTime: 0,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 320,
            protein: 12,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups cooked quinoa",
            "1 can (15oz) chickpeas, drained",
            "1 cup purple cabbage, shredded",
            "2 carrots, julienned",
            "1 cucumber, diced",
            "1 cup cherry tomatoes, halved",
            "1/4 cup tahini",
            "2 tbsp lemon juice",
            "1 tbsp olive oil",
            "1 clove garlic, minced"
        ],
        instructions: [
            "Prepare all vegetables and arrange in bowls",
            "Whisk together tahini, lemon juice, olive oil, and garlic for dressing",
            "Layer quinoa, chickpeas, and vegetables in bowls",
            "Drizzle with tahini dressing",
            "Let kids customize their own bowls"
        ],
        kidTips: "The colorful vegetables are fun to arrange. Serve dressing on the side for picky eaters.",
        storage: "Components keep 2 days; assemble fresh",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Plant-based bowl recipes"
    },

    "chickpea-curry": {
        id: "chickpea-curry",
        name: "Mild Chickpea & Cauliflower Curry",
        cuisine: "indian",
        mealType: "lunch",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 280,
            protein: 11,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cans (15oz each) chickpeas, drained",
            "1 head cauliflower, cut into florets",
            "1 can (14oz) coconut milk",
            "1 can (14oz) diced tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "1 tbsp fresh ginger, minced",
            "1 tsp mild curry powder",
            "1/2 tsp turmeric",
            "2 cups basmati rice, cooked"
        ],
        instructions: [
            "Sauté onion, garlic, and ginger until fragrant",
            "Add curry powder and turmeric, cook 1 minute",
            "Add tomatoes, coconut milk, chickpeas, and cauliflower",
            "Simmer 20 minutes until cauliflower is tender",
            "Serve over basmati rice"
        ],
        kidTips: "Keep spices mild and let kids add extra coconut milk to cool it down",
        storage: "Keeps 3 days refrigerated; freezes well",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Family-friendly Indian cuisine"
    },

    "minestrone-soup": {
        id: "minestrone-soup",
        name: "Italian Minestrone Soup",
        cuisine: "italian",
        mealType: "lunch",
        prepTime: 20,
        cookTime: 30,
        servings: 6,
        difficulty: 2,
        nutrition: {
            calories: 250,
            protein: 10,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 zucchini, diced",
            "1 can (28oz) diced tomatoes",
            "1 can (15oz) kidney beans",
            "1 cup small pasta (ditalini)",
            "2 cups spinach",
            "6 cups vegetable broth",
            "2 tsp Italian seasoning"
        ],
        instructions: [
            "Sauté onion, carrots, and celery until softened",
            "Add zucchini, tomatoes, beans, and broth",
            "Bring to boil, add pasta and Italian seasoning",
            "Cook until pasta is tender",
            "Stir in spinach until wilted"
        ],
        kidTips: "Use fun pasta shapes like stars or letters. The vegetables get soft and mild.",
        storage: "Keeps 3 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Italian family recipes"
    },

    "spinach-tofu-lasagna": {
        id: "spinach-tofu-lasagna",
        name: "Spinach & Tofu Ricotta Lasagna",
        cuisine: "italian",
        mealType: "lunch",
        prepTime: 45,
        cookTime: 40,
        servings: 6,
        difficulty: 3,
        nutrition: {
            calories: 400,
            protein: 18,
            iron: 5,
            b12: 3,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "12 lasagna noodles, no-boil",
            "2 blocks (800g) firm tofu",
            "1/4 cup nutritional yeast",
            "2 tbsp lemon juice",
            "1 tsp garlic powder",
            "2 cups frozen spinach, thawed and drained",
            "3 cups marinara sauce",
            "1 cup vegan mozzarella",
            "Fresh basil"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Crumble tofu and mix with nutritional yeast, lemon juice, and garlic powder",
            "Layer sauce, noodles, tofu mixture, spinach in 9x13 pan",
            "Repeat layers, top with vegan cheese",
            "Cover and bake 35 minutes, uncover for last 10 minutes"
        ],
        kidTips: "The tofu ricotta tastes like regular lasagna. Let it cool before serving.",
        storage: "Keeps 4 days refrigerated; freezes well",
        tags: ["iron-rich", "protein-rich", "b12-fortified", "kid-friendly"],
        source: "Plant-based Italian classics"
    },

    "red-lentil-dal": {
        id: "red-lentil-dal",
        name: "Red Lentil Dal with Rice",
        cuisine: "indian",
        mealType: "lunch",
        prepTime: 10,
        cookTime: 20,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 320,
            protein: 13,
            iron: 5,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "1.5 cups red lentils",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "1 tbsp fresh ginger, minced",
            "1 tsp turmeric",
            "1 tsp ground cumin",
            "1 can (14oz) coconut milk",
            "1 can (14oz) diced tomatoes",
            "3 cups water",
            "2 cups basmati rice, cooked"
        ],
        instructions: [
            "Sauté onion, garlic, and ginger until fragrant",
            "Add lentils, turmeric, cumin, and water",
            "Simmer 15 minutes until lentils break down",
            "Stir in coconut milk and tomatoes",
            "Cook 5 more minutes, serve over rice"
        ],
        kidTips: "Dal has a mild, creamy texture. You can serve it as a 'dip' for naan bread.",
        storage: "Keeps 3 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Indian comfort food"
    },

    "veggie-sushi-bowl": {
        id: "veggie-sushi-bowl",
        name: "Deconstructed Veggie Sushi Bowl",
        cuisine: "japanese",
        mealType: "lunch",
        prepTime: 25,
        cookTime: 0,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 300,
            protein: 9,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups sushi rice, cooked and cooled",
            "1 cucumber, julienned",
            "1 avocado, sliced",
            "1 carrot, julienned",
            "1 bell pepper, strips",
            "1/2 cup edamame, shelled",
            "2 sheets nori, cut into strips",
            "Soy sauce for dipping",
            "Pickled ginger"
        ],
        instructions: [
            "Arrange sushi rice in bowls",
            "Top with arranged vegetables in colorful sections",
            "Add edamame for protein",
            "Garnish with nori strips",
            "Serve with soy sauce and pickled ginger"
        ],
        kidTips: "Kids can pick and choose their favorite parts. The colorful arrangement is fun!",
        storage: "Best assembled fresh",
        tags: ["iron-rich", "kid-friendly"],
        source: "Japanese family meals"
    },

    "white-bean-kale-stew": {
        id: "white-bean-kale-stew",
        name: "White Bean & Kale Stew",
        cuisine: "italian",
        mealType: "lunch",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 270,
            protein: 12,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cans (15oz each) cannellini beans",
            "1 bunch kale, chopped",
            "1 potato, diced",
            "2 carrots, diced",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "4 cups vegetable broth",
            "2 tsp dried rosemary",
            "1 cup small pasta (optional)"
        ],
        instructions: [
            "Sauté onion, carrots, and garlic until soft",
            "Add potato, broth, and rosemary",
            "Simmer 15 minutes until potato is tender",
            "Add beans and kale, cook 5 minutes",
            "Add pasta if using, cook until tender"
        ],
        kidTips: "The potatoes and carrots make it hearty. Add small pasta shapes for extra kid appeal.",
        storage: "Keeps 3 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Italian rustic cooking"
    },

    "couscous-salad": {
        id: "couscous-salad",
        name: "Mediterranean Couscous Salad",
        cuisine: "middle-eastern",
        mealType: "lunch",
        prepTime: 20,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 300,
            protein: 9,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: false,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups whole wheat couscous, prepared",
            "1 can (15oz) chickpeas, drained",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/2 cup black olives (optional)",
            "1/4 cup fresh parsley",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "1 tsp dried oregano"
        ],
        instructions: [
            "Prepare couscous according to package directions and let cool",
            "Mix in chickpeas, tomatoes, cucumber, and parsley",
            "Whisk olive oil, lemon juice, and oregano for dressing",
            "Toss salad with dressing",
            "Let flavors meld for 10 minutes before serving"
        ],
        kidTips: "Couscous has a fun, tiny pasta-like texture. Leave out olives if kids don't like them.",
        storage: "Keeps 2 days refrigerated",
        tags: ["iron-rich", "kid-friendly"],
        source: "Mediterranean family meals"
    },

    "bbq-tofu-wraps": {
        id: "bbq-tofu-wraps",
        name: "BBQ Tofu Wraps",
        cuisine: "american",
        mealType: "lunch",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 320,
            protein: 15,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "1 block (400g) extra-firm tofu, sliced",
            "1/2 cup BBQ sauce",
            "4 large tortillas",
            "2 cups lettuce, shredded",
            "1 cup shredded carrots",
            "1 cup corn kernels",
            "1/4 cup vegan mayo",
            "1 avocado, sliced"
        ],
        instructions: [
            "Press tofu and slice into strips",
            "Pan-fry tofu until golden, then coat with BBQ sauce",
            "Warm tortillas slightly",
            "Fill with BBQ tofu, lettuce, carrots, corn, and avocado",
            "Add a dollop of vegan mayo and roll up"
        ],
        kidTips: "The familiar BBQ flavor is usually a hit. Cut wraps in half for easier handling.",
        storage: "Best assembled fresh",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "American comfort food"
    },

    // DINNER RECIPES
    "butternut-mac-cheese": {
        id: "butternut-mac-cheese",
        name: "Creamy Butternut Mac & Cheese",
        cuisine: "italian",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 396,
            protein: 16,
            iron: 4,
            b12: 3,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "1 lb whole wheat pasta shells",
            "2 cups butternut squash, cubed",
            "1 cup silken tofu",
            "1/3 cup nutritional yeast",
            "2 tbsp olive oil",
            "1 tsp garlic powder",
            "1/2 cup unsweetened soy milk",
            "Salt and pepper to taste",
            "1 cup steamed peas"
        ],
        instructions: [
            "Cook pasta according to package directions",
            "Steam butternut squash until tender, about 15 minutes",
            "Blend cooked squash, tofu, nutritional yeast, garlic powder, and soy milk until smooth",
            "Toss hot pasta with butternut cheese sauce",
            "Stir in steamed peas and serve immediately"
        ],
        kidTips: "The orange color is appealing and it tastes like regular mac and cheese!",
        storage: "Keeps 3 days refrigerated; add milk when reheating",
        tags: ["iron-rich", "protein-rich", "b12-fortified", "kid-friendly"],
        source: "Oh My Veggies comfort food"
    },

    "veggie-burritos": {
        id: "veggie-burritos",
        name: "Veggie Rice & Bean Burritos",
        cuisine: "mexican",
        mealType: "dinner",
        prepTime: 20,
        cookTime: 0,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 380,
            protein: 12,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "4 large whole wheat tortillas",
            "2 cups cooked brown rice",
            "1 can (15oz) pinto beans, drained",
            "1 cup corn kernels",
            "1 avocado, mashed",
            "1 cup salsa",
            "1 cup lettuce, shredded",
            "1/2 cup vegan cheese, shredded"
        ],
        instructions: [
            "Warm beans in a pan with a little cumin",
            "Lay out tortillas and add rice down the center",
            "Top with beans, corn, mashed avocado, and salsa",
            "Add lettuce and vegan cheese",
            "Roll tightly and serve immediately"
        ],
        kidTips: "Let kids build their own burritos with ingredients in separate bowls",
        storage: "Best served fresh, but can wrap in foil for later",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Family Mexican night"
    },

    "peanut-noodles": {
        id: "peanut-noodles",
        name: "Easy Peanut Noodles with Tofu",
        cuisine: "asian",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 420,
            protein: 18,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "12 oz whole wheat spaghetti",
            "1 block (400g) extra-firm tofu, cubed",
            "1/4 cup peanut butter",
            "3 tbsp soy sauce",
            "2 tbsp rice vinegar",
            "1 tbsp brown sugar",
            "2 cloves garlic, minced",
            "1 tsp fresh ginger, grated",
            "2 carrots, julienned",
            "Green onions for garnish"
        ],
        instructions: [
            "Cook noodles according to package directions",
            "Pan-fry tofu cubes until golden",
            "Whisk together peanut butter, soy sauce, vinegar, brown sugar, garlic, and ginger",
            "Toss hot noodles with peanut sauce",
            "Add tofu and julienned carrots, garnish with green onions"
        ],
        kidTips: "The mild peanut sauce is usually a hit with kids. Serve extra sauce on the side.",
        storage: "Keeps 2 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Asian comfort food"
    },

    "sweet-potato-curry": {
        id: "sweet-potato-curry",
        name: "Sweet Potato Peanut Curry",
        cuisine: "african",
        mealType: "dinner",
        prepTime: 25,
        cookTime: 20,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 380,
            protein: 12,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 large sweet potatoes, cubed",
            "1 can (15oz) chickpeas, drained",
            "1/4 cup peanut butter",
            "1 can (14oz) coconut milk",
            "1 can (14oz) diced tomatoes",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tsp mild curry powder",
            "2 cups kale, chopped",
            "2 cups cooked quinoa"
        ],
        instructions: [
            "Sauté onion and garlic until fragrant",
            "Add sweet potatoes, chickpeas, tomatoes, and curry powder",
            "Stir in coconut milk and peanut butter",
            "Simmer 15 minutes until sweet potatoes are tender",
            "Add kale in last 2 minutes, serve over quinoa"
        ],
        kidTips: "The peanut butter makes it creamy and slightly sweet - perfect for kids!",
        storage: "Keeps 3 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "African-inspired family meals"
    },

    "veggie-fried-rice": {
        id: "veggie-fried-rice",
        name: "Veggie Fried Rice with Edamame",
        cuisine: "asian",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 320,
            protein: 14,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "4 cups cooked brown rice (preferably day-old)",
            "1 cup frozen edamame, shelled",
            "2 carrots, diced",
            "1 cup frozen peas",
            "1 cup corn kernels",
            "3 green onions, sliced",
            "3 tbsp soy sauce",
            "2 tbsp sesame oil",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Heat sesame oil in large skillet or wok",
            "Stir-fry carrots for 2 minutes",
            "Add day-old rice, breaking up clumps",
            "Add edamame, peas, corn, and garlic",
            "Stir in soy sauce and cook until heated through",
            "Garnish with green onions"
        ],
        kidTips: "Kids love the colorful vegetables and can eat it with a spoon. Use low-sodium soy sauce.",
        storage: "Keeps 2 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Asian family cooking"
    },

    "pita-pizzas": {
        id: "pita-pizzas",
        name: "Personal Pita Pizzas",
        cuisine: "italian",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 1,
        nutrition: {
            calories: 280,
            protein: 8,
            iron: 2,
            b12: 2,
            isIronRich: false,
            isProteinRich: false,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "4 whole wheat pita breads",
            "1 cup marinara sauce",
            "1 cup vegan mozzarella, shredded",
            "1 bell pepper, sliced",
            "1/2 cup mushrooms, sliced",
            "1/4 cup black olives (optional)",
            "2 tbsp nutritional yeast",
            "Italian seasoning"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C)",
            "Spread marinara on pita breads",
            "Top with vegetables and vegan cheese",
            "Sprinkle with nutritional yeast and Italian seasoning",
            "Bake 8-10 minutes until cheese melts"
        ],
        kidTips: "Let kids add their own toppings - it's like a pizza party!",
        storage: "Best served fresh",
        tags: ["b12-fortified", "kid-friendly"],
        source: "Family pizza night"
    },

    "teriyaki-quinoa": {
        id: "teriyaki-quinoa",
        name: "Teriyaki Mushroom & Broccoli Quinoa",
        cuisine: "asian",
        mealType: "dinner",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 350,
            protein: 14,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups quinoa, cooked",
            "2 cups broccoli florets",
            "8 oz mushrooms, sliced",
            "1 bell pepper, strips",
            "1/4 cup teriyaki sauce",
            "2 tbsp sesame oil",
            "1 tbsp brown sugar",
            "2 cloves garlic, minced",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Cook quinoa according to package directions",
            "Stir-fry mushrooms until golden",
            "Add broccoli and bell pepper, cook until tender",
            "Mix teriyaki sauce with brown sugar and garlic",
            "Toss vegetables with sauce, serve over quinoa"
        ],
        kidTips: "The sweet teriyaki flavor appeals to kids. Quinoa has a fun, fluffy texture.",
        storage: "Keeps 2 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Healthy Asian fusion"
    },

    "veggie-nuggets": {
        id: "veggie-nuggets",
        name: "Crispy Veggie Nuggets & Sweet Potato Fries",
        cuisine: "american",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 320,
            protein: 12,
            iron: 2,
            b12: 1.5,
            isIronRich: false,
            isProteinRich: true,
            isB12Fortified: true,
            isKidFriendly: true
        },
        ingredients: [
            "1 package vegan chicken nuggets (fortified)",
            "2 large sweet potatoes, cut into fries",
            "2 tbsp olive oil",
            "1 tsp paprika",
            "Carrot sticks",
            "Cucumber slices",
            "Ketchup for dipping"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C)",
            "Toss sweet potato fries with olive oil and paprika",
            "Bake fries for 15 minutes",
            "Add nuggets to oven, bake 10 more minutes",
            "Serve with raw veggie sticks and ketchup"
        ],
        kidTips: "This is comfort food kids recognize! The sweet potato fries are naturally sweet.",
        storage: "Nuggets best fresh; fries can be reheated",
        tags: ["protein-rich", "b12-fortified", "kid-friendly"],
        source: "Kid-friendly convenience foods"
    },

    "udon-stir-fry": {
        id: "udon-stir-fry",
        name: "Vegetable Udon Stir-Fry",
        cuisine: "japanese",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 12,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 340,
            protein: 14,
            iron: 3,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "4 portions fresh udon noodles",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "2 carrots, sliced",
            "1/2 cup baby corn",
            "1 cup edamame, shelled",
            "3 tbsp soy sauce",
            "2 tbsp mirin",
            "1 tbsp sesame oil",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Cook udon noodles according to package directions",
            "Stir-fry vegetables in sesame oil until tender-crisp",
            "Add garlic, soy sauce, and mirin",
            "Toss with cooked udon noodles",
            "Serve immediately while hot"
        ],
        kidTips: "Udon noodles are thick and fun to eat. Baby corn adds novelty for kids.",
        storage: "Best served fresh",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Japanese comfort food"
    },

    "quinoa-tabbouleh": {
        id: "quinoa-tabbouleh",
        name: "Quinoa Tabbouleh with Chickpea Patties",
        cuisine: "middle-eastern",
        mealType: "dinner",
        prepTime: 30,
        cookTime: 10,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 350,
            protein: 15,
            iron: 4,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "2 cups quinoa, cooked and cooled",
            "2 cups parsley, chopped",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/4 cup lemon juice",
            "1/4 cup olive oil",
            "1 can (15oz) chickpeas, drained and mashed",
            "2 tbsp flour",
            "1 tsp cumin"
        ],
        instructions: [
            "Mix quinoa, parsley, tomatoes, cucumber with lemon juice and olive oil",
            "Form mashed chickpeas with flour and cumin into small patties",
            "Pan-fry patties until crispy",
            "Serve patties with quinoa tabbouleh",
            "Drizzle with extra lemon juice"
        ],
        kidTips: "The patties are like soft falafel. Serve with pita bread for dipping.",
        storage: "Tabbouleh keeps 2 days; patties best fresh",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Middle Eastern family meals"
    },

    "pumpkin-lentil-curry": {
        id: "pumpkin-lentil-curry",
        name: "Pumpkin Red Lentil Curry",
        cuisine: "indian",
        mealType: "dinner",
        prepTime: 20,
        cookTime: 25,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 340,
            protein: 14,
            iron: 5,
            b12: 0,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "1.5 cups red lentils",
            "2 cups pumpkin, cubed (or canned puree)",
            "1 can (14oz) coconut milk",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "1 tbsp fresh ginger, minced",
            "1 tsp mild curry powder",
            "1/2 tsp cinnamon",
            "2 tbsp raisins (optional)",
            "2 cups couscous, cooked"
        ],
        instructions: [
            "Sauté onion, garlic, and ginger until fragrant",
            "Add curry powder and cinnamon, cook 1 minute",
            "Add lentils, pumpkin, and 3 cups water",
            "Simmer 20 minutes until lentils are soft",
            "Stir in coconut milk and raisins, serve over couscous"
        ],
        kidTips: "The pumpkin and cinnamon make it slightly sweet and appealing to kids.",
        storage: "Keeps 3 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Moroccan-inspired family meals"
    },

    "tofu-stir-fry": {
        id: "tofu-stir-fry",
        name: "Veggie & Tofu Stir-Fry with Rice",
        cuisine: "asian",
        mealType: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        difficulty: 2,
        nutrition: {
            calories: 380,
            protein: 20,
            iron: 4,
            b12: 1,
            isIronRich: true,
            isProteinRich: true,
            isB12Fortified: false,
            isKidFriendly: true
        },
        ingredients: [
            "1 block (400g) extra-firm tofu, cubed",
            "2 cups broccoli florets",
            "2 carrots, sliced",
            "1 bell pepper, strips",
            "3 tbsp soy sauce",
            "2 cloves garlic, minced",
            "1 tbsp fresh ginger, minced",
            "1 tbsp brown sugar",
            "2 tbsp sesame oil",
            "4 cups cooked brown rice"
        ],
        instructions: [
            "Press and cube tofu, then pan-fry until golden",
            "Remove tofu and stir-fry vegetables until tender-crisp",
            "Add garlic, ginger, soy sauce, and brown sugar",
            "Return tofu to pan and toss to coat",
            "Serve over brown rice"
        ],
        kidTips: "The slightly sweet sauce is appealing to kids. Cut carrots into fun star shapes.",
        storage: "Keeps 2 days refrigerated",
        tags: ["iron-rich", "protein-rich", "kid-friendly"],
        source: "Asian family cooking"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { recipeDatabase };
}
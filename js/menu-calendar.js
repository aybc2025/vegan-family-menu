// Day planning data - maps each day to specific recipes
const menuCalendar = [
    // Days 1-2
    {
        days: [1, 2],
        breakfast: "banana-pb-oatmeal",
        lunch: "lentil-soup", 
        dinner: "tofu-stir-fry"
    },
    // Days 3-4
    {
        days: [3, 4],
        breakfast: "overnight-chia-pudding",
        lunch: "pesto-pasta-beans",
        dinner: "butternut-mac-cheese"
    },
    // Days 5-6
    {
        days: [5, 6],
        breakfast: "green-monster-smoothie",
        lunch: "baked-falafel",
        dinner: "veggie-burritos"
    },
    // Days 7-8
    {
        days: [7, 8],
        breakfast: "avocado-toast",
        lunch: "four-bean-chili",
        dinner: "peanut-noodles"
    },
    // Days 9-10
    {
        days: [9, 10],
        breakfast: "pumpkin-oat-muffins",
        lunch: "rainbow-veggie-bowl",
        dinner: "sweet-potato-curry"
    },
    // Days 11-12
    {
        days: [11, 12],
        breakfast: "fortified-cereal",
        lunch: "chickpea-curry",
        dinner: "veggie-fried-rice"
    },
    // Days 13-14
    {
        days: [13, 14],
        breakfast: "blueberry-pancakes",
        lunch: "minestrone-soup",
        dinner: "pita-pizzas"
    },
    // Days 15-16
    {
        days: [15, 16],
        breakfast: "tofu-scramble",
        lunch: "spinach-tofu-lasagna",
        dinner: "teriyaki-quinoa"
    },
    // Days 17-18
    {
        days: [17, 18],
        breakfast: "pb-overnight-oats",
        lunch: "sweet-potato-burritos",
        dinner: "veggie-nuggets"
    },
    // Days 19-20
    {
        days: [19, 20],
        breakfast: "pumpkin-waffles",
        lunch: "red-lentil-dal",
        dinner: "udon-stir-fry"
    },
    // Days 21-22
    {
        days: [21, 22],
        breakfast: "chocolate-smoothie-bowl",
        lunch: "veggie-sushi-bowl",
        dinner: "quinoa-tabbouleh"
    },
    // Days 23-24
    {
        days: [23, 24],
        breakfast: "baked-oatmeal",
        lunch: "white-bean-kale-stew",
        dinner: "pumpkin-lentil-curry"
    },
    // Days 25-26
    {
        days: [25, 26],
        breakfast: "besan-pancakes",
        lunch: "couscous-salad",
        dinner: "chickpea-curry"
    },
    // Days 27-28
    {
        days: [27, 28],
        breakfast: "yogurt-parfait",
        lunch: "bbq-tofu-wraps",
        dinner: "butternut-mac-cheese"
    },
    // Days 29-30
    {
        days: [29, 30],
        breakfast: "cinnamon-toast-tofu",
        lunch: "chickpea-tuna-salad",
        dinner: "veggie-fried-rice"
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { menuCalendar };
}
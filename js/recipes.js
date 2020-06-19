let recipes = [
    {
        id: 1,
        name: "Grandma Lenon's Chocolate Chip Cookies",
        recipe_img: "chocolate-chip-cookies.png",
        time_total: '40',
        time_type: 'min',
        time_label: 'Total Time',
        yield: '6',
        yield_type: 'dozen',
        yield_label: 'Yield',
        prep_time: '30',
        prep_type: 'min',
        prep_label: 'Prep Time',
        cook_time: '10',
        cook_type: 'min',
        cook_label: 'Cook Time',
        temp: '350',
        temp_label: 'Temperature',
        cuisine: 'Mexican',
        course: 'Dessert',
        skill_level: 'Beginner',
        pdf: 'Grandma Lenons Chocolate Chip Cookies',
        recipe_blurb: "My Mom has been making these since I was a child. They are still my very favorite over 50 year later. I hope you love them as much as I do!",
        ingredients: [
                    '2 cups shortening',
                    '2 cups sugar',
                    '1 cup brown sugar',
                    '4 eggs',
                    '4 cups flour',
                    '2 teaspoons salt',
                    '2 teaspoons baking soda',
                    '4 teaspoons vanilla',
                    '1 bag of chocolate chips'
                    ],
        serving_size: '1 Cookie',
        total_servings: '72',
        calories: '114',
        carbohydrates: '12',
        total_fat: '7',
        sodium: '85',
        protein: '1',
        sugar: '7',     
        instructions: [
                    'Cream shortening, add sugar gradually and cream.',
                    'Add eggs and mix.',
                    'Sift flour once, then measure and add salt, soda and sift again.',
                    'Add flour in 4 parts and mix well.',
                    'Lastly add vanilla and chocolate chips and mix well.',
                    'Scoop out nice portions onto a greased cookie sheet and bake.',
                    ],
        tips_var: [
                    'Bla Bla Bla',
                    'Bla Bla Bla',
                    'Bla Bla Bla',
                    'Bla Bla Bla'
                    ],
        tags:       [
                    'cookie',
                    'chocolate'
                    ],
    },
    {
        id: 2,
        name: "Uncle Darin's Pico De Gallo",
        recipe_img: "pico_image.jpg",
        time_total: '15',
        time_type: 'min',
        time_label: 'Total Time',
        yield: '3-4',
        yield_type: 'cups',
        yield_label: 'Yield',
        prep_time: '10',
        prep_type: 'min',
        prep_label: 'Prep Time',
        cook_time: '5',
        cook_type: 'min',
        cook_label: 'Wait Time',
        temp: null,
        temp_alt: "Don't Cook",
        temp_label: null,
        cuisine: 'Mexican',
        course: 'Side Dish',
        skill_level: 'Beginner',
        pdf: 'Uncle Darins Pico De Gallo',
        recipe_blurb: "My Mom has been making these since I was a child. They are still my very favorite over 50 year later. I hope you love them as much as I do!",
        ingredients: [
                    '3-4 medium size ripe tomatoes',
                    '1/3 medium size onion',
                    '6 sprigs cilantro',
                    '3 cloves of garlic',
                    '1 tsp garlic salt',
                    '2 Tbsp lemon juice',
                    '1/3 to 1 jalapeno (to your taste)'
                    ],
        serving_size: '1/2 Cup',
        total_servings: '8',
        calories: '19',
        carbohydrates: '3',
        total_fat: '0',
        sodium: '249',
        protein: '1',
        sugar: '2',     
        instructions: [
                    'Chop garlic and jalapenos into fine pieces (1/16-1/8” chunks).',
                    'Then chop the remaining ingredients to whatever size you desire.',
                    'Then place all of the ingredients into a bowl and mix very well.',
                    'Let sit for 5 minutes and serve with tortilla chips.'
                    ],
        tips_var: [
                    'I typically use a chopper to make my pico, so I always chop the garlic and jalapenos first to ensure that they are chopped to my liking. Next, I add the cilantro and onions and chop again. Lastly, I add the tomatoes to the mixture and chop once more, so that those chunks are bigger than the rest. Enjoy!'
                    ],
        tags:       [
                    'garlic',
                    'tomatoes',
                    'cilantro',
                    'salsa',
                    'topping'
                    ],
    },
    {
        id: 3,
        name: "Grandpa Lenon's Idaho Trail Chili",
        recipe_img: "Grandpa Lenons Idaho Trail Chili.png",
        time_total: '2',
        time_type: 'hours',
        time_label: 'Total Time',
        yield: '~4',
        yield_type: 'quarts',
        yield_label: 'Yield',
        prep_time: '30',
        prep_type: 'min',
        prep_label: 'Prep Time',
        cook_time: '90',
        cook_type: 'min',
        cook_label: 'Cook Time',
        temp: "Simmer",
        temp_alt: null,
        temp_label: 'Temperature',
        cuisine: 'American',
        course: 'Main Dish',
        skill_level: 'Intermediate',
        pdf: 'Grandpa Lenons Idaho Trail Chili',
        recipe_blurb: "My This was one of my Dads favorites. I only remember him making this a few times growing up. It was usually when we were on a week long campout. Good memories, good times and good food. It is amazing! Enjoy.",
        ingredients: [
                    '10 strips of bacon ~ 1/4 in. Chopped',
                    '2 lbs Meat',
                    '1 lg Yellow pepper',
                    '1 lg Red onion',
                    '4 jalapenos',
                    '1 tsp minced garlic',
                    '1 12 oz Water',
                    '1 cube beef bouillon',
                    '1/2 tbs kosher salt',
                    '2 tbs light brown sugar',
                    '1 1/2 tbs chili powder',
                    '1/2 tbs hot sauce',
                    '1 1/2 tsp worchestershire sauce',
                    '1-2 can chili beans',
                    '1-2 can black beans',
                    '2 cans (14 1/2 oz) diced tomatoes ~ drained'
                    ],
        serving_size: '1 1/2 Cup',
        total_servings: '12',
        calories: '403',
        carbohydrates: '32',
        total_fat: '16',
        sodium: '1205',
        protein: '32',
        sugar: '4',     
        instructions: [
                    'Chop 10 strips of bacon into 1/4 inch pieces',
                    'Combine and brown the bacon and hamburger, then drain the grease.',
                    'Add yellow pepper, red onion, jalapenos and minced garlic. Simmer till clear.',
                    'Add water, beef bouillon, salt, light brown sugar, chili powder, hot sauce and worchestershire sauce. Boil for 5 minutes.',
                    'Rinse and drain the chili and black beans. Then, drain the diced tomatoes and add everything to the mixture.',
                    'Simmer for 1 1/2 hours, make sure to stir every 15-20 minutes.'
                    ],
        tips_var: [
                    'Garnish with sharp cheddar, monteray jack, scallions and sour cream. Enjoy!'
                    ],
        tags:       [
                    'dutch oven',
                    'camping',
                    'spicy'
                    ],
    },
]
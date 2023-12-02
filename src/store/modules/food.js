export default {
    namespaced: true,
    state: {
        food: [
            { id: '1', category: 'pizza', image: 'pizza1.webp', name: 'Margherita', ingredients: 'Tomato, Mozzarella, Basil', price: 12 },
            { id: '2', category: 'pizza', image: 'pizza2.webp', name: 'Pepperoni', ingredients: 'Tomato, Mozzarella, Pepperoni', price: 15 },
            { id: '3', category: 'pizza', image: 'pizza3.webp', name: 'Vegetarian', ingredients: 'Tomato, Mozzarella, Mushrooms, Bell Peppers, Olives', price: 14 },
            { id: '4', category: 'pizza', image: 'pizza4.webp', name: 'Hawaiian', ingredients: 'Tomato, Mozzarella, Ham, Pineapple', price: 16 },
            { id: '5', category: 'dessert', image: 'dessert1.webp', name: 'Chocolate Cake', ingredients: 'Chocolate, Flour, Sugar, Eggs', price: 15 },
            { id: '6', category: 'dessert', image: 'dessert2.webp', name: 'Strawberry Cheesecake', ingredients: 'Strawberries, Cream Cheese, Graham Cracker Crust', price: 18 },
            { id: '7', category: 'dessert', image: 'dessert3.webp', name: 'Tiramisu', ingredients: 'Ladyfingers, Espresso, Mascarpone, Cocoa Powder', price: 20 },
            { id: '8', category: 'dessert', image: 'dessert4.webp', name: 'Fruit Tart', ingredients: 'Shortcrust Pastry, Custard, Fresh Fruits', price: 22 },
            { id: '9', category: 'salad', image: 'salad1.webp', name: 'Greek Salad', ingredients: 'Tomatoes, Cucumbers, Feta Cheese, Olives', price: 12 },
            { id: '10', category: 'salad', image: 'salad2.webp', name: 'Caesar Salad', ingredients: 'Romaine Lettuce, Croutons, Parmesan Cheese', price: 15 },
            { id: '11', category: 'salad', image: 'salad3.webp', name: 'Caprese Salad', ingredients: 'Tomatoes, Mozzarella Cheese, Basil, Balsamic Glaze', price: 14 },
            { id: '12', category: 'salad', image: 'salad4.webp', name: 'Cobb Salad', ingredients: 'Lettuce, Avocado, Bacon, Blue Cheese, Chicken', price: 16 },
            { id: '13', category: 'main dish', image: 'mainDish1.webp', name: 'Grilled Lobster Tail', ingredients: 'Lobster Tail, Butter, Lemon, Garlic', price: 75 },
            { id: '14', category: 'main dish', image: 'mainDish2.webp', name: 'Filet Mignon', ingredients: 'Beef Tenderloin, Salt, Pepper, Red Wine Reduction', price: 90 },
            { id: '15', category: 'main dish', image: 'mainDish3.webp', name: 'Truffle Risotto', ingredients: 'Arborio Rice, Truffle Oil, Parmesan Cheese, Chicken Broth', price: 65 },
            { id: '16', category: 'main dish', image: 'mainDish4.webp', name: 'Pan-Seared Sea Bass', ingredients: 'Sea Bass, Olive Oil, Lemon, Herbs', price: 80 },
            { id: '17', category: 'beverage', image: 'beverage1.webp', name: 'Iced Coffee', ingredients: 'Coffee, Ice, Milk, Sugar', price: 4 },
            { id: '18', category: 'beverage', image: 'beverage2.webp', name: 'Fresh Orange Juice', ingredients: 'Oranges, Ice', price: 5 },
            { id: '19', category: 'beverage', image: 'beverage3.webp', name: 'Mint Lemonade', ingredients: 'Lemons, Mint, Sugar, Ice', price: 6 },
            { id: '20', category: 'beverage', image: 'beverage4.webp', name: 'Berry Smoothie', ingredients: 'Berries, Yogurt, Honey, Ice', price: 7 }
        ],
    },
    getters: {
        getPizza: state => state.food.filter((foodItem) => foodItem.category === 'pizza'),
        getDesert: state => state.food.filter((foodItem) => foodItem.category === 'dessert'),
        getSalad: state => state.food.filter((foodItem) => foodItem.category === 'salad'),
        getMainDish: state => state.food.filter((foodItem) => foodItem.category === 'main dish'),
        getBeverage: state => state.food.filter((foodItem) => foodItem.category === 'beverage'),
    },
    mutations: {
        setFood(state, food) {
            state.food = food;
        },
    },
    actions: {
        async fetchFood({ commit }) {
            const url = 'https://foodAPI.com/food';
            const food = await fetch(url);
            if (typeof food === 'Array' && food.length > 0) {
                commit('setFood', food);
            }
        },
    }
}
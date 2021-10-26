export default {
    namespaced: true,
    state: {
        food: [
            { category:'pizza', image: 'img1.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'pizza', image: 'img2.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'pizza', image: 'img3.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'pizza', image: 'img4.png', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
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
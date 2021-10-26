export default {
    namespaced: true,
    state: {
        food: [
            { id:'1', category:'pizza', image: 'img1.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'2', category:'pizza', image: 'img2.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'3', category:'pizza', image: 'img3.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'4', category:'pizza', image: 'img4.png', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'5', category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'6', category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'7', category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'8', category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'9', category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'10', category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'11', category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'12', category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'13', category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'14', category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'15', category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'16', category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'17', category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'18', category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'19', category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            { id:'20', category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
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
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        food: {
            '1':{ category:'pizza', image: 'img1.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '2':{ category:'pizza', image: 'img2.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '3':{ category:'pizza', image: 'img3.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '4':{ category:'pizza', image: 'img4.png', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '5':{ category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '6':{ category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '7':{ category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '8':{ category:'dessert', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '9':{ category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '10':{ category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '11':{ category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '12':{ category:'salad', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '12':{ category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '13':{ category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '14':{ category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '15':{ category:'main dish', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '16':{ category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '17':{ category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '18':{ category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
            '19':{ category:'beverage', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
        },
        cart: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 3 },
            { productId: 11, quantity: 1 },
            { productId: 16, quantity: 3 },
            { productId: 20, quantity: 4 },
        ],
        foodGallery: [ 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg' ]
    },
    getters: {
        getPizza: state => state.food.filter((foodItem) => foodItem.category === 'pizza'),
        getDesert: state => state.food.filter((foodItem) => foodItem.category === 'dessert'),
        getSalad: state => state.food.filter((foodItem) => foodItem.category === 'salad'),
        getMainDish: state => state.food.filter((foodItem) => foodItem.category === 'main dish'),
        getBeverage: state => state.food.filter((foodItem) => foodItem.category === 'beverage'),
        getCartItems: state => {
            let foodObj = {};
            let cartItems = [];
            for (item of state.cart) {
                foodObj = {
                    item: state.food[item.productId].name,
                    price: state.food[item.productId].price,
                    quantity: item.quantity
                }  
                cartItems.push(foodObj);
            }
            return cartItems;
        }
    },
    mutations: {
        setFood(state, food) {
            state.food = food;
        },
        setCart(state, shoppingCart) {
            state.cart = shoppingCart;
        },
        emptyCart(state) {
            state.cart = [];
        },
        setFoodGallery(state, images) {
            state.foodGallery = images;
        }
    },
    actions: {
        async fetchFood({ commit }) {
            const url = 'https://foodAPI.com/food';
            const food = await fetch(url);
            if (typeof food === 'Array' && food.length > 0) {
                commit('setFood', food);
            }
        },
        async fetchCart({ commit }) {
            const url = 'https://foodAPI.com/cart';
            const cart = await fetch(url);
            if (typeof cart === 'Array' && cart.length > 0) {
                commit('setCart', cart)
            }
        },
        async fetchFoodGallery({ commit }) {
            const url = 'https://foodAPI.com/gallery';
            const images = await(url);
            if (typeof images === 'Array' && images.length > 0) {
                commit('setFoodGallery', images);
            }
        }
    }
});
  
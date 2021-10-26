export default {
    state: {
        cart: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 3 },
            { productId: 11, quantity: 1 },
            { productId: 16, quantity: 3 },
            { productId: 20, quantity: 4 },
        ],
    },
    getters: {
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
        setCart(state, shoppingCart) {
            state.cart = shoppingCart;
        },
        emptyCart(state) {
            state.cart = [];
        },
    },
    actions: {
        async fetchCart({ commit }) {
            const url = 'https://foodAPI.com/cart';
            const cart = await fetch(url);
            if (typeof cart === 'Array' && cart.length > 0) {
                commit('setCart', cart)
            }
        },
    }
}
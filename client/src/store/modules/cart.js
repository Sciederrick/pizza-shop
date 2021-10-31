import food from "./food";

export default {
    namespaced: true,
    state: {
        cart: [
            { productId: '1', quantity: 2 },
            { productId: '2', quantity: 3 },
            { productId: '5', quantity: 1 },
            { productId: '14', quantity: 3 },
            { productId: '11', quantity: 4 },
        ],
        recentSearchIndex: null
    },
    getters: {
        getCartItems: state => {
            let foodObj = null;
            let cartItems = [];
            state.cart.forEach(cartItem => {
                food.state.food.forEach(foodItem => {
                    if(foodItem.id === cartItem.productId) {
                        foodObj = {
                            name: foodItem.name,
                            price: foodItem.price,
                            quantity: cartItem.quantity
                        };
                        cartItems.push(foodObj);
                    }
                });
            });
            return cartItems;
        },
        getTotalCost: ( _ , getters) => {
            let totalCost = 0;
            const cart = getters.getCartItems;
            cart.forEach(cartItem => {
                totalCost += cartItem.price * cartItem.quantity;
            });
            return totalCost;
        } 
    },
    mutations: {
        addToCart(state, cartItem) {
            state.cart.push(cartItem);
            console.log({cartItem}, "addToCart")
        },
        setCart(state, shoppingCart) {
            state.cart = shoppingCart;
        },
        emptyCart(state) {
            state.cart = [];
        },
        modifyCart(state) {
            state.cart[state.recentSearchIndex].quantity++; 
        },
        setRecentSearchIndex(state, id) {
            state.recentSearchIndex = id;
        }
    },
    actions: {
        async fetchCart({ commit }) {
            const url = 'https://foodAPI.com/cart';
            try {
                const cart = await fetch(url);
                if (typeof cart === 'Array' && cart.length > 0) {
                    commit('setCart', cart)
                }
            } catch (err) {
                /**
                 * @TODO: Implement error handler
                 */
                console.log(err);
            }
        },
        async addToCart({ commit }, cartItem) {
            const url = 'https://foodAPI.com/cart';
            try {
                let cart = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(cartItem)
                });
                cart = await cart.json();
                if (cart.status === 200) {
                    commit('addToCart', cartItem);
                } else {
                    throw `${cart.status} - ${cart.statusText}`;
                }                 
            } catch (err) {
                /**
                 * @TODO: Implement error handler
                 */
                console.log(err); 
            }
        }
    }
}
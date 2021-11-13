<template>
    <div class="max-h-72 md:max-h-64 lg:max-h-72 overflow-auto">
        <h2 class="font-semibold">Your order</h2>
        <hr/>
        <div v-if="cart.length && cart.length > 0">
            <div v-for="item in cart" :key="item.productId">
								<div v-if="item.quantity"
										class="flex flex-row justify-between border-b border-gray-200">
									<div>{{item.quantity}}&nbsp;&times;&nbsp;{{item.name}}</div>
									<div class="grid grid-auto-row">
											<div> $&nbsp;{{item.price.toFixed(2)}} </div>
											<div class="grid grid-cols-2">
													<button @click.prevent="decrementQuantity(item.id, item.quantity)"
															type="submit"
															class="btn btn-white border border-r-0 py-1 px-2 mt-0">&minus;</button>
													<button @click.prevent="incrementQuantity(item.id, item.quantity)"
															type="submit"
															class="btn btn-white border py-1 px-2 mt-0">&plus;</button>
											</div>
									</div>
								</div>
            </div>
        </div>
        <!-- Empty Cart -->
        <div v-else
            class="grid place-items-center h-48">
            <figure>
                <img :src="require(`@/assets/images/shopping-cart.svg`)" class="w-24 h-24 mx-auto opacity-30"/>
                <figcaption class="py-3 text-gray-400">Cart is empty. Add menu items.</figcaption>
            </figure>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ShoppingCartCustomerOrder',
    computed: mapGetters('cart', {
        'cart': 'getCartItems'
    }),
    methods: {
        incrementQuantity(id, quantity) {
						if(quantity < 15) {
							let itemIndex = this.$store.getters['cart/getCartItemIndexById'](id) ?? -1;
							if(itemIndex > -1) {
									this.$store.commit('cart/setRecentSearchIndex', itemIndex);
									this.$store.commit('cart/modifyCart', true);
							}
						}
        },
        decrementQuantity(id, quantity) {
						if(quantity > 0) {
							let itemIndex = this.$store.getters['cart/getCartItemIndexById'](id) ?? -1;
							if(itemIndex > -1) {
									this.$store.commit('cart/setRecentSearchIndex', itemIndex);
									this.$store.commit('cart/modifyCart', false);
							}
						}
						if(quantity === 1) {
							this.$store.commit('cart/removeFromCart');
						}
        },
    }
}
</script>
<template>
    <section class="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        <header class="md:col-span-2 lg:col-span-3 my-10">
        <!-- Header Image -->
            <figure class="grid place-items-center mx-auto">
                <img :src="require(`@/assets/images/categories/${category}.svg`)" class="w-32 h-32 opacity-30" :alt="`header image of ${category} section`"/>
            </figure>
            <h2 class="font-hairline text-4xl text-center text-gray-300">{{category}}</h2>
        </header>
        <section class="m-4 md:m-2" 
            v-for="item in data" :key="item.id">
            <!-- Image -->
            <figure 
                v-if="item.image" 
                @click="showMoreFoodInfo(item.id)"
                class="w-32 h-32 mx-auto rounded-full overflow-hidden bg-red-100 py-5 cursor-pointer">
                <img :src="require(`@/assets/images/gallery/${item.image}`)" class="img-default" :alt="`image of ${item.name}`"/>
            </figure>
            <!-- Image missing -->
            <figure v-else 
                class="w-24 h-24 grid place-items-center mx-auto opacity-10">
                <img :src="require('@/assets/images/no-image-photography.svg')" class="img-default"/>
            </figure>
            <div class="grid place-items-center">
                <div class="text-center my-4">
                    <h2>{{item.name}}</h2>
                    <p class="italic text-sm w-2/3 mx-auto">{{item.ingredients}}</p>
                    <p class="text-red-500">{{item.prize}}</p>
                </div>
                <button @click.prevent = "addToCart(item.id)"
                    type="submit" class="relative btn btn-black">
                    ORDER NOW
                    <div v-show = "isInTheCart(cartItems, item.id)"
                        class="absolute -right-1 -top-1 w-5 h-5 flex justify-center items-center rounded-full bg-yellow-600 text-white p-3 text-sm font-mono bg-opacity-75 text-opacity-100">
                        {{ $store.getters['cart/getCartItemQuantityById'](item.id) }}
                    </div>
                </button>
            </div>
            <more-food-info-component 
                v-if="item.id === moreFoodInfoToggleId"
                @closeMoreFoodInfoModal = "moreFoodInfoToggleId=null" 
                :foodItem = "item" 
                :quantity = "$store.getters['cart/getCartItemQuantityById'](item.id)"
                :isItemInTheCart="isInTheCart(cartItems, item.id)"
                />
        </section>
    </section>
</template>

<script>
export default {
    components: {
        'more-food-info-component': () => import(/* webpackChunkName: "moreFoodInfoComponent" */'@/components/menuOrderOnline/food/MoreFoodInfo.vue')
    },
    props: {
        category: { type: String, required: true },
        data: { type:Array, required:true }
    },
    data() {
        return {
            moreFoodInfoToggleId: null
        }
    },
    computed: {
        cartItems() {
            return this.$store.state.cart.cart;
        }
    },
    methods: {
        showMoreFoodInfo(id) {
            if (id) this.moreFoodInfoToggleId = id;
        },
        isInTheCart(cart, productId) {
            let isInTheCart = false;
            cart.forEach((cartItem, index) => {
                if (cartItem.productId === productId) {
                    this.$store.commit('cart/setRecentSearchIndex', index);
                    isInTheCart = true;
                }
            });
            return isInTheCart;
        },
        addToCart(productId) {
            let isInTheCart = false;
            isInTheCart = this.isInTheCart(this.cartItems, productId);
            if (isInTheCart) {
                this.$store.commit('cart/modifyCart', true);
            } else {
                this.$store.commit('cart/addToCart', { productId:productId, quantity:1 });
            } 
                

            //  @TODO: Sync cart with localstorage
            // this.$store.dispatch("cart/addToCart", item)
            //  Send cart to the server after the customer creates an order
        }
    }
}
</script>
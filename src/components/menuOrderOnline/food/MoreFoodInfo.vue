<template>
    <div class="z-50 fixed inset-0 grid place-items-center" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="w-5/6 md:w-2/3 md:h-2/3 lg:w-1/2 mx-auto bg-white overflow-auto">
            <button @click="$emit('closeMoreFoodInfoModal')"
                class="btn fixed top-4 right-6 md:right-20 lg:right-72 lg:mr-8 text-white text-2xl md:text-3xl">
                <fa-icon :icon="['fas', 'times']"/>
            </button>
            <figure class="w-full mx-auto overflow-hidden bg-red-100 text-center">
                <img :src="require(`@/assets/images/gallery/${foodItem.image}`)" class="img-more-shopping-info" :alt="`image of ${foodItem.name}`"/>
            </figure>
            <div class="px-4 my-4">
                <h2>{{foodItem.name}}</h2>
                <p class="italic text-sm">{{foodItem.ingredients}}</p>
            </div>
            <div class="sticky bottom-0 inset-x-0 px-4 md:py-2 grid grid-cols-2 md:flex md:justify-between bg-white shadow-xl">
                <div class="w-24 my-2 grid grid-cols-3 border-t border-b border-r-0 border-l-0 border-gray-400">
                    <button @click.prevent="decrementQuantity(foodItem.id)"
                        class="btn-cart-quantity btn-white" type="submit" name="buttonDecrement">&minus;</button>
                    <span class="text-center py-1 px-2">{{prodQuantity||0}}</span>
                    <button @click.prevent="incrementQuantity(foodItem.id)"
                        class="btn-cart-quantity btn-white" type="submit" name="buttonIncrement">&plus;</button>
                </div>
                <span class="py-2 text-center text-red-500">${{foodItem.price.toFixed(2)}}</span>
                <button v-show = "!isInTheCart"
                    @click.prevent="addToCart(foodItem.id)"
                    type="submit"
                    class="col-span-2 btn btn-black w-full md:w-auto rounded-none">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        foodItem: {
            type: Object,
            required: true
        },
        quantity: {
            type: Number,
            default: 0
        },
        isItemInTheCart: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            prodQuantity: this.quantity,
            isInTheCart: this.isItemInTheCart
        }
    },
    methods: {
        incrementQuantity(id) {
            if(this.prodQuantity < 15) {
                ++this.prodQuantity;
                if(this.isInTheCart) {
                    let index = this.$store.getters['cart/getCartItemIndexById'](id) ?? -1;
                    if(index > -1) {
                        this.$store.commit('cart/setRecentSearchIndex', index);
                        this.$store.commit('cart/modifyCart', true);
                    }
                }
            }
        },
        decrementQuantity(id) {
            if(this.prodQuantity > 0) {
                --this.prodQuantity;
                if(this.isInTheCart) {
                    let index = this.$store.getters['cart/getCartItemIndexById'](id) ?? -1;
                    if(index > -1) {
                        this.$store.commit('cart/setRecentSearchIndex', index);
                        this.$store.commit('cart/modifyCart', false);
                    }
                }
            }
            if(this.isInTheCart && this.prodQuantity === 0) {
                this.isInTheCart = false;
                this.$store.commit('cart/removeFromCart');
            }
        },
        addToCart(productId) {
            if(this.prodQuantity > 0) {
                this.$store.commit('cart/addToCart', { productId:productId, quantity:this.prodQuantity });
                this.isInTheCart = true;
            }
            //  @TODO: Sync cart with localstorage
            // this.$store.dispatch("cart/addToCart", item)
            //  Send cart to the server after the customer creates an order
        }
    },
}
</script>
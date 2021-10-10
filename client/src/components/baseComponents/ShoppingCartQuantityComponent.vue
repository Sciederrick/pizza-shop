<template>
    <div class="w-24 my-2 grid grid-cols-3 border-t border-b border-r-0 border-l-0 border-gray-400">
        <button @click.prevent="decrementQuantity"
            class="btn-cart-quantity btn-white" type="submit" name="buttonIncrement">&minus;</button>
        <span class="text-center py-1 px-2">{{quantity}}</span>
        <button @click.prevent="incrementQuantity"
            class="btn-cart-quantity btn-white" type="submit" name="buttonDecrement">&plus;</button>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCartQuantityComponent',
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        incrementQuantity() {
            if(this.quantity < 15) this.quantity++;
        },
        decrementQuantity() {
            if(this.quantity > 0) this.quantity--;
        }
    }
}
</script>
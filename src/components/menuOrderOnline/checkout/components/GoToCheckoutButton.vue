<template>
    <div>
        <!-- Visible only on md to lg screens -->
        <p class="hidden md:flex md:w-2/3 md:mx-auto md:justify-between">
            <span>TOTAL</span><span>$&nbsp;{{ totalCost.toFixed(2) }}</span>
        </p>
        <button type="submit" :class="[isCartEmpty ? 'btn-faded cursor-not-allowed' : 'btn-black']"
            class="btn lg:w-2/3 px-0 flex flex-row justify-between md:justify-center mx-auto py-0 text-lg">
            <div @click.self.prevent="goToCheckout" class="col-span-4 py-2 pl-3 md:w-full">
                GO TO CHECKOUT
                <!-- Visible only on md to lg screens -->
                <fa-icon class="hidden md:inline" :icon="['fas', 'angle-right']" size="1x" />
            </div>
            <div @click.self.prevent="goToCheckout" class="text-center py-2 md:hidden">$&nbsp;{{ totalCost.toFixed(2) }}</div>
            <!-- Visible only on sm screens -->
            <button @click.self.prevent="toggleCustomerOrder" type="submit"
                class="btn my-0 border-l border-gray-500 z-50 pt-2 w-12 md:hidden">
                <fa-icon @click.self.prevent="toggleCustomerOrder" class="md:hidden" :icon="['fas', 'angle-down']"
                    size="2x" />
            </button>
        </button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'GoToCheckoutButton',
    computed: {
        ...mapGetters('cart', {
            'totalCost': 'getTotalCost'
        }),
        isCartEmpty() {
            return this.$store.state.cart.cart.length == 0;
        }
    },    
    methods: {
        goToCheckout() {
            if(!this.isCartEmpty) this.$store.commit('app/toggle', 'checkout');
        },
        toggleCustomerOrder() {
            this.$store.commit('app/toggle', 'customerOrder');
        }
    }
}
</script>




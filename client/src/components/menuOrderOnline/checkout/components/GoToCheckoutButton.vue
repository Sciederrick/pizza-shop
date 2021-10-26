<template>
    <div>
        <!-- Visible only on md to lg screens -->
        <p class="hidden md:flex md:w-2/3 md:mx-auto md:justify-between">
            <span>TOTAL</span><span>$0.00</span>
        </p>
        <button 
            @click.self.prevent="$emit('goToCheckout')"
            type="submit"
            class="btn btn-black lg:w-2/3 px-0 flex flex-row justify-between md:justify-center mx-auto py-0 text-lg">
            <div @click.self.prevent="goToCheckout"
                class="col-span-4 py-2 pl-3">
                GO TO CHECKOUT
                <!-- Visible only on md to lg screens -->
                <fa-icon class="hidden md:inline" :icon="['fas','angle-right']" size="1x"/>
            </div>
            <div @click.self.prevent="goToCheckout"
                class="text-center py-2 md:hidden">$22.00</div>
            <!-- Visible only on sm screens -->
            <button @click.self.prevent="toggleCustomerOrder"
                type="submit"
                class="btn my-0 border-l border-gray-500 pt-2 w-12 md:hidden">
                <fa-icon @click.self.prevent="$emit('toggleCustomerOrder')"
                    class="md:hidden" :icon="['fas','angle-down']" size="2x"/>
            </button>
        </button>
    </div>
</template>
<script>
export default {
    name: 'GoToCheckoutButton',
    methods: {
        goToCheckout() {
            this.$store.commit('app/toggle','checkout');
        },
        toggleCustomerOrder() {
            this.$store.commit('app/toggle','customerOrder');
        }
    }
}
</script>


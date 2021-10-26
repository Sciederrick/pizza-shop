<template>
    <div class="fixed bottom-0 inset-x-0 w-full bg-white z-40 md:static">
        <div :class="{ hidden : !toggle }" class="md:block w-5/6 lg:w-2/3 py-4 mx-auto">
            <customer-account/>

            <div class="mt-12 mb-8">
                <h2 class="font-semibold">Pizza Palace</h2>
                <p class="text-xs py-1">Biashara St, Nairobi</p>
                <p v-if="true" class="text-xs text-green-700"><fa-icon class="mr-2" :icon="['fas','circle']"/>Open now</p>
                <p v-else class="text-xs text-red-600"><fa-icon class="mr-2" :icon="['fas','circle']"/>Closed</p>
            </div>

            <delivery-address/>

            <customer-order/>
        </div>
        <go-to-checkout-button
            @toggleCustomerOrder="toggle=!toggle"
            @goToCheckout="$emit('goToCheckout')"/>
    </div>
</template>

<script>
import GoToCheckoutButton from '@/components/menuOrderOnline/checkout/components/GoToCheckoutButton.vue'
export default {
    name: 'ShoppingCart',
    components: {
        'go-to-checkout-button': GoToCheckoutButton,
        'customer-order': () => import(/* webpackChunkName: "CustomerOrder" */'@/components/menuOrderOnline/shoppingCart/CustomerOrder.vue'),
        'customer-account': () => import(/* webpackChunkName: "CustomerAccount" */'@/components/menuOrderOnline/shoppingCart/CustomerAccount.vue'),
        'delivery-address': () => import(/* webpackChunkName: "DeliveryAddress" */'@/components/menuOrderOnline/shoppingCart/DeliveryAddress.vue')
    },
    data() {
        return {
            toggle: false
        }
    }
}
</script>
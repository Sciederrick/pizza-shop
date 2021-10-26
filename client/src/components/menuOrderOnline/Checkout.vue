<template>
    <div class="fixed inset-0 w-screen h-screen bg-gray-700 bg-opacity-70 z-50 grid place-items-center px-4">
        <div class="container bg-white h-almost-screen overflow-y-auto">
            <checkout-progress/>
            <component :is="activeComponent" @changeActiveComponent="activeComponent=$event"/>
        </div>
    </div>
</template>

<script>
import CheckoutProgress from '@/components/menuOrderOnline/checkout/components/CheckoutProgress.vue';
import CheckoutOrder from '@/components/menuOrderOnline/checkout/Order.vue'
export default {
    name: 'Checkout',
    components: {
        'checkout-progress' : CheckoutProgress,
        'checkout-order' : CheckoutOrder,
        'checkout-order-confirmation' : () => import(/* webpackChunkName: "CheckoutOrderConfirmation" */'@/components/menuOrderOnline/checkout/OrderConfirmation.vue'),
        'checkout-order-ready' : () => import(/* webpackChunkName: "CheckoutOrderReady" */'@/components/menuOrderOnline/checkout/OrderReady.vue')
    },
    data() {
        return {
            activeComponent: 'checkout-order'
        }
    }
}
</script>
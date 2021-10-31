<template>
    <div>
        <h2 class="font-semibold">Your order</h2>
        <div v-for="item in cart" :key="item.productId"
            class="flex flex-row justify-between border-b border-gray-200 my-3">
            <div>{{item.quantity}}&nbsp;&times;&nbsp;<span class="pl-8">{{item.name}}</span></div>
            <div>$&nbsp;{{item.price.toFixed(2)}}</div>
        </div>
        <hr/>
        <div class="flex justify-between py-3">
            <span class="text-left">Menu items cost</span>
            <span class="text-right">{{totalCost.toFixed(2)}}</span>
        </div>
        <hr/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'CheckoutCustomerOrder',
    computed: mapGetters('cart', {
        'cart': 'getCartItems',
        'totalCost': 'getTotalCost'
    })
}
</script>
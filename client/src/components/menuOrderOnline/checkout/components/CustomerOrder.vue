<template>
    <div>
        <h2 class="font-semibold">Your order</h2>
        <div v-for="i in 10" :key="i"
            class="flex flex-row justify-between border-b border-gray-200 my-3">
            <div class="">1&nbsp;&times;&nbsp;<span class="pl-8">Capriciosa</span></div>
            <div> $22.00 </div>
        </div>
        <hr/>
        <div class="flex justify-between py-3">
            <span class="text-left">Menu items cost</span>
            <span class="text-right">$77.99</span>
        </div>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'checkout-customer-order'
}
</script>
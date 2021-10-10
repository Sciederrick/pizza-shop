<template>
    <div class="bg-gray-200 p-3">
        <div class="w-full h-32 flex justify-center items-center bg-white">
            <figure class="w-20 h-20 float-left">
                <img :src="require('@/assets/images/waiting-time.svg')" class="img-default" alt="waiting time icon"/>
            </figure>
            <div class="pl-3">
                <h2 class="text-gray-800">Sent to the restaurant</h2>
                <p class="text-sm text-gray-500">Wait until we confirm it</p>
            </div>
        </div>
        <div class="grid grid-auto-rows md:grid-cols-12 lg:gap-4 clear-both p-3 bg-white my-3">
            <checkout-customer-order class="md:col-span-6 lg:col-span-7 max-h-auto"/>
            <div class="md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 py-6 md:py-10">
                <table class="table-auto text-base">
                    <tr class="border-b border-gray-300">
                        <td class="text-sm lg:text-base pr-3 lg:py-3">Order type</td>
                        <td class="pl-3 mb-1 lg:py-3 border-l border-gray-300">{{orderInfo.orderType}}</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="text-sm lg:text-base pr-3 lg:py-3">Pickup address</td>
                        <td class="pl-3 mb-1 lg:py-3 border-l border-gray-300">{{orderInfo.pickupAddress}}</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="text-sm lg:text-base pr-3 lg:py-3">Payment</td>
                        <td class="pl-3 mb-1 lg:py-3 border-l border-gray-300">{{orderInfo.payment}}</td>
                    </tr>
                    <tr>
                        <td class="text-sm lg:text-base pr-3 lg:py-3">Customer</td>
                        <td class="pl-3 mb-1 lg:py-3 border-l border-gray-300">{{orderInfo.customer}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between -mx-3 -mb-3 px-6 py-3 text-sm bg-indigo-400 text-white">
            <div class="order-2 md:order-1 py-2 text-left">
                <fa-icon :icon="['far','question-circle']"/>
                In case of any inquiries contact the restaurant: +254 743 709 788
            </div>
            <div class="order-1 md:order-2 py-2 md:text-right">ORDER ID 2021-07-10 20:15</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderConfirmation',
    components: {
        'checkout-customer-order': () => import(/* webpackChunkName : "CustomerOrder" */'@/components/checkout/components/CustomerOrder.vue')
    },
    data() {
        return {
            orderInfo: {
                orderType:'pickup',
                pickupAddress:'Nairobi, Biashara st.',
                payment:'Card',
                customer:'derrickmbarani@gmail.com'
            }
        }
    }
}
</script>


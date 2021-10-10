<template>
    <div class="bg-white py-0 px-4 flex justify-between items-center">
        <ul class="flex">
            <li class="md:flex md:items-center">
                <div class="flex items-center"
                    v-if="true"
                    >
                    <div class="w-8 h-8 border rounded-full border-gray-700 grid place-items-center font-mono">1</div>
                    <span class="pl-3">Order</span>
                </div>
                <div class="flex items-center"
                    v-else
                    >
                    <fa-icon :icon="['fas', 'check-circle']" size="2x"/>
                </div>
                <div class="hidden md:block h-1 md:w-40 lg:w-64 ml-3 bg-gray-700"></div>
            </li>
            <li class="md:flex md:items-center">
                <div class="flex items-center pl-3"
                    v-if="true"
                    >
                    <div class="w-8 h-8 border rounded-full border-gray-700 grid place-items-center font-mono">2</div>
                    <span class="pl-3 hidden">Confirmation</span>
                </div>
                <div class="flex items-center pl-3"
                    v-else
                    >
                    <fa-icon :icon="['fas', 'check-circle']" size="2x"/>
                </div>
                <div class="hidden md:block h-1 md:w-40 lg:w-64 ml-3 bg-gray-700"></div>
            </li>
            <li>
                <div  class="flex items-center pl-3"
                    v-if="true"
                    >
                <div class="w-8 h-8 border rounded-full border-gray-700 grid place-items-center font-mono">3</div>
                <span class="pl-3 hidden">Ready</span>
                </div>
                <div class="flex items-center pl-3"
                    v-else
                    >
                    <fa-icon :icon="['fas', 'check-circle']" size="2x"/>
                </div>
            </li>
        </ul>
        <button @click = "$emit('closeCheckoutModal')"
            class="btn border-none p-3 pr-0 m-0 text-4xl">&#215;</button>
    </div>
</template>

<script>
export default {
    name: 'CheckoutProgress'

}
</script>

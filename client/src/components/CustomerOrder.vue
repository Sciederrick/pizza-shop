<template>
    <div class="max-h-72 md:max-h-64 lg:max-h-72 overflow-auto">
        <h2 class="font-semibold">Your order</h2>
        <hr/>
        <div v-if="true">
            <div v-for="i in 12" :key="i"
                class="flex flex-row justify-between border-b border-gray-200">
                <div>1&nbsp;&times;&nbsp;Capriciosa</div>
                <div class="grid grid-auto-row">
                    <div> $22.00 </div>
                    <div class="grid grid-cols-2">
                        <button class="btn btn-white border border-r-0 p-1 mt-0">&minus;</button>
                        <button class="btn btn-white border p-1 mt-0">&plus;</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Empty Cart -->
        <div v-else
            class="grid place-items-center h-48">
            <figure>
                <img :src="require(`@/assets/images/shopping-cart.svg`)" class="w-24 h-24 mx-auto opacity-30"/>
                <figcaption class="py-3 text-gray-400">Cart is empty. Add menu items.</figcaption>
            </figure>
        </div>
    </div>
</template>
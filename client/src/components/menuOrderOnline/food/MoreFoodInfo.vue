<template>
    <div class="z-50 fixed inset-0 grid place-items-center" style="background-color: rgba(0, 0, 0, 0.75);">
        <div class="w-5/6 md:w-2/3 md:h-2/3 lg:w-1/2 mx-auto bg-white overflow-auto">
            <button @click="$emit('closeMoreFoodInfoModal')"
                class="btn fixed top-4 right-6 md:right-20 lg:right-72 lg:mr-8 text-white text-2xl md:text-3xl">
                <fa-icon :icon="['fas', 'times']"/>
            </button>
            <figure class="w-full mx-auto overflow-hidden bg-red-100 text-center">
                <img :src="require(`@/assets/images/gallery/${foodItem.image}`)" class="img-more-shopping-info" :alt="`image of ${foodItem.name}`"/>
            </figure>
            <div class="px-4 my-4">
                <h2>{{foodItem.name}}</h2>
                <p class="italic text-sm">{{foodItem.ingredients}}</p>
            </div>
            <div class="sticky bottom-0 inset-x-0 px-4 md:py-2 grid grid-cols-2 md:flex md:justify-between bg-white shadow-xl">
                <div class="w-24 my-2 grid grid-cols-3 border-t border-b border-r-0 border-l-0 border-gray-400">
                    <button @click.prevent="decrementQuantity"
                        class="btn-cart-quantity btn-white" type="submit" name="buttonIncrement">&minus;</button>
                    <span class="text-center py-1 px-2">{{quantity}}</span>
                    <button @click.prevent="incrementQuantity"
                        class="btn-cart-quantity btn-white" type="submit" name="buttonDecrement">&plus;</button>
                </div>
                <span class="py-2 text-center text-red-500">${{foodItem.price.toFixed(2)}}</span>
                <button class="col-span-2 btn btn-black w-full md:w-auto rounded-none">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        foodItem: {
            type: Object,
            required: true
        }
    },
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
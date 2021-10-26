<template>
  <div class="about">
    <hero class="h-72"/>
    <div class="md:grid md:grid-cols-5 md:gap-2">
      <!-- Goods: 🥤, 🍕, 🥗, 🍗, 🍰 etc-->
      <article class="md:col-span-3">
        <secondary-nav/>
        
        <food category="pizza" :data="getPizza" /><!-- 🍕  pizza -->
        
        <food category="main dish" :data="getMainDish" /><!-- 🍗 main dish-->
        
        <food category="beverage" :data="getBeverage" /><!-- 🥤 beverage-->
        
        <food category="dessert" :data="getDesert" /><!-- 🍰 dessert-->
        
        <food category="salad" :data="getSalad" /><!-- 🥗 salad-->
      </article>

      <!-- Shopping Cart -->
      <article class="md:col-span-2">
        <shopping-cart class="md:sticky md:top-0"/>
      </article>

      <!-- Checkout Modal-->
      <article>
        <checkout v-show="checkoutModalToggle"/>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SecondaryNav from '@/components/layout/MenuOrderOnlineNav.vue'
import Food from '@/components/menuOrderOnline/Food.vue'
import ShoppingCart from '@/components/menuOrderOnline/ShoppingCart.vue'
export default {
  name: 'MenuOrderOnline',
  components: {
    'secondary-nav':SecondaryNav,
    'food': Food,
    'shopping-cart': ShoppingCart,
    'checkout': () => import(/* webpackChunkName: "Checkout" */'@/components/menuOrderOnline/Checkout.vue')
  },
  computed: {
    checkoutModalToggle() {
      return this.$store.state.app.toggles.checkout;
    },
    ...mapGetters('food', [
      'getPizza',
      'getDesert',
      'getSalad',
      'getMainDish',
      'getBeverage'
    ])
  },
}
</script>
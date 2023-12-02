<template>
  <div class="about">
    <hero class="h-72"/>
    <div class="md:grid md:grid-cols-5 md:gap-2">
      <!-- Goods: 🥤, 🍕, 🥗, 🍗, 🍰 etc-->
      <article class="md:col-span-3">
        <secondary-nav/>
        
        <section class="divide-y" id="you">
          <food :data="getPizza" id="Pizza"/><!-- 🍕  pizza -->
          
          <food :data="getMainDish" id="MainDishes"/><!-- 🍗 main dish-->
          
          <food :data="getBeverage" id="Salads"/><!-- 🥤 beverage-->
          
          <food :data="getDesert" id="Desserts"/><!-- 🍰 dessert-->
          
          <food :data="getSalad" id="Beverages"/><!-- 🥗 salad-->
        </section>
      </article>

      <!-- Shopping Cart -->
      <article class="md:col-span-2">
        <shopping-cart class="md:sticky md:top-0"/>
      </article>

      <!-- Checkout Modal-->
      <article>
        <checkout v-show="checkoutModalToggle"/>
      </article>

      <!-- Auth -->
      <auth-signup/>
      <auth-signin/>
      <auth-forgotpassword/>
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
    'auth-signup': () => import(/* webpackChunkName: "SignUp" */'@/components/auth/SignUp.vue'),
    'auth-signin': () => import(/* webpackChunkName: "SignIn" */'@/components/auth/SignIn.vue'),
    'auth-forgotpassword': () => import(/* webpackChunkName: "ForgotPassword" */'@/components/auth/ForgotPassword.vue'),
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
<template>
  <div class="about">
    <hero class="h-72"/>
    <div class="md:grid md:grid-cols-5 md:gap-2">
      <!-- Goods: 🥤, 🍕, 🥗, 🍗, 🍰 etc-->
      <article class="md:col-span-3">
        <secondary-nav/>
        
        <food :category="pizza.category" :data="pizza.data" /><!-- 🍕  pizza -->
        
        <food :category="mainDish.category" :data="mainDish.data" /><!-- 🍗 main dish-->
        
        <food :category="beverage.category" :data="beverage.data" /><!-- 🥤 beverage-->
        
        <food :category="dessert.category" :data="dessert.data" /><!-- 🍰 dessert-->
        
        <food :category="salad.category" :data="salad.data" /><!-- 🥗 salad-->
      </article>

      <!-- Shopping Cart -->
      <article class="md:col-span-2">
        <shopping-cart class="md:sticky md:top-0"
          @goToCheckout="toggle=true"/>
      </article>

      <!-- Checkout -->
      <article>
        <checkout v-show="toggle"
          @closeCheckoutModal="toggle=false"/>
      </article>
    </div>
  </div>
</template>

<script>
import SecondaryNav from '@/components/layout/MenuOrderOnlineNav.vue'
import Food from '@/components/Food.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
  name: 'MenuOrderOnline',
  components: {
    'secondary-nav':SecondaryNav,
    'food': Food,
    'shopping-cart': ShoppingCart,
    'checkout': () => import(/* webpackChunkName: "Checkout"*/'@/components/Checkout.vue')
  },
  data () {
    return {
      toggle: false,
      pizza: {
        category: 'pizza',
        data: [
          { id:'1', image: 'img1.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'2', image: 'img2.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'3', image: 'img3.jpg', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'4', image: 'img4.png', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
        ]
      },
      mainDish: {
        category: 'main dish',
        data: [
          { id:'1', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'2', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'3', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'4', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
        ]
      },
      beverage: {
        category: 'beverage',
        data: [
          { id:'1', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'2', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'3', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'4', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
        ]
      },
      dessert: {
        category: 'dessert',
        data: [
          { id:'1', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'2', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'3', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'4', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
        ]
      },
      salad: {
        category: 'salad',
        data: [
          { id:'1', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'2', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'3', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 },
          { id:'4', image: '', name: 'some Food', ingredients: 'ingredient 1, ingredient 2, ingredient 3', price: 30 }
        ]
      }
    }
  }
}
</script>
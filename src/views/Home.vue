<template>
  <div class="home">
    <hero>
      <router-link :to="{ name:'MenuOrderOnline' }"
        class="font-semibold border-4 border-white bg-white font-bold text-2xl lg:text-4xl py-2 px-3 shadow-2xl hover:bg-white hover:text-green-500 hover:border-green-600">
        <h1>Menu&nbsp;&nbsp;/&nbsp;&nbsp;Order Online</h1>
      </router-link>
    </hero>
    <article>
      <section class="home-text-default">
        <h2 class="heading">EXCLUSIVELY FRESH INGREDIENTS</h2>
        <hr class="heading-underline"/>
        <p>In our kitchen we make sure that the dishes are prepared only from the highest quality products. Thanks to this, our pizza is a delicacy that can not be resisted!</p>
      </section>
      <section class="w-full lg:h-96 overflow-hidden">
       <figure>
        <img alt="pizza with fresh ingredients" :src="require('@/assets/images/pizza-with-fresh-ingredients.jpg')" class="img-default lg:object-bottom"/>
       </figure>
      </section>
    </article>
    <contact/>
  </div>
</template>

<script>
import Contact from '@/components/home/Contact.vue'
export default {
  name: 'Home',
  components: {
    'contact': Contact
  }
}
</script>

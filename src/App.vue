<template>
  <div id="app" class="2xl:container 2xl:mx-auto text-lg">
    <app-nav/>
    <main>
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import Nav from '@/components/layout/Nav.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;600&display=swap');
#app {
  font-family: 'Overpass', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
}
</style>



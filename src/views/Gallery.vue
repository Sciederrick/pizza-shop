<template>
  <div class="about">
    <hero class="h-72"/>
    <article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8 lg:m-12">
    <!-- @TODO :- OnClick or hover show a modal that looks like a frame of the image -->
      <section 
        @click="toggleImageFocus(index)"
        :class="[isFocusImage && focusedImageId === index?'fixed inset-0 w-screen h-screen bg-gray-900 bg-opacity-90 z-50':'min-w-sm ']"
        class="cursor-pointer"
        v-for="(img, index) in collection" :key="index">
        <figure
               :class="[isFocusImage && focusedImageId === index?'fixed inset-0 mx-auto my-32 z-50 w-2/3 h-2/3':'h-72']">
          <img :src="require(`@/assets/images/gallery/${img}`)" 
                class="img-default"
                alt=""/>
        </figure>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      collection: ['pizza1.webp', 'mainDish2.webp', 'mainDish3.webp', 'beverage4.webp', 'mainDish1.webp', 'salad4.webp'],
      isFocusImage: false,
      focusedImageId: null
    }
  },
  methods: {
    toggleImageFocus(index) {
      this.isFocusImage = !this.isFocusImage;
      this.focusedImageId = index;
    }
  }
}
</script>
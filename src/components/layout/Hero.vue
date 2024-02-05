<template>
    <article class="relative hero-section w-full overflow-hidden mt-5 lg:m-0">
        <figure class="lg:hidden">
            <img alt="Delicious Pizza Image" :src="require('@/assets/images/hero-image-potrait.jpg')" class="img-default"/>
        </figure>
        <figure class="hidden lg:block">
            <img alt="Delicious Pizza Image" :src="require('@/assets/images/hero-image.jpg')" class="img-default"/>
        </figure>
        <div class="absolute bottom-32 lg:bottom-24 w-full grid place-items-center z-10">
            <slot>
                <!-- Menu / Order Online Home page Button goes here -->
            </slot>
        </div>
    </article>
</template>
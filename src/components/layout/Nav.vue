<template>
<nav class="z-20 lg:static" :class="[toggle?'fixed inset-x-0 top-0':'static']">
	<div class="relative w-full mx-auto grid place-items-center shadow-xl md:shadow-none bg-white lg:grid-cols-1">

		<button @click="toggle=!toggle"
			class="lg:hidden text-4xl p-4 bg-transparent"><!--Hamburger Button -->
			&#9776;
		</button>

		<router-link :to="{ name:'Home' }" class="z-20">
			<figure class="lg:absolute lg:top-2 lg:left-24 lg:left-16 lg:bg-white lg:px-4">
				<img alt="Pizza Palace logo" :src="require('@/assets/logo.svg')">
			</figure>
		</router-link>
		<ul :class="{ hidden:!toggle }"
			class="text-center my-4 lg:m-0 lg:py-2 lg:ml-64 lg:grid lg:grid-flow-col lg:w-2/3 lg:text-lg">
			<li class="py-4">
				<router-link :to="{ name:'Home' }">Home</router-link>
			</li> 
			<li class="py-4">
				<router-link :to="{ name:'About' }">About Us</router-link>
			</li>
			<li class="py-4">
				<router-link :to="{ name:'Gallery' }">Gallery</router-link>
			</li>
			<li class="py-4">
				<router-link :to="{ name:'TableBooking' }">Table Booking</router-link>
			</li>
			<li class="py-4">
				<router-link :to="{ name: 'MenuOrderOnline' }">Menu/Order Online</router-link>
			</li>
			<li class="py-4">
				<router-link :to="{ name:'Home', hash:'#Contact' }">Contact</router-link>
			</li>
		</ul>
	</div>
</nav>
</template>

<script>
export default {
	name: 'AppNav',
	data () {
		return {
			toggle:false
		}
	}
}
</script>


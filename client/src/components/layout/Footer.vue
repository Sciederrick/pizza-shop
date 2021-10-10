<template>
    <footer class="mt-4 bg-gray-100">
        <ul
			class="text-center text-gray-500 py-6 lg:grid lg:grid-flow-col lg:w-1/2 lg:mx-auto">
			<li class="pb-1">
				<router-link :to="{ name:'Home' }">Home</router-link>
			</li> 
			<li class="pb-1">
				<router-link :to="{ name:'Gallery' }">Gallery</router-link>
			</li>
			<li class="pb-1">
				<router-link :to="{ name:'TableBooking' }">Table Booking</router-link>
			</li>
			<li class="pb-1">
				<router-link :to="{ name: 'MenuOrderOnline' }">Menu/Order Online</router-link>
			</li>
			<li class="pb-1">
				<router-link :to="{ name:'Home', hash:'#Contact' }">Contact</router-link>
			</li>
		</ul>
    </footer>
</template>
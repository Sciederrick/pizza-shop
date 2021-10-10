<template>
    <nav class="sticky top-0 z-10 bg-white md:font-semibold">
        <div class="w-full mx-auto grid grid-cols-1">
            <button @click="toggle=!toggle"
                class="md:hidden p-4 bg-transparent"><!--Toggle sections -->
                <span v-if="!toggle"><fa-icon :icon="['fas','arrow-alt-circle-down']"/>&nbsp;&nbsp;show sections</span>
                <span v-else><fa-icon :icon="['fas','arrow-alt-circle-up']"/>&nbsp;&nbsp;hide sections</span>
            </button>
            <div>
                <ul :class="{ hidden:!toggle }"
                    class="py-2 md:flex md:justify-start md:flex-wrap text-base">
                    <li class="px-4 py-1 m-2 rounded bg-black text-base text-white">
                        <router-link :to="{ hash:'Pizza' }">Pizza</router-link>
                    </li> 
                    <li class="px-4 py-1 m-2 rounded">
                        <router-link :to="{ hash:'MainDishes' }">Main&nbsp;dishes</router-link>
                    </li>
                    <li class="px-4 py-1 m-2 rounded">
                        <router-link :to="{ hash:'Salads' }">Salads</router-link>
                    </li>
                    <li class="px-4 py-1 m-2 rounded">
                        <router-link :to="{ hash:'Desserts' }">Desserts</router-link>
                    </li>
                    <li class="px-4 py-1 m-2 rounded">
                        <router-link :to="{ hash: 'Beverages' }">Beverages</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
	name: 'MenuOrderOnlineNav',
	data () {
		return {
			toggle:false
		}
	}
}
</script>
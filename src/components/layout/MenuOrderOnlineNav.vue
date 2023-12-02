<template>
    <nav class="sticky top-0 z-10 bg-white md:font-semibold">
        <div class="w-full mx-auto grid grid-cols-1">
            <button @click="toggle = !toggle" class="md:hidden p-4 bg-transparent"><!--Toggle sections -->
                <span v-if="!toggle"><fa-icon :icon="['fas', 'arrow-alt-circle-down']" />&nbsp;&nbsp;show sections</span>
                <span v-else><fa-icon :icon="['fas', 'arrow-alt-circle-up']" />&nbsp;&nbsp;hide sections</span>
            </button>
            <div>
                <ul :class="{ hidden: !toggle }" class="py-2 md:flex md:justify-start md:flex-wrap text-base">
                    <li class="p-2">
                        <button :class="{ 'menu-active': activeSection == 'Pizza'}" class="menu-btn" @click="scrollToMenuSection('Pizza')">Pizza</button>
                    </li>
                    <li class="p-2">
                        <button :class="{ 'menu-active': activeSection == 'MainDishes' }" class="menu-btn"
                            @click="scrollToMenuSection('MainDishes')">Main&nbsp;dishes</button>
                    </li>
                    <li class="p-2">
                        <button :class="{ 'menu-active': activeSection == 'Salads' }" class="menu-btn" @click="scrollToMenuSection('Salads')">Salads</button>
                    </li>
                    <li class="p-2">
                        <button :class="{ 'menu-active': activeSection == 'Desserts' }" class="menu-btn"
                            @click="scrollToMenuSection('Desserts')">Desserts</button>
                    </li>
                    <li class="p-2">
                        <button :class="{ 'menu-active': activeSection == 'Beverages' }" class="menu-btn"
                            @click="scrollToMenuSection('Beverages')">Beverages</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MenuOrderOnlineNav',
    data() {
        return {
            toggle: false,
            activeSection: 'Pizza'
        }
    },
    methods: {
        scrollToMenuSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                this.activeSection = sectionId;
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
}
</script>

<style scoped>
.menu-btn {
    @apply px-4 py-1 rounded w-full md:w-auto;
}
.menu-active {
    @apply bg-black text-base text-white;
}

</style>
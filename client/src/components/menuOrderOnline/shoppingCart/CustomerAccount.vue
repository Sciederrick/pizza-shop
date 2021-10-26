<template>
    <div class="relative float-right mt-6">
        <button @click.prevent="toggle=!toggle"
            type="submit" class="custom-select w-auto pl-3 pr-2 float-right text-gray-700">Account&nbsp;<fa-icon :icon="['fas','angle-down']"/></button>
        <div v-show="toggle"
            class="absolute top-5 right-0 w-56 py-1.5 bg-white rounded-md shadow-lg">
            <button @click.prevent="openSignInModal"
                type="submit" class="custom-select custom-select-option">Sign in</button>
            <button @click.prevent="openSignUpModal"
                type="submit" class="custom-select custom-select-option">Register</button>
            <hr class="my-2"/>
            <button type="submit" class="custom-select custom-select-option">Language</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: false
        }
    },
    methods: {
        openSignUpModal() {
            this.$store.commit('app/toggle', 'signUp');
        },
        openSignInModal() {
            this.$store.commit('app/toggle', 'signIn');
        }
    }
}
</script>

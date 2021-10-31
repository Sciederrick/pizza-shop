<template>
    <div class="relative float-right mt-6">
        <button @click.prevent="toggleAccountOptions"
            type="submit" class="custom-select w-auto pl-3 pr-2 float-right text-gray-700">Account&nbsp;<fa-icon :icon="['fas','angle-down']"/></button>
        <div v-show="accountToggle"
            class="absolute top-5 right-0 w-56 py-1.5 bg-white rounded-md shadow-lg">
            <button @click.prevent="openSignInModal"
                type="submit" class="custom-select custom-select-option">Sign in</button>
            <button @click.prevent="openSignUpModal"
                type="submit" class="custom-select custom-select-option">Register</button>
            <hr class="my-2"/>
            <button @click.prevent="toggleLanguageOptions"
                type="submit" class="relative custom-select custom-select-option">Language
                <div v-if="languageToggle"
                    class="absolute top-2 -left-32 w-32 py-1.5 pl-6 bg-white rounded shadow-lg">
                    <ul>
                        <li>English</li>
                    </ul>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        accountToggle() {
            return this.$store.state.app.toggles.account;
        },
        languageToggle() {
            return this.$store.state.app.toggles.language;
        }
    },
    methods: {
        openSignUpModal() {
            this.$store.commit('app/toggle', 'signUp');
        },
        openSignInModal() {
            this.$store.commit('app/toggle', 'signIn');
        },
        toggleAccountOptions() {
            this.$store.commit('app/toggle', 'account');
        },
        toggleLanguageOptions() {
            this.$store.commit('app/toggle', 'language');
        }
    }
}
</script>

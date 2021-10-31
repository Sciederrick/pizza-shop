<template>
    <div v-if = "forgotPasswordToggle"
        class="z-50 fixed inset-0 grid place-items-center" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="w-5/6 md:w-2/3 lg:w-1/2 mx-auto bg-white overflow-auto">
            <button @click="closeForgotPasswordModal"
                class="btn fixed top-4 right-6 md:right-20 lg:right-72 lg:mr-8 text-white text-2xl md:text-3xl">
                <fa-icon :icon="['fas', 'times']"/>
            </button>
            <form class="custom-page-placement mb-4">
                <p class="pb-4">Forgot Your password? Not to worry</p>
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="email">Email *</label>
                    <input class="form-input" 
                        type="email" id="email" name="email"/>
                </div>
                <button class="btn btn-blue"
                    type="submit">SUBMIT</button>
            </form>
            <div class="custom-page-placement text-center">
                <button @click.prevent = "goToSignIn"
                    class="btn btn-transparent hover:underline">Sign In</button>
                <button @click.prevent = "goToSignUp"
                    class="btn btn-transparent hover:underline">Create your Account</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ForgotPassword',
    computed: {
        forgotPasswordToggle() {
            return this.$store.state.app.toggles.forgotPassword;
        }
    },
    methods: {
        closeForgotPasswordModal() {
            this.$store.commit('app/toggle', 'forgotPassword');
        },
        goToSignIn() {
            this.$store.commit('app/toggle', 'forgotPassword');
            this.$store.commit('app/toggle', 'signIn');
        },
        goToSignUp() {
            this.$store.commit('app/toggle', 'forgotPassword');
            this.$store.commit('app/toggle', 'signUp');
        }
    }
}
</script>
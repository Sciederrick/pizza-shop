<template>
    <div v-show = "signInToggle"
        class="z-50 fixed inset-0 grid place-items-center" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="w-5/6 md:w-2/3 lg:w-1/2 mx-auto bg-white overflow-auto">
            <button @click="closeSignInModal"
                class="btn fixed top-4 right-6 md:right-20 lg:right-72 lg:mr-8 text-white text-2xl md:text-3xl">
                <fa-icon :icon="['fas', 'times']"/>
            </button>
            <form class="custom-page-placement mt-8 mb-3">
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="email">Email *</label>
                    <input class="form-input" 
                        type="email" id="email" name="email"/>
                </div>
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="password">Password *</label>
                    <input class="form-input" 
                        type="password" id="password" name="password"/>
                </div>
                <button class="btn btn-blue"
                    type="submit">LOGIN</button>
            </form>
            <div class="custom-page-placement my-1">
                <div class="text-center">- or -</div>
                <ul>
                    <li>
                        <button class="btn btn-white w-full border">
                            <fa-icon :icon="['fab', 'google']" size="1x"/>&nbsp;&nbsp;Login with Google
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-white w-full border">
                            <fa-icon :icon="['fab', 'facebook']" size="1x"/>&nbsp;&nbsp;Login with Facebook
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-white w-full border">
                            <fa-icon :icon="['fab', 'apple']" size="1x"/>&nbsp;&nbsp;Login with Apple
                        </button>
                    </li>
                </ul>
                <div class="text-center">
                    <button @click.prevent = "goToForgotPassword"
                        class="btn btn-transparent hover:underline">Forgot Password</button>
                    <button @click.prevent = "goToSignUp"
                        class="btn btn-transparent hover:underline">Create your Account</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignIn',
    computed: {
        signInToggle() {
            return this.$store.state.app.toggles.signIn;
        }
    },
    methods: {
        closeSignInModal() {
            this.$store.commit('app/toggle', 'signIn');
        },
        goToForgotPassword() {
            this.$store.commit('app/toggle', 'signIn');
            this.$store.commit('app/toggle', 'forgotPassword');
        },
        goToSignUp() {
            this.$store.commit('app/toggle', 'signIn');
            this.$store.commit('app/toggle', 'signUp');
        }
    }
}
</script>
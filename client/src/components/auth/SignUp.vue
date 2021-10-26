<template>
    <div v-show = "signUpToggle"
        class="z-50 fixed inset-0 grid place-items-center" style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="w-5/6 md:w-2/3 mx-auto bg-white overflow-auto">
            <button @click="closeSignUpModal"
                class="btn fixed top-0 lg:top-2 right-6 md:right-20 lg:right-64 lg:mr-4 text-white text-2xl md:text-3xl text-red-600 md:text-white">
                <fa-icon :icon="['fas', 'times']"/>
            </button>
            <form class="custom-page-placement mb-2">
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
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="confirm-password">Confirm Password *</label>
                    <input class="form-input" 
                        type="password" id="confirm-password" name="confirm-password"/>
                </div>
                <div class="flex justify-start">
                    <input class="mt-2"
                        type="checkbox" id="promotional-emails-subscription" name="promotional-emails-subscription"/>
                    <span class="pl-2 lg:py-2 text-sm">I agree to receiving commercial information at the given e-mail address (not obligatory)</span>
                </div>
                <button class="btn btn-blue my-4"
                    type="submit">REGISTER</button>
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
                <button @click.prevent = "goToSignIn"
                    class="btn btn-transparent hover:underline">Already have an Account? Sign in</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    computed: {
        signUpToggle() {
            return this.$store.state.app.toggles.signUp;
        }
    },
    methods: {
        closeSignUpModal() {
            this.$store.commit('app/toggle', 'signUp');
        },
        goToSignIn() {
            this.$store.commit('app/toggle', 'signUp')
            this.$store.commit('app/toggle', 'signIn')
        }
    }
}
</script>
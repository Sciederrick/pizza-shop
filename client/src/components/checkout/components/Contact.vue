<template>
    <div class="p-3 my-3 bg-white">
        <h2 class="pb-3">Contact</h2>
        <div>
            <form class="md:grid md:grid-cols-2 md:gap-4">
                <div class="contact-form-input-wrapper md:my-0">
                    <label class="contact-form-label"
                            for="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" 
                        class="form-input" />
                </div>
                <div class="contact-form-input-wrapper md:my-0">
                    <label class="contact-form-label"
                            for="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" 
                        class="form-input" />
                </div>
                <div class="contact-form-input-wrapper md:my-0">
                    <label class="contact-form-label"
                            for="email">Email *</label>
                    <input type="email" id="email" name="email" 
                        class="form-input" />
                </div>
                <div class="contact-form-input-wrapper md:my-0">
                    <label class="contact-form-label"
                            for="phoneNumber">Phone Number *</label>
                    <input type="phoneNumber" id="phoneNumber" name="phoneNumber" 
                        class="form-input" />
                </div>
                <!-- Add comment to order toggler-->        
                <p @click="toggle=!toggle"
                    class="text-sm">
                    <fa-icon :icon="['fas','plus-circle']" class="mr-3"/>Add comment to order
                </p>
                <!-- Add comment to order -->        
                <div  v-show="toggle"
                    class="contact-form-input-wrapper md:col-span-2">
                    <label class="contact-form-label" 
                        for="orderComments">Comment *</label>
                    <textarea class="form-input -mb-2"
                        rows="2" cols="50" name="orderComments" id="orderComments"></textarea>
                </div>
            </form>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutContactForm',
    data() {
        return {
            toggle: false
        }
    }
}
</script>
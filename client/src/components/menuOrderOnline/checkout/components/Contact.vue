<template>
    <div class="p-3 my-3 bg-white">
        <h2 class="pb-3">Checkout</h2>
        <div>
            <form name="checkout" method="POST" class="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <div class="checkout-form-input-wrapper md:my-0">
                        <label class="checkout-form-label"
                                for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName"
                            @change="setOrderValue('firstName')"
                            v-model.trim="firstName" 
                            pattern="[A-Za-z0-9]+"
                            class="form-input" required/>
                    </div>
                    <ul class="list-disc list-inside flex">
                        <li v-show="formErrors.firstName.missingInput" class="pl-2 text-xs text-red-600">missing required input</li>
                        <li v-show="formErrors.firstName.invalidInput" class="pl-2 text-xs text-red-600">invalid input</li>
                    </ul>
                </div>
                <div>
                    <div class="checkout-form-input-wrapper md:my-0">
                        <label class="checkout-form-label"
                                for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName"
                            @change="setOrderValue('lastName')"
                            v-model.trim="lastName" 
                            pattern="[A-Za-z0-9]+"
                            class="form-input" required/>
                    </div>
                    <ul class="list-disc list-inside flex">
                        <li v-show="formErrors.lastName.missingInput" class="pl-2 text-xs text-red-600">missing required input</li>
                        <li v-show="formErrors.lastName.invalidInput" class="pl-2 text-xs text-red-600">invalid input</li>
                    </ul>
                </div>
                <div>
                    <div class="checkout-form-input-wrapper md:my-0">
                        <label class="checkout-form-label"
                                for="email">Email *</label>
                        <input type="email" id="email" name="email"
                            @change="setOrderValue('email')"
                            v-model.trim="email" 
                            pattern="^(.+)@(.+)$"
                            class="form-input" required/>
                    </div>
                    <ul class="list-disc list-inside flex">
                        <li v-show="formErrors.email.missingInput" class="pl-2 text-xs text-red-600">missing required input</li>
                        <li v-show="formErrors.email.invalidInput" class="pl-2 text-xs text-red-600">invalid input</li>
                    </ul>
                </div>
                <div>
                    <div class="checkout-form-input-wrapper md:my-0">
                        <label class="checkout-form-label"
                                for="phoneNumber">Phone Number *</label>
                        <input type="phoneNumber" id="phoneNumber" name="phoneNumber"
                            @change="setOrderValue('phone')"
                            v-model.trim="phone" 
                            pattern="[0-9]+"
                            class="form-input" required/>
                    </div>
                    <ul class="list-disc list-inside flex">
                        <li v-show="formErrors.phone.missingInput" class="pl-2 text-xs text-red-600">missing required input</li>
                        <li v-show="formErrors.phone.invalidInput" class="pl-2 text-xs text-red-600">invalid input</li>
                    </ul>
                </div>
                <!-- Add comment to order toggler-->        
                <p @click="toggle=!toggle"
                    class="text-sm">
                    <fa-icon :icon="['fas','plus-circle']" class="mr-3"/>Add comment to order
                </p>
                <!-- Add comment to order -->
                <div class=" md:col-span-2">        
                    <div  v-show="toggle"
                        class="checkout-form-input-wrapper">
                        <label class="checkout-form-label" 
                            for="orderComments">Comment *</label>
                        <textarea class="form-input -mb-2"
                            @change="setOrderValue('comment')"
                            v-model.trim="comment"
                            pattern="[A-Za-z0-9]+"
                            rows="2" cols="50" name="orderComments" id="orderComments"></textarea>
                    </div>
                    <ul v-show="formErrors.message.invalidInput" class="list-disc list-inside">
                        <li class="pl-2 text-xs text-red-600">invalid input</li>
                    </ul>
                </div>
            </form>            
        </div>
    </div>
</template>

<script>
import setOrderValue from './../mixins/setOrderValueMixin.js'
export default {
    name: 'CheckoutcheckoutForm',
    data() {
        return {
            toggle: false,
            firstName: null,
            lastName: null,
            phone: null,
            email: null,
            comment: null,
            formErrors: {
                firstName: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.firstName,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.firstName
                },
                lastName: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.lastName,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.lastName
                },
                phone: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.phone,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.phone
                },
                email: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.email,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.email
                },
                message: {
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.message
                }
            }
        }
    },
    methods: {
        setOrderValue(field) {
            console.log(field)
            this.$store.commit('order/setOrder', { name: field, value: this[field] });
        }
    },
    mixins: [setOrderValue]
}
</script>


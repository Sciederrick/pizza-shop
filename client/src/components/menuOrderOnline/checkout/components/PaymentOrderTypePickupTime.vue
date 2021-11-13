<template>
    <div class="px-3 bg-white md:grid md:grid-cols-3 gap-4">
        <div class="py-3">
            <h2>Payment</h2>
            <form name="checkout">
                <div>
                    <select name="paymentType" 
                        v-model="paymentType"
                        @change="setOrderValue('paymentType')"
                        class="custom-select-checkout" required>
                        <option value="null">---select---</option>
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>
                    </select>
                    <div v-show="formErrors.paymentType.missingInput" class="text-xs text-red-600">this field is required</div>
                    <div v-show="formErrors.paymentType.invalidInput" class="text-xs text-red-600">invalid input</div>
                </div>
            </form>
        </div>
        <div class="py-3">
            <h2>Order Type</h2>
            <form name="checkout">
                <div>
                    <select name="orderType"
                        v-model="orderType"
                        @change="setOrderValue('orderType')" 
                        class="custom-select-checkout" required>
                        <option value="null">---select---</option>
                        <option value="delivery">Delivery</option>
                        <option value="pickup">Pickup</option>
                    </select>
                    <div v-show="formErrors.orderType.missingInput" class="text-xs text-red-600">this field is required</div>
                    <div v-show="formErrors.orderType.invalidInput" class="text-xs text-red-600">invalid input</div>
                </div>
            </form>
        </div>
        <div class="py-3">
            <h2>When</h2>
            <form name="checkout">
                <div>
                    <select name="pickupTime"
                        v-model="pickupTime"
                        @change="setOrderValue('pickupTime')" 
                        class="custom-select-checkout" required>
                        <option value="null">---select---</option>
                        <option value="now">As soon as possible</option>
                        <option value="specified time">Specific time</option>
                    </select>
                    <div v-show="formErrors.pickupTime.missingInput" class="text-xs text-red-600">this field is required</div>
                    <div v-show="formErrors.pickupTime.invalidInput" class="text-xs text-red-600">invalid input</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import setOrderValue from './../mixins/setOrderValueMixin.js'
export default {
    name: 'PaymentOrderTypePickupTimeForm',
    data() {
        return {
            paymentType: null,
            orderType: null,
            pickupTime: null,
            formErrors: {
                paymentType: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.paymentType,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.paymentType
                },
                orderType: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.orderType,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.orderType
                },
                pickupTime: {
                    missingInput: this.$store.state.order.formHandling.fieldsWithMissingValues.pickupType,
                    invalidInput: this.$store.state.order.formHandling.fieldsWithInvalidValues.pickupType
                }
            }
        }
    },
    mixins: [setOrderValue]
}
</script>

<template>
	<div class="bg-gray-200 p-3 lg:grid lg:grid-cols-7 lg:gap-2">
		<div class="col-span-4">
				<payment-order-type-pickup-time/>
				<checkout-contact-form/>
				<opt-in-checkboxes/>
		</div>
		<div class="lg:col-start-6 lg:col-span-2">
				<customer-order class="bg-white p-3 my-6 h-2/3 overflow-y-auto"/>
				<form name="checkout">
					<button 
						type="submit"
						@click.prevent="submitForm"
						class="btn btn-black w-full"
						>Create Order</button>
				</form>
		</div>
	</div>  
</template>

<script>
import PaymentOrderTypePickupTime from '@/components/menuOrderOnline/checkout/components/PaymentOrderTypePickupTime.vue';
import ContactForm from '@/components/menuOrderOnline/checkout/components/Contact.vue'
import OptInCheckboxes from '@/components/menuOrderOnline/checkout/components/OptInCheckboxes.vue'
import CustomerOrder from '@/components/menuOrderOnline/checkout/components/CustomerOrder.vue'
export default {
	name: 'Order',
	components: {
			'payment-order-type-pickup-time': PaymentOrderTypePickupTime,
			'checkout-contact-form': ContactForm,
			'opt-in-checkboxes': OptInCheckboxes,
			'customer-order': CustomerOrder
	},
	data() {
		return {
			formProperties: [
							'paymentType', 
							'orderType', 
							'pickupTime', 
							'firstName', 
							'lastName', 
							'phone', 
							'email' 
			],
			inputPatterns: {
				username: "[A-Za-z0-9]+",
				email: "^(.+)@(.+)$",
				phone: "[0-9]+",
				message: "[A-Za-z0-9]+"
			},
			fieldsWithMissingValues: {},
			fieldsWithInvalidValues: {}
		}
	},
	methods: {
		checkForMissingRequiredFields(form) {
			this.formProperties.forEach(formProperty => {
				if(!(formProperty in form)) {
					this.fieldsWithMissingValues[formProperty] = true;
				}
			});
		},
		checkForInvalidInputValues(form) {
			let regex = new RegExp(this.inputPatterns.username);
			if(regex.test(form.firstName)) this.fieldsWithInvalidValues.firstName = regex.test(form.firstName);
			if(regex.test(form.lastName)) this.fieldsWithInvalidValues.lastName = regex.test(form.lastName);

			regex = new RegExp(this.inputPatterns.email);
			if(regex.test(form.email)) this.fieldsWithInvalidValues.email = regex.test(form.email);

			regex = new RegExp(this.inputPatterns.phone);
			if(regex.test(form.phone)) this.fieldsWithInvalidValues.phone = regex.test(form.phone);
		},
		validateFormValues(form) {
			this.checkForMissingRequiredFields(form);
			this.checkForInvalidInputValues(form);
		},
		submitForm() {
			this.$emit('changeActiveComponent', 'checkout-order-confirmation');
			// console.log(this.$store.state.order.formHandling);
			// this.validateFormValues(this.$store.state.order.order);
			// if(Object.values(this.fieldsWithMissingValues).length === 0 && Object.values(this.fieldsWithInvalidValues).length === 0) {
			// 	this.$emit('changeActiveComponent', 'checkout-order-confirmation');
			// } else {
			// 	if(Object.values(this.fieldsWithMissingValues).length !== 0) {
			// 		this.$store.commit('order/setFieldsWithMissingValues', this.fieldsWithMissingValues);
			// 	}
			// 	if(Object.values(this.fieldsWithInvalidValues).length !== 0) {
			// 		this.$store.commit('order/setFieldsWithInvalidValues', this.fieldsWithInvalidValues);
			// 	}
			// }
		}
	}
}
</script>
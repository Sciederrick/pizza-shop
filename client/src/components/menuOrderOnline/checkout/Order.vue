<template>
	<div class="bg-gray-200 p-3 lg:grid lg:grid-cols-7 lg:gap-2">
		<div class="col-span-4">
				<payment-order-type-pickup-time/>
				<checkout-contact-form/>
				<opt-in-checkboxes/>
		</div>
		<div class="lg:col-start-6 lg:col-span-2">
				<customer-order class="bg-white p-3 my-6"/>
				<button @click="$emit('changeActiveComponent', 'checkout-order-confirmation')"
					class="btn btn-black w-full">Create Order</button>
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
	}
}
</script>
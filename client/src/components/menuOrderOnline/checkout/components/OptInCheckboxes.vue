<template>
	<div class="bg-white p-3 text-sm md:text-base">
		<form name="checkout">
			<div class="py-3">
				<input @change="setOrderValue('isCreateAccount')"
					v-model="isCreateAccount"
					type="checkbox" name="isCreateAccount"/>&nbsp;&nbsp;Create account (optional)
			</div>
			<div class="">
				<input @change="setOrderValue('isReceiveEmailPromos')"
					v-model="isReceiveEmailPromos"
					type="checkbox" name="isReceiveEmailPromos"/>&nbsp;&nbsp;I want to receive promos and other information through email
			</div>
			<div class="">
				<input @change="setOrderValue('isReceiveSmsPromos')"
					v-model="isReceiveSmsPromos"
					type="checkbox" name="isReceiveSmsPromos"/>&nbsp;&nbsp;I want to receive promos and other information through sms
			</div>
		</form>
	</div>
</template>

<script>
import setOrderValue from './../mixins/setOrderValueMixin.js'
export default {
	name: 'OptInCheckboxes',
	data() {
		return {
			isCreateAccount: null,
			isReceiveEmailPromos: null,
			isReceiveSmsPromos: null
		}
	},
	mixins: [setOrderValue]
}
</script>
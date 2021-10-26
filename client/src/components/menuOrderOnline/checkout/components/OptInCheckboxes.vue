<template>
	<div class="bg-white p-3 text-sm md:text-base">
		<form>
			<div class="py-3">
				<input type="checkbox" name="isCreateAccount"/>&nbsp;&nbsp;Create account (optional)
			</div>
			<div class="">
				<input type="checkbox" name="isReceiveEmailPromos"/>&nbsp;&nbsp;I want to receive promos and other information through email
			</div>
			<div class="">
				<input type="checkbox" name="isReceiveSmsPromos"/>&nbsp;&nbsp;I want to receive promos and other information through sms
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'OptInCheckboxes'
}
</script>
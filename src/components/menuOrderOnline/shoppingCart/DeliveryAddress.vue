<template>
    <div class="mb-8">
        <select name="isDelivery"
                class="form-input border border-gray-800">
            <option value="true">&nbsp;&nbsp;DELIVERY</option>
            <option value="false">&nbsp;&nbsp;PICKUP</option>
        </select>
        <p class="text-xs cursor-pointer pt-4 pb-2"><fa-icon :icon="['fas','map-marker-alt']"/>&nbsp;&nbsp;<span class="underline">Enter delivery address</span></p>
    </div>
</template>
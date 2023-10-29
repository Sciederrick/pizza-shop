<template>
    <div id="OrderReady">
        <div>
            <fa-icon :icon="['fas', 'check-circle']" size="4x" color="green"/>
            <h2 class="pt-6 text-xl">Your order is ready!</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderReady'
}
</script>

<style scoped>
#OrderReady {
    height:75vh;
    display: grid;
    place-items: center;
    text-align: center;
}
</style>

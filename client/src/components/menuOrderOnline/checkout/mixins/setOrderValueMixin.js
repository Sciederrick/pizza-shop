export default {
    methods: {
        setOrderValue(field) {
            this.$store.commit('order/setOrder', { name: field, value: this[field] });
        }
    }
}
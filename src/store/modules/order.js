export default {
    namespaced: true,
    state: {
        order: {},
        formHandling: {
            fieldsWithMissingValues:{},
            fieldsWithInvalidValues:{}
        }
    },
    mutations: {
        setOrder(state, field) {
            state.order[field.name] = field.value;
        },
        setFieldsWithMissingValues(state, fields) {
            state.formHandling.fieldsWithMissingValues = {...fields};
        },
        setFieldsWithInvalidValues(state, fields) {
            state.formHandling.fieldsWithInvalidValues = {...fields};
        }
    },
}
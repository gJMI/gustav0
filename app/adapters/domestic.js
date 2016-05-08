import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    createRecord(store, type, query) {
        /*jshint unused:false*/
        var data = {};
        var serializer = store.serializerFor(type.modelName);
        var url = `${this.host}/${this.namespace}/orders/payments/domestic`; //orders/payments/domestic
        serializer.serializeIntoHash(data, type, query, {
            includeId: false
        });
        return this.ajax(url, "POST", {
            data: data
        });
    }
});
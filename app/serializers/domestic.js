import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize: function(snapshot, options) {
        var json = {
            amount: snapshot.attr('amount'),
            transferDate: snapshot.attr('transferDate'),
            sender: snapshot.attr('sender'),
            receiver: snapshot.attr('receiver'),
            receiverName: snapshot.attr('receiverName'),
            senderName: snapshot.attr('senderName')
        };
        if (options.includeId) {
            json.POST_ID_ = snapshot.id;
        }
        return json;
    },
    normalizeSaveResponse(store, type, payload) {
        return {
            data: {
                id: payload.id,
                type: type.modelName,
                attributes: {
                    amount: payload.amount,
                    transferDate: payload.transferDate,
                    sender: payload.sender,
                    receiver: payload.receiver,
                    receiverName: payload.receiverName,
                    senderName: payload.senderName
                }
            }
        };
    }

});
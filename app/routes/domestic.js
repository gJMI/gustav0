import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        sendDomestic(order) {
            Ember.Logger.debug("Order: "+order);
            Ember.Logger.debug("Transfer date: " + order.get('transferDate'));
            var x=this.store.createRecord('domestic', {
                sender: {
                  number: order.get('senderAccount'),
                  bankCode: order.get('senderBankCode')   
                },
                receiver: {
                  number: order.get('receiverAccount'),
                  bankCode: order.get('receiverBankCode')   
                },
                transferDate: order.get('transferDate'),
                amount: {
                    value: order.get('amount'),
                    currency: 'CZK',
                    precision: 1
                },
                senderName: 'Sender name',
                receiverName: 'Receiver name'
            });
            x.save(); // emit POST
        }
    },
});
import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        sendDomestic(order) {
            console.log(order);
            console.log("Number" + order.get('transferDate'));
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
            x.save();
        }
    },
});
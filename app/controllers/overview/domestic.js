import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    validations: {
        'senderAccount': {
            presence: true
        }
    },
    actions: {
        selectSenderAccount: function (acc) {
            console.log('123 something changed ' + acc);
            var model = this.get('model');
            model.set("accountSender", acc);
            console.log('123 model ' + model.get("accountSender"));
        },
        sendDomestic: function () {

            var payload = {};
            var model = this.get("model");

            payload.amount = {};
            payload.amount.currency = "CZK";
            payload.amount.precision = "0";
            payload.amount.value = model.get("amountValue");

            payload.sender = {};
            payload.sender.number = model.get("accountSender");
            payload.sender.bankCode = "0800";

            payload.receiver = {};
            payload.receiver.number = model.get("receiverAccount");
            payload.receiver.bankCode = model.get("receiverBankCode");

            payload.senderName = "Sender Name";
            payload.receiverName = "Receiver Name";

            payload.transferDate = model.get("transferDate");

            console.log("11 Model payload: " + JSON.stringify(payload));

            var domestic = this.store.createRecord('domestic', payload);
            domestic.save().then(function() {
                console.log('Transition to overview');
                Ember.$("#id01").css("display", "none");
                //self.transitionToRoute('overview');
            }).catch(console.log("47 Something is wrong")); //.catch(console.log("error occured"));
        }
    }
});


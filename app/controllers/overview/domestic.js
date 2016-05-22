import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    validations: {
        "model.senderAccount": {
            presence: true
        }
    },
    actions: {
        selectSenderAccount: function (acc) {
            Ember.Logger.debug('Account selection changed ' + acc);
            var model = this.get('model');
            model.set("accountSender", acc);
            Ember.Logger.debug('Account model selected' + model.get("accountSender"));
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

            Ember.Logger.debug("Domestic Model payload: " + JSON.stringify(payload));

            var domestic = this.store.createRecord('domestic', payload);
            domestic.save().then(function() {
                Ember.Logger.debug('Transition to overview');
                Ember.$("#modal01").css("display", "none");
                this.transitionToRoute('overview');
            }).catch(console.log("Something wrong happened in domestic")); //.catch(console.log("error occured"));
        }
    }
});


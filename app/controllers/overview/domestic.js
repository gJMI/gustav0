import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    showErrors: false,
    validations: {
        "model.receiverAccount": {
            presence: true,
            mod11: true
        },
        "model.accountSender": {
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

            this.validate().then(()=>{
               Ember.Logger.debug("Validations ok");
               // put save here 
            }.bind(this)).catch(()=>{
               Ember.Logger.debug("Validations nok");
               Ember.Logger.debug(this.get("errors"));
               this.set('showErrors',true); 
            }.bind(this));
            
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
            
            Ember.Logger.debug("Validation state: " + model.get('isValid'));
            
            domestic.save().then(()=> {
                Ember.Logger.debug('Transition to overview');
                Ember.$("#modal01").css("display", "none");
                this.transitionToRoute('overview');
                Ember.Logger.debug(this);             
            }.bind(this)).catch(Ember.Logger.warn("Something wrong happened in domestic"));
        }
    }
});


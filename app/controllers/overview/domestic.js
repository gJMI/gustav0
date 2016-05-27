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
        },
        "model.receiverBankCode": {
            presence: true,
            length: 4,
            inclusion: { in : ["0100", "0300", "0600", "0710", "0800", "2010", "2020", "2030", "a2060", "2070", "2100", "2200", "2210", "2220", "2240", "2250", "2260", "2310", "2600", "2700", "3030", "3050", "3500", "4000", "4300", "5400", "5500", "5800", "6000", "6100", "6200", "6210", "6300", "6700", "6800", "7910", "7940", "7950", "7960", "7970", "7980", "7990", "8030", "8040", "8060", "8090", "8150", "8200", "8220", "8230", "8240"]
            }
        },
        "model.amountValue": {
            presence: true,
            numericality: {
                onlyInteger: true,
                greaterThan: 0,
                lessThanOrEqualTo: 1000
            }
        }
    },
    actions: {
        selectSenderAccount: function(acc) {
            Ember.Logger.debug('Account selection changed ' + acc);
            var model = this.get('model');
            model.set("accountSender", acc);
            Ember.Logger.debug('Account model selected' + model.get("accountSender"));
        },
        sendDomestic: function() {


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

            this.validate().then(() => {
                Ember.Logger.debug("Validations ok");
                // put save here 
                domestic.save().then(() => {
                    Ember.Logger.debug('Transition to overview');
                    //Ember.$("#modal01").css("display", "none");
                    this.transitionToRoute('overview');
                    Ember.Logger.debug(this);
                }.bind(this)).catch(Ember.Logger.warn("Something wrong happened in domestic"));
            }.bind(this)).catch(() => {
                Ember.Logger.debug("Validations nok");
                Ember.Logger.debug(this.get("errors"));
                this.set('showErrors', true);
            }.bind(this));



        }
    }
});
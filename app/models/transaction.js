import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  "reference": DS.attr('string'),
  "amount": DS.attr(),
  "dueDate": DS.attr('date'),
  "bookingTypeTranslation": DS.attr(),
  "bookingType": DS.attr(),
  actualBalance: Ember.computed('amount', function() {
    Ember.Logger.debug("Actual balance computed");
    var pom = Math.pow(0.1, this.get('amount.precision')) * this.get('amount.value');
    return (pom.toFixed(2));
  }),
  "sender": DS.attr(),
  "receiver": DS.attr(),
  "senderName": DS.attr(),
  "receiverName": DS.attr(),
  "txDirection": DS.attr(),
  "txType": DS.attr(),
  "additionalTexts": DS.attr(),
  transactionLabel: Ember.computed('txDirection', function() {
    //Ember.Logger.debug("txDirection: " + this.get('txDirection'));
    var pom = null;
    if (this.get('additionalTexts.constantSymbol') === "0898") { //0898 Poplatky
      return ("Poplatek " + this.get('additionalTexts.lineItems')[0]);
    }
    if (this.get('additionalTexts.constantSymbol') === "0989") { //0898 Poplatky
      return ("Výpis - papírově na adresu v ČR");
    }
    if (this.get('bookingType') === "77526") {
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "77520") {
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "95527") {
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "77530") {
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "77520") {
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "395") { // 
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "1813") { // 
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "8") { // 
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('bookingType') === "36") { // 
      return (this.get('bookingTypeTranslation'));
    }
    if (this.get('txType') === "BANKFEE") {
      pom = this.get('bookingTypeTranslation');
      return (pom);
    }
    if (this.get('txType') === "ATM") {
      pom = this.get('bookingTypeTranslation');
      return (pom);
    }
    if (this.get('txType') === "STANDINGORDER") {
      pom = this.get('bookingTypeTranslation');
      return (pom);
    }
    if (this.get('txDirection') === "INCOMING") {
      pom = this.get('senderName');
      if (pom === "") {
        pom = this.get('sender.iban');
      }
      return (pom);
    }
    if (this.get('txDirection') === "OUTGOING") {
      pom = this.get('receiverName');
      if (pom === "") {
        pom = this.get('receiver.iban');
      }
      return (pom);
    }
    return ("");
  })
});
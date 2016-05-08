import DS from 'ember-data';

export default DS.Model.extend({
    "transferDate": DS.attr(),
    "amount": DS.attr(),
    "sender": DS.attr(),
    "receiver": DS.attr(),
    "receiverName": DS.attr(),
    "senderName": DS.attr()
});
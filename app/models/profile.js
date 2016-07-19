import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  "firstname": DS.attr('string'),
  "lastname": DS.attr('string'),
  "status": DS.attr(),
  "defree": DS.attr(),
  "salutation": DS.attr(),
  monogram: Ember.computed('firstname','lastname', function () {
    var lastname=(this.get('lastname'))[0];
    if(this.get('lastname').toLowerCase()==="ch")
    {
      lastname="Ch";
    }
    var pom=(this.get('firstname'))[0]+lastname;
    Ember.Logger.debug("Monogram computed: "+pom);
    //debugger;
    return(pom);
  }),
});

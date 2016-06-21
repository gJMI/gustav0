import DS from 'ember-data';

export default DS.Model.extend({
      "text1" : DS.attr(),
      "text2" : DS.attr(),
      "text3" : DS.attr(),
      "constantSymbol" : DS.attr(),
      "variableSymbol" : DS.attr(),
      "specificSymbol" : DS.attr(),
      "lineItems": DS.attr()
});

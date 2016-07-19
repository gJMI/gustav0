import Ember from 'ember';
import Base from 'ember-validations/validators/base';

export default Base.extend({
  call: function () {
    Ember.Logger.debug("Running mod11 with " + this.model.get(this.property));
    var CI = this.model.get(this.property);
    if (!CI) {
      this.errors.pushObject("Mod11 property is undef");
      return;
    }
    var ret = "Not a number"; //N-cislo0,C-cislo,E-chyba
    var vahy = new Array("1", "2", "4", "8", "5", "10", "9", "7", "3", "6");
    var suma = 0;
    var len = CI.length;
    var j = 0;
    for (var i = len - 1; i >= 0; i--) {
      var c = CI.charAt(i);
      if (c === 0) { } else {
        if (c >= '1' && c <= '9') {
          ret = "Wrong number";
          suma = suma + c * vahy[j];
        } else {
          ret = "Error";
          break;
        }
      }
      j++;
    }
    if ((suma % 11) === 0) {
      ret = "M";
    } else {
      ret = "E";
      this.errors.pushObject("Not a banking modulo 11 account number");
    }

    Ember.Logger.debug("Mod11 " + ret);
    

  }
});
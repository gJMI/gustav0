import Base from 'ember-validations/validators/base';

export default Base.extend({
  call: function () {
   console.log("Running mod11 with " + this.model.get(this.property));
    var CI = this.model.get(this.property);
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
      ret = ret + "M";
    } else {
      ret = ret + "E";
    }

    this.errors.pushObject("Mod11" + ret);

  }
});
export default {
  rtl: false,

  pluralForm: function(n) {
     var plural=(n===1) ? "one" : (n>=2 && n<=4) ? "few" : "many";
     if (n===0) {
       plural="zero";
     }
     return(plural);
  }
};

//main menu helper

/*jshint unused:false*/
/*globals Ember */

function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}


function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}


function modalDisposal(id) {
    Ember.Logger.debug(id);
    var x = document.getElementsByName(id)[0];
    Ember.Logger.debug(x);
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
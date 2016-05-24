//main menu helper

/* exported w3_open */
function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
}
/* exported w3_close */
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
}
/* exported modalDisposal */
function modalDisposal(id) {
    console.log(id);
    var x = document.getElementsByName(id)[0];
    console.log(x);
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
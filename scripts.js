function onContactMsgInput(target) {
    let contactSubmitButton = document.getElementById("contact_sbm");
    const minMessageLen = 50;
    let bValidMessage =
            target.value !== null &&
	    target.value.length >= minMessageLen &&
	    target.value.match(/^\s*$/) === null;
    contactSubmitButton.disabled = !bValidMessage;
}

window.addEventListener("DOMContentLoaded", function() {
    let contactSubmitButton = document.getElementById("contact_sbm");
    contactSubmitButton.disabled = true;
}, false);

//let url = window.location.hostname;
//console.log(url)

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

  if (msg.action == 'cookie_detected') {
    let buttonId = msg.data
    console.log(buttonId);
    //chrome.action.getPopup.getElementById("pre-cookie-modal-body p6-sm").click()
    document.getElementsByClassName("pre-cookie-modal-body p6-sm").style.backgroundColor = "#FF0000"
  }
});

// try a more visual thing, like changing text to blue 
// how to interact with popups js
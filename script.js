//let url = window.location.hostname;
//console.log(url)

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    if (msg.action == 'cookie_detected') {
      console.log(msg.data);
    }
  });
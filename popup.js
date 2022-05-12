chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
   console.log(message);
   document.getElementById('bg_cookies').innerHTML= message.data; 
});
setTimeout(() => {
    let buttonTwo = document.querySelectorAll('button, span, div');
    for (var i = 0; i < buttonTwo.length; i++) {
      let lowerCaseButton = buttonTwo[i].innerHTML.toLowerCase().trim();
      if (lowerCaseButton === "continuer sans accepter" || lowerCaseButton === "refuser" || lowerCaseButton === "rejeter" || lowerCaseButton === "tout refuser") {
        buttonTwo[i].click();
        console.log(buttonTwo[i]);
        console.log(lowerCaseButton);
      }
    }
    }, 4000)

// Extract domain name from url using a regex
let fullUrl = location.href 
let url = getHostname(fullUrl)

function getHostname(path) {
  if (path.includes('http')) {
    let r_match = path.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/);
    return r_match[1];
  } else {
    return "";
  }
}

// function that interacts with background.js
//function that denies cookies from websites in the chrome storage
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  setTimeout(() => {
    if (msg.action == 'cookie_detected') {
      let buttonKey = msg.data
      let buttonValue = buttonKey[url];
      if (document.getElementById(buttonValue) !== null && document.getElementById(buttonValue) !== undefined) {
        document.getElementById(buttonValue).click()
      } else {
        document.getElementsByClassName(buttonValue)[0].click();
      }
    }
  }, 4000)
  return Promise.resolve("Réponse pour éviter une erreur dans la console")
});

/*const button = document.getElementsByTagName("button")
for (const el of Array.from(button)) {
  el.addEventListener("click", () => {
    let className = el.className
    let id = el.id
    console.log(className)
    console.log('Value is set to' + " " + url + " " + className);
    console.log('Value is set to' + " " + url + " " + id);
    console.log(id)
    if (className !== null && className !== undefined) {
      chrome.storage.local.set({ url: className }, function () {
        console.log("saved class names")
      })
    } else {
      chrome.storage.local.set({ url: id }, function () {
        console.log("saved ids")
      })

    }
  }, true);
}*/







//let url = window.location.hostname.slice(4);
let fullUrl = location.href
let url = getHostname(fullUrl)
console.log("This is the full url =" + url)

function getHostname(path) {
  console.log(path)
  if (path.includes('http')) {
    let r_match = path.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/);
    console.log(r_match)
    return r_match[1];
  } else {
    return "";
  }
}


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

  setTimeout(() => {
    if (msg.action == 'cookie_detected') {
      let buttonKey = msg.data
      console.log(buttonKey);
      let buttonId = buttonKey[url];
      if (document.getElementById(buttonId) !== null && document.getElementById(buttonId) !== undefined) {
        document.getElementById(buttonId).click()
      } else {
        console.log(buttonId)
        document.getElementsByClassName(buttonId)[0].click();
      }
    }
  }, 4000)
  return Promise.resolve("Réponse pour éviter une erreur dans la console")
});

// try a more visual thing, like changing text to blue 
// how to interact with popups js

const button = document.getElementsByTagName("button")
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


    // alert("button click" + el.className + " " + el.id)
    // console.log(className)
    // console.log(id)


  }, true);
}



// button.addEventListener("click", ()=>{
//   console.log("button click")
//   alert("button click")
// })






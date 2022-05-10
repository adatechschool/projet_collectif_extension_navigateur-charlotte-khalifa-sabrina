let url = window.location.hostname.slice(4);
console.log(url)


chrome.runtime.onMessage.addListener(function ( msg, sender, sendResponse) {

  setTimeout(()=> {

  
  if (msg.action == 'cookie_detected') {
    let buttonKey = msg.data
    console.log(buttonKey);
    //console.log(buttonKey["nike.com"])
    let buttonId = buttonKey[url]; 
    if(document.getElementById(buttonId) !== null && document.getElementById(buttonId) !== undefined){
      document.getElementById(buttonId).click()
    } else {
      console.log(buttonId)
      document.getElementsByClassName(buttonId)[0].click(); 
    }
  }
},4000)
  return Promise.resolve("Réponse pour éviter une erreur dans la console")
});



// try a more visual thing, like changing text to blue 
// how to interact with popups js

const button = document.getElementsByTagName("button")
for (const el of Array.from(button)) {
  el.addEventListener("click",()=>{
    console.log("button click")
  alert("button click"  + this.className)
  
});
}  



// button.addEventListener("click", ()=>{
//   console.log("button click")
//   alert("button click")
// })






chrome.storage.local.set({ "nike.com": "hf_cookie_text_cookieReject" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "casino.fr": "onetrust-reject-all-handler" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "gucci.com": "onetrust-close-btn-handler banner-close-button ot-close-link" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "carrefour.fr": "onetrust-reject-all-handler" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "ikea.com": "onetrust-close-btn-handler banner-close-button ot-close-link" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "maisonsdumonde.com": "footer_tc_privacy_button" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "journaldunet.com": "sc-17rhrsc-2 fUnQAr" }, function () {
    console.log('Value is set to');
});

chrome.storage.local.set({ "journaldunet.com": "sc-17rhrsc-2 fUnQAr" }, function () {
    console.log('Value is set to');
});



// - Détecter page chargée

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        console.log("page loaded !")

        // console.log(tab)
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            console.log(tabs[0])
            const url = getHostname(tabs[0].url)
            if (url !== "") {
                console.log(url)
                chrome.storage.local.get([url], (data) => {
                    console.log(data)
                    chrome.tabs.sendMessage(tabs[0].id, { action: "cookie_detected", data: data }, function (response) {
                        console.log("you've been here before")
                        console.log(data)
                    });
                })
            }

        })
    }
})


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

// - si valeur = vide ; break
// - sinon .click()


/*
document.addEventListener('mousemove', e => {
    console.clear()
    console.log(e)
  }, {passive: true})

*/


//chrome.tabs.query({active: true, currentWindow: true}, (i) => console.log(i))

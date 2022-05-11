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
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const url = getHostname(tabs[0].url)
            if (url !== "") {
                chrome.storage.local.get([url], (data) => {
                    chrome.tabs.sendMessage(tabs[0].id, { action: "cookie_detected", data: data }, function (response) {
                    });
                })
            }
        })
    }
})


function getHostname(path) {
    if (path.includes('http')) {
        let r_match = path.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/);
        return r_match[1];
    } else {
        return "";
    }
}

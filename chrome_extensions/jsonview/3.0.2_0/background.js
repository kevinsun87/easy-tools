const jsonContentType = /^application\/([\w!#$&.\-^+]+\+)?json($|;)/;
/**
 * Look for JSON if the content type is "application/json",
 * or "application/whatever+json" or "application/json; charset=utf-8"
 */
function isJSONContentType(contentType) {
    return jsonContentType.test(contentType);
}

/**
 * This is the background script that runs independent of any document. It
 * listens to main frame requests and kicks in if the headers indicate JSON. If
 * we have the filterResponseData API available, we will use that to change the
 * page to what Chrome displays for JSON (this is only used in Firefox). Then a
 * content script reformats the page.
 */
function isRedirect(status) {
    return status >= 300 && status < 400;
}
function detectJSON(event) {
    if (!event.responseHeaders || isRedirect(event.statusCode)) {
        return;
    }
    for (const header of event.responseHeaders) {
        if (header.name.toLowerCase() === "content-type" &&
            header.value &&
            isJSONContentType(header.value)) {
            addJsonUrl(event.url);
        }
    }
    return { responseHeaders: event.responseHeaders };
}
// Listen for onHeaderReceived for the target page.
chrome.webRequest.onHeadersReceived.addListener(detectJSON, { urls: ["<all_urls>"], types: ["main_frame"] }, ["responseHeaders"]);
// Listen for a message from the content script to decide whether to operate on
// the page. Calls sendResponse with a boolean that's true if the content script
// should run, and false otherwise.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message !== "jsonview-is-json") {
        return;
    }
    if (!sender.url) {
        sendResponse(false);
        return;
    }
    if (sender.url.startsWith("file://") && sender.url.endsWith(".json")) {
        sendResponse(true);
        return;
    }
    hasJsonUrl(sender.url).then(sendResponse);
    return true; // this means "we're going to sendResponse asynchronously"
});
async function addJsonUrl(url) {
    await chrome.storage.session.set({ [url]: true });
}
async function hasJsonUrl(url) {
    const stored = await chrome.storage.session.get(url);
    const present = url in stored;
    await chrome.storage.session.remove(url);
    return present;
}
// Put all the javascript code here, that you want to execute in background.
browser.runtime.onMessage.addListener(notify);

function notify(message) {
  console.log(message);

}

//browser.webRequest.onBeforeRequest.addListener(
 // logURL,
//  {urls: ["https://*.google.com/complete/search?*", "https://*.google.be/complete/search?*", "https://*.google.nl/complete/search?*"]}
//);
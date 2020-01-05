// Put all the javascript code here, that you want to execute in background.
browser.runtime.onMessage.addListener(notify);

const ws = new WebSocket("ws://localhost:9431");

let lastKeys = undefined;

function notify(message) {
  if (message.keys !== undefined) {
    lastKeys = message.keys;
  }

  if (message.q !== undefined) {
    message.keys = lastKeys;
    lastKeys = undefined;
    ws.send(JSON.stringify(message));
  }
}

//browser.webRequest.onBeforeRequest.addListener(
 // logURL,
//  {urls: ["https://*.google.com/complete/search?*", "https://*.google.be/complete/search?*", "https://*.google.nl/complete/search?*"]}
//);
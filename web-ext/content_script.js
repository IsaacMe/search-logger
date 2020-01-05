// Put all the javascript code here, that you want to execute after page load.

const url = new URL(window.location.href)
const keysPressed = [];

if (url.pathname === '/search') {
    const q = url.searchParams.get('q');
    browser.runtime.sendMessage({"q": q, 'time': Date.now()});
}

if (document.getElementsByName("q").length === 1) {
    const searchBox = document.getElementsByName("q")[0];

    searchBox.addEventListener('keydown', (e) => {
        keysPressed.push({'key': e.key, 'time': Date.now()});
    });
}

window.addEventListener('beforeunload', () => {
    if (keysPressed.length > 0) { 
        browser.runtime.sendMessage({"keys": keysPressed});
    }
});
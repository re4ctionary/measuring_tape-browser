/**
 * Get all Tab URLs.
 *
 * @param {function(string)} callback - called when the URLs of the current window
 *   are found.
 */
function getTabUrls(callback) {
    var queryInfo = {
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        var urls = tabs.map(function(tab){
            return tab.url;
        });

        callback(urls);
    });
}

function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    getTabUrls(function(urls) {
        renderStatus('Current Tabs: ' + urls.join('\n'));
    });
});
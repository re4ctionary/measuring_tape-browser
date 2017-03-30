// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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
        // Put the image URL in Google search.
        renderStatus('Current Tabs: ' + urls.join('\n'));
    });
});
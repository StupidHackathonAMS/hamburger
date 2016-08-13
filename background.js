chrome.tabs.onMoved.addListener(function(activeInfo) {
  chrome.tabs.executeScript({
    "file": 'hotdog.js'
  });
});

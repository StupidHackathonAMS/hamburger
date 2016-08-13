chrome.browserAction.onClicked.addListener(function() {
  chrome.bookmarks.create({
    title: "Epic",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  });
});


chrome.tabs.executeScript({
  "file": 'hamburger.js'
});
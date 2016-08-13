chrome.bookmarks.onCreated.addListener(function(id, bookmark) {        
  var new_title = "random title";
  chrome.bookmarks.update(id, {title : new_title});
});

// CREATE A BOOKMARK //////////////////////////////////////
// 
// chrome.browserAction.onClicked.addListener(function() {
//   chrome.bookmarks.create({
//     title: "Epic",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   });
// });
///////////////////////////////////////////////////////////


chrome.tabs.executeScript({
  "file": 'hamburger.js'
});
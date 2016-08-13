chrome.bookmarks.onCreated.addListener(function(id, bookmark){
  console.log(bookmark.title)
  // chrome.bookmarks.create({
  //   title: "FUNFUNFUN",
  //   url: "https://www.youtube.com/watch?v=IO9XlQrEt2Y&ab_channel=RickAstleyVEVO"
  // });
});

// chrome.browserAction.onClicked.addListener(function() {
//   chrome.bookmarks.create({
//     title: "Epic",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//   });
// });


chrome.tabs.executeScript({
  "file": 'hamburger.js'
});

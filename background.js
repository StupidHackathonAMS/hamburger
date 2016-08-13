// chrome.bookmarks.onCreated.addListener(function(id, bookmark) {        
//   var new_title = "random title";
//   chrome.bookmarks.update(id, {title : new_title});
// });

// // CREATE A BOOKMARK //////////////////////////////////////
// // 
// // chrome.browserAction.onClicked.addListener(function() {
// //   chrome.bookmarks.create({
// //     title: "Epic",
// //     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
// //   });
// // });
// ///////////////////////////////////////////////////////////
// var allbookmarks = chrome.bookmarks.getTree();
// alert(allbookmarks);


// chrome.tabs.executeScript({
//   "file": 'hamburger.js'
// });


// chrome.bookmarks.onCreated.addListener(function(id, bookmark) {        
//   var new_title = "random title";
//   chrome.bookmarks.update(id, {title : new_title});
// });
// 
function process_bookmark(bookmarks) {

  for (var i =0; i < bookmarks.length; i++) {
    var bookmark = bookmarks[i];
    if (bookmark.url) {
      console.log("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
    }
    console.log(bookmark.id);
    if (bookmark.title == "FUNFUNFUN") {
      chrome.bookmarks.remove(bookmark.id);
    }

    if (bookmark.children) {
      process_bookmark(bookmark.children);
    }
  }
}

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("listing bookmarks: " );
  chrome.bookmarks.getTree( process_bookmark );
});
var random_titles1 = ["hot", "steamy", "cold", "icy", "greasy", "big fat", "extravagant", "flamboyant", "diet", "dirty", "exceptional"]
var random_titles2 = ["hamburger", "bal", "patat", "bamihap", "spaghetti", "milkshake", "frikadel", "tosti", "hotdog", "icecream", "boerenkool", "andijvie", "spinazie", "rookworst", "risotto", "curry", "pudding", "rijst"]


var random_prefix = random_titles1[Math.floor(Math.random()*random_titles1.length)];
var random_suffix = random_titles2[Math.floor(Math.random()*random_titles2.length)];

chrome.bookmarks.onCreated.addListener(function(id, bookmark) {        
  var new_title = random_prefix + "-" + random_suffix;
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
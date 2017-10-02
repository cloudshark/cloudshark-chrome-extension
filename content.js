// CloudShark Chrome Extension
// Developed by QA Cafe, 2017

// Show a message when this content script is loaded
console.debug("CloudShark Chrome Extension Loaded");

// This gets called whenever right click is used to save what was
// clicked on in case the CloudShark extension needs it when the user
// selects something from the context menu
var elementClicked = null
document.addEventListener("mousedown", function(event){
  var enable = false;
  elementClicked = event.target;
  var node = elementClicked;
  while (node != null) {
    if (node.id == "captures") {
      enable = true;
      break;
    }
    node = node.parentNode;
  }

  sendMessage(enable ? "enable" : "disable");
}, true);

function getCaptureID() {
  var captureToLink = elementClicked;
  while(captureToLink.nodeName != "TR") {
    captureToLink = captureToLink.parentElement;
  }
  return captureToLink.getAttribute("cid");
}

function buildCaptureURL(cid, before, after) {
  return location.origin + before + cid + after;
}

// Chrome specific below
function sendMessage(message) {
  chrome.runtime.sendMessage(message);
}

// Here is where we can listen for messages from our background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.startsWith("goToAnalysis/")) {
    var cid = getCaptureID();
    var tool = request.split("/")[1];
    var url = buildCaptureURL(cid, "/analysis/", "/" + tool);
    sendResponse(url);
  }
});

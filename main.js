// CloudShark Chrome Extension
// Developed by QA Cafe, 2017

// CloudShark Context Menu Creation
var buttons = {
  mainButton: chrome.contextMenus.create({
    title: "CloudShark",
    contexts: ["all"],
    enabled: false,
  })
}

var goToButton = {
  contexts:["all"],
  parentId: buttons["mainButton"],
  onclick: goToResponse, 
  enabled: false,
}

var analysisTools = {
  ladder: "Ladder Diagram",
  endpoints: "Endpoints",
  conversations: "Conversations",
  protocol_stats: "Protocol Hierarchy",
  dns: "DNS Activity",
  voip_calls: "VoIP Calls",
  rtp_streams: "RTP Streams",
  http_req: "HTTP Analysis",
  http_objects: "HTTP Objects",
  wlan_stats: "Wireless Networks",
  threats_vectors: "Threat Assessment",
}

for (tool in analysisTools) {
  var toolButton = {
    title: analysisTools[tool],
    id: "goToAnalysis/" + tool,
  }
  buttons[tool] = chrome.contextMenus.create(Object.assign(toolButton, goToButton));
}

// Go to analyis tool for capture
function goToResponse(info, tab) {
  chrome.tabs.sendMessage(tab.id, info.menuItemId, function(response) {
    chrome.tabs.update({
      url: response
    });
  });
}

function disableButtons() {
	for (b in buttons) {
		chrome.contextMenus.update(buttons[b], { enabled: false, });
	}
}

function enableButtons() {
	for (b in buttons) {
		chrome.contextMenus.update(buttons[b], { enabled: true, });
	}
}

// Listen for message from content script
chrome.runtime.onMessage.addListener(function(message) {
	if(message == "enable") {
		enableButtons();
	} else {
		disableButtons();
	}
});

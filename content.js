chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	var issueNumber = document.getElementById("issuekey-val").textContent;
	var issueDescription = document.getElementById("summary-val").textContent;

	sendResponse(issueNumber + " " + issueDescription);
});
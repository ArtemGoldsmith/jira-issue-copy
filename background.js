chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, { action: "copy" }, sendToClipbord);
});

function sendToClipbord(string) {
	var input = document.createElement('textarea');

	document.body.appendChild(input);
	input.value = string;
	input.focus();
	input.select();

	document.execCommand('Copy');
	input.remove();
}

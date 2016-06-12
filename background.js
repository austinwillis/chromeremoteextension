chrome.tabs.onUpdated.addListener(function(tab_id, data, tab) {
	if (tab.url.indexOf('https://play.google.com/music') != -1) {
		console.log("Started Script");
	}
});
		
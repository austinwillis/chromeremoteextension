function broadcastIP() {
var address = "127.0.0.1";
var port = 6454;
var data = new ArrayBuffer("some random bytes");

chrome.sockets.udp.create({}, function (socketInfo) {
  console.log("Starting UDP Broadcast");
  var socketId = socketInfo.socketId;
  chrome.sockets.udp.bind( socketId, "0.0.0.0", 0, function (result) {

    chrome.sockets.udp.getInfo( socketId, function(result){
      console.log(result);
    });

    if(result < 0) {
      console.log(chrome.runtime.lastError.message);
    } else {
      chrome.sockets.udp.send( socketId, data, address, port, function (sendInfo) {
        if (sendInfo.resultCode < 0) {
          console.log(chrome.runtime.lastError.message);
        } else {
          console.log(sendInfo);
        }
      });
    }
  });
});
}

chrome.tabs.onUpdated.addListener(function(tab_id, data, tab) {
	if (tab.url.indexOf('https://play.google.com/music') != -1) {
		console.log("Started Script");

		broadcastIP();
	}
});
		

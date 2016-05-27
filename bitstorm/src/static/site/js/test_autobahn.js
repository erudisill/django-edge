var connection = new autobahn.Connection({
	url: 'ws://192.168.99.100:8080/ws',
	realm: 'realm1'
});

connection.onopen = function (session) {
	var received = 0;
	console.log("OnOpen");
	function onevent1(args) {
		//console.log("Got event:", args[0]);
		received += 1;
		/*
		if (received > 20) {
			console.log("Closing ...");
			connection.close();
		}
		*/
		try {
			pos = "0.0:" + args[0].toString() + ":0.0";
			SendMessage('Cube', 'PositionEvent', pos); 
		} catch (ex) {
			console.log("onopen: EXC - " + ex);
		}
	}
	session.subscribe('com.bitstorm.pub', onevent1);
};

function bitstorm_ready() {
	console.log("bitstorm_ready");
	console.log("Opening connection");
	connection.open();
}


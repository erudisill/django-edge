console.log("Top of test script");

var connection = new autobahn.Connection({
	url: 'ws://192.168.99.100:8080/ws',
	realm: 'realm1'
});

connection.onopen = function (session) {
	var received = 0;
	console.log("OnOpen");
	function onevent1(args) {
		console.log("Got event:", args[0]);
		received += 1;
		if (received > 200) {
			console.log("Closing ...");
			connection.close();
		}
	}
	session.subscribe('com.bitstorm.pub', onevent1);
};

console.log("Opening connection");
connection.open();

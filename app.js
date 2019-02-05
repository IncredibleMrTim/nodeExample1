const http = require('http');
const url = require('url');
const module1 = require('./module1');
const MongoClient = require('mongodb').MongoClient;
const hostname = '127.0.0.1';
const port = 3000;

// USE MONGO DB

(async () => {
	try {
		const db = await MongoClient.connect(
			'mongodb+srv://dbuser:TestTu8e@timmynet-zojxp.mongodb.net/test?retryWrites=true',
			{ useNewUrlParser: true }
		);
		console.log('We are connected');
		var dbo = db.db('test');
		var query = {};

		dbo.collection('testCollection')
			.find()
			.toArray((err, result) => {
				console.log(result);
			});

		db.close();
	} catch (error) {
		console.log(error);
	}
})();

// USE CLASSIC Http.CreateServer

// const server = http.createServer((req, res) => {
//   var q = url.parse(req.url, true).query;

//   res.writeHead(200, { "Content-Type": "application/json" });

//   if (req.url.indexOf("user") > -1) {
//     res.end(JSON.stringify(module1.getUser(q.user)));
//   } else if (req.url.indexOf("season") > -1) {
//     res.end(JSON.stringify(module1.getSeason(q.season)));
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`sever running at http://${hostname}:${port}/`);
// });

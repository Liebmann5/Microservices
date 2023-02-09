// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/:date?", function(req, res, next) {
  if (!req.params.date)
  {
    const currentDate = new Date();

    res.json({ 
      "unix": currentDate.valueOf(),
      "utc": currentDate.toUTCString()
    });
  } else {
     next();
  }
}, function(req, res, next) {
  let userDate;

  if (!isNaN(req.params.date)) {
    userDate = new Date(+req.params.date);
  } else {
    userDate = new Date(req.params.date);
  }

  if (isNaN(userDate)) {
    res.send({ error : "Invalid Date" });
  } else {
    res.json({ 
      "unix": userDate.valueOf(),
      "utc": userDate.toUTCString()
    });
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

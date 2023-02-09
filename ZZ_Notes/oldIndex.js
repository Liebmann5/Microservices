/*
      MY NOTES!!!!!
Use "inspect" on the browser and open the "Network" tab and you can click the file section cell's which gave me the URL's
then on the bottom I opened warnings but idk if that did anything??

Ex)What clicking the File section cell '2016-12-25'
    gave me http://localhost:53221/api/:date/api/2016-12-25{opened this in a new tab}
    -05 20 October 20 2011, 20 GMT => http://localhost:53221/api/:date/api/05%20October%202011,%20GMT
    -this-is-not-a-date => http://localhost:53221/api/:date/api/this-is-not-a-date


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      SUBMIT THIS AS THE URL
http://localhost:#####
          DO NOT ADD /api/date  or and variation{Ex) :date? / :date}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


FCC asks us to "Remember to submit a publicly visible app URL."... which I guess means localhost technically isn't??????? b/c it's worked???
These websites I believe show how to accomplish^
https://www.freecodecamp.org/news/how-to-deploy-an-application-to-heroku/
https://medium.com/bb-tutorials-and-thoughts/sharing-your-local-app-over-the-public-internet-a02379e2bf1c
*/




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


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});








//$$$$$$$$
//https://www.w3schools.com/js/js_dates.asp
app.get("/api/:date?", function(req, res, next) {
    //!!!!!   TESTING   !!!!!
    const testy = new Date(+req.params.date);

    console.log(testy);
    console.log(typeof(testy));
    //console.log(typeof(userDate.valueOf()));
    console.log(typeof(testy.valueOf()));
    //!!!!!!!!!!!!!!!!!!!!!!!

  if (!req.params.date)
  {
    //https://www.w3schools.com/jsref/jsref_valueof_date.asp
    //https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentDate = new Date();

    res.json({ 
      "unix": currentDate.valueOf(),
      "utc": currentDate.toUTCString()
    });
  } else {
  next(); }
}, function(req, res, next) {
  //https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript?page=1&tab=scoredesc#tab-top
  //ChatGPT explanation will be below!!
  const userDate = new Date(req.params.date);   //{Checkout #P} Date() accepts all{valid} dates as args and then turns them into UTC

  //if (Object.prototype.toString.call(req.params.date) === "[object Date]") {
    if (isNaN(userDate)) {
      res.send({ error : "Invalid Date" });
    } else {
      //Why not have it setup this way?? With that in mind; why isn't the empty parameter check here too!?!?!?!?
      //next();
      console.log(userDate);
      console.log(typeof(userDate));
      //console.log(typeof(userDate.valueOf()));
      console.log(typeof(userDate.valueOf()));

      res.json({ 
        "unix": userDate.valueOf(),
        "utc": userDate.toUTCString()
      });
    }
  /*} else {
    return { error : "Invalid Date" };
  }*/
} /*function(req, res, next) {
  const urlDate = req.params.date;

  res.json({ 
    "unix": urlDate.valueOf(),
    "utc": urlDate.toUTCString()
  });
  //next()
}*/ /*function(req, res, next) {
  const body = req.body;
}*/);
//$$$$$$$$






// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
























//StackOverFlow
/*const d = new Date('foo');
if (!d.valueOf()) {
  console.error('Not a valid date object');
}
else {
  // act on your validated date object
}*/




//Old code idea's
// app.get("/api/:date?", function(req, res, next) {
//   console.log("Parameters: " + req.params);
//   console.log("Querey: " + req.query);
//   console.log("Body: " + req.body);


//   const url = req.query;
//   //res.json({ "balls": testies });
//   next()
// }, function(req, res, next) {
//   const body = req.body;
// });




// #P
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_valueof_date

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Dates</h2>

// <p>valueOf() returns the primitive value of a date object:</p>

// <p id="demo1"></p>
// <p id="demo2"></p>
// <p id="demo3"></p>
// <script>
// const d = new Date();
// let ms = d.valueOf();
// document.getElementById("demo1").innerHTML = ms;
// const diler = new Date(ms);
// document.getElementById("demo2").innerHTML = diler;
// document.getElementById("demo3").innerHTML = ms;
// </script>

// </body>
// </html>






/*
ChatGPT

Why is my index.js failing at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice?  Here is my code // index.js
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


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});








//$$$$$$$$
//https://www.w3schools.com/js/js_dates.asp
app.get("/api/:date?", function(req, res, next) {
  if (!req.params.date)
  {
    //https://www.w3schools.com/jsref/jsref_valueof_date.asp
    //https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentDate = new Date();

    res.json({ 
      "unix": currentDate.valueOf(),
      "utc": currentDate.toUTCString()
    });
  } else {
  next(); }
}, function(req, res, next) {
  //https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript?page=1&tab=scoredesc#tab-top
  //ChatGPT explanation will be below!!
  const userDate = new Date(req.params.date);   //{Checkout #P} Date() accepts all{valid} dates as args and then turns them into UTC

  //if (Object.prototype.toString.call(req.params.date) === "[object Date]") {
    if (isNaN(userDate)) {
      res.send({ error : "Invalid Date" });
    } else {
      //Why not have it setup this way?? With that in mind; why isn't the empty parameter check here too!?!?!?!?
      //next();

      res.json({ 
        "unix": userDate.valueOf(),
        "utc": userDate.toUTCString()
      });
    }
  /*} else {
    return { error : "Invalid Date" };
  }
} /*function(req, res, next) {
  const urlDate = req.params.date;

  res.json({ 
    "unix": urlDate.valueOf(),
    "utc": urlDate.toUTCString()
  });
  //next()
}*/ /*function(req, res, next) {
  const body = req.body;
});
//$$$$$$$$






// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
There doesn't appear to be anything inherently wrong with your code that would cause it to fail. However, you may want to consider the following points to improve your code:

The app.get("/api/:date?", ... route handles both requests with and without a date parameter, so you may want to consider splitting it into two separate routes, one for each case, for clarity.

In the case where the date parameter is provided, you're using the Date constructor to parse the input. However, this constructor is forgiving and will attempt to parse almost any string as a date, even if it is not a valid date string. To determine if the date parameter is a valid date string, you may want to consider using a library such as moment.js, which provides robust date parsing and formatting functionality.

The code block that checks if userDate is a valid date (if (isNaN(userDate))) and sends an error response could be more robust. Currently, it only sends an error response if userDate is not a date. However, it's possible for a valid date to be returned that is not in the format that you expect. You may want to consider adding additional checks to ensure that the date string is in the correct format and to handle those cases appropriately.

Finally, you may want to consider adding some error handling and logging to your code to make it easier to debug any issues that arise in the future.

I hope this helps! Let me know if you have any questions.




liebmann.nicholas1@gmail.com
How would you program this return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
Here's an example of how you could return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds:

vbnet
Copy code
app.get("/api/timestamp/:date?", function(req, res) {
  let inputDate;
  if (!req.params.date) {
    inputDate = new Date();
  } else {
    inputDate = new Date(req.params.date);
  }

  if (isNaN(inputDate)) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: inputDate.valueOf() });
  }
});
In this code, we first check if the date parameter is provided in the URL. If it is not provided, we set inputDate to the current date. If the date parameter is provided, we parse it using the Date constructor and set inputDate to the resulting date.

Next, we check if inputDate is a valid date using the isNaN function. If it is not a valid date, we return a JSON object with an error message. If it is a valid date, we return a JSON object with a unix key that is the Unix timestamp of the input date in milliseconds.

This code should return the expected output for the input date.




liebmann.nicholas1@gmail.com
what does this code do? let TimeStamp = req.params.date;
    if (/\d{5,}/.test(TimeStamp)) {
TimeStamp = +TimeStamp;
  }
  let date = new Date(TimeStamp);
This code is checking if the TimeStamp variable which is set to the value of the date parameter in the URL, matches the pattern of 5 or more digits.

If the pattern matches, it means that the TimeStamp is likely a Unix timestamp in seconds, and so it converts it to milliseconds by using the unary operator + on TimeStamp.

Finally, it creates a new Date object from the TimeStamp which could be a string representing a date or a Unix timestamp in milliseconds.




liebmann.nicholas1@gmail.com
can you show an example walkthrough?
Sure! Let's say the value of the date parameter in the URL is 1609372000. Here's what the code would do:

sql
Copy code
let TimeStamp = req.params.date; // TimeStamp is set to '1609372000'

if (/\d{5,}/.test(TimeStamp)) { // the pattern matches (5 or more digits)
  TimeStamp = +TimeStamp; // TimeStamp is now converted to a number (1609372000)
}

let date = new Date(TimeStamp); // a new Date object is created from the TimeStamp
So in this example, the date object will represent the date and time equivalent to the Unix timestamp 1609372000 in milliseconds.




liebmann.nicholas1@gmail.com
Does my code have an equivalent of this?
Yes, your code has an equivalent for the code I just explained.

Here's the equivalent code in your index.js:

javascript
Copy code
app.get("/api/:date?", function(req, res, next) {
  // ...

  // check if `date` is not empty
  if (!req.params.date) {
    // ...
  } else {
    next();
  }
  // ...
}, function(req, res, next) {
  const userDate = new Date(req.params.date);

  // ...

  // check if the input is a valid date
  if (isNaN(userDate)) {
    res.send({ error : "Invalid Date" });
  } else {
    res.json({ 
      "unix": userDate.valueOf(),
      "utc": userDate.toUTCString()
    });
  }
  // ...
});
The code first checks if req.params.date is empty or not. If it's not empty, the next middleware function is executed. In this function, a userDate object is created from the req.params.date using the Date constructor. Then, it checks if the input is a valid date by using the isNaN function, which returns true if the input is NaN (Not-a-Number), and false otherwise. If the input is not a valid date, an error message is sent to the client. If the input is a valid date, the JSON response with the unix and utc keys is sent to the client.




This url http://localhost:52646/api/1451001600000 is returning {"error":"Invalid Date"} for this code // index.js
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
  const userDate = new Date(req.params.date);

    if (isNaN(userDate)) {
      res.send({ error : "Invalid Date" });
    } else {
      //next();

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
do you know why?
The issue is that the code is trying to parse the string "1451001600000" as a date, but it is not in a valid format for the Date constructor. The Date constructor expects a string in a specific format, such as "January 1, 2020" or "2020-01-01T00:00:00.000Z".

The code checks if the input string is a number with more than 5 digits (/\d{5,}/.test(TimeStamp)), and if so, converts it to a number (TimeStamp = +TimeStamp). But even after converting it to a number, it is still not a valid input for the Date constructor.

You could modify the code to correctly parse the input string by using the valueOf() method on the number, which will return the number as a Unix timestamp in milliseconds. For example:

vbnet
Copy code
const userDate = new Date(+req.params.date);



liebmann.nicholas1@gmail.com
can you show me how and where to incorporate that into my code? Also what does the + in front of the variables do?
In your code, you are using the new Date constructor to parse the input string as a date. However, if the string does not represent a valid date, the Date object will be set to Invalid Date. In order to check for this case, you can use the isNaN function, which returns true if its argument is not a number.

To incorporate the Unix timestamp conversion, you can use the valueOf() method of the Date object, which returns the number of milliseconds since January 1, 1970.

Here is the updated code incorporating the changes:

vbnet
Copy code
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
  let userDate = new Date(req.params.date);
  
  if (isNaN(userDate)) {
    userDate = new Date(+req.params.date);
    if (isNaN(userDate)) {
      res.send({ error : "Invalid Date" });
      return;
    }
  }

  res.json({ 
    "unix": userDate.valueOf(),
    "utc": userDate.toUTCString()
  });
});
The + in front of req.params.date is the shorthand for Number(req.params.date). It is used to convert the string input to a number, so that the Date constructor can be used to parse the Unix timestamp. If the input string is not a valid Unix timestamp, the Date object will still be set to Invalid Date, and the isNaN function will return true.








----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






I'm trying to write a code that satisfies all these test cases "Tests

Waiting: You should provide your own project, not the example URL.
Waiting: A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
Waiting: A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
Waiting: A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
Waiting: Your project can handle dates that can be successfully parsed by new Date(date_string)
Waiting: If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
Waiting: An empty date parameter should return the current time in a JSON object with a unix key

    Waiting: An empty date parameter should return the current time in a JSON object with a utc key

" and this is all the code I've written for it app.get("/api/:date?", function(req, res, next) {
  if (req.params.date == null)
  {
    //https://www.w3schools.com/jsref/jsref_valueof_date.asp
    //https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentDate = new Date();
    res.json({ 
      "unix": currentDate.valueOf(),
      "utc": currentDate.toUTCString()
    });
  }
  next();
}, function(req, res, next) {
  //https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript?page=1&tab=scoredesc#tab-top
  //ChatGPT explanation will be below!!

  if (Object.prototype.toString.call(req.params.date) === "[object Date]") {
    if (isNaN(req.params.date)) {
      return { error : "Invalid Date" };
    } else {
      next();
    }
  } else {
    return { error : "Invalid Date" };
  }
}, function(req, res, next) {
  const urlDate = req.params.date;

  res.json({ 
    "unix": urlDate.valueOf(),
    "utc": urlDate.toUTCString()
  });
  //next()
}
}); so I know this code is wrong but without giving me any answers or descriptive hints can you tell me what I'm missing or maybe leaving out from the test case description?
Yes, sure! Your code is missing a few things to satisfy all the test cases described in the prompt:

You are using the if (Object.prototype.toString.call(req.params.date) === "[object Date]") condition to check if the input date is valid. However, this condition will always evaluate to false because req.params.date is a string, not a date object. You should instead use new Date(req.params.date) to parse the string into a date object, and then use isNaN() to check if the resulting date object is valid.

You are returning the error message { error : "Invalid Date" } from the middleware function, but you are not sending it as a response to the client. To send a response, you should call res.json() or res.send() with the error message.

You are not handling the case where the /api/:date route is called with an empty date parameter. This should return the current time, but your code will return undefined. To handle this case, you should add a separate condition in the first middleware function to check if req.params.date is an empty string.

Here is the updated code to satisfy all the test cases:

vbnet
Copy code
app.get("/api/:date?", function(req, res, next) {
  if (!req.params.date) {
    const currentDate = new Date();
    res.json({ 
      "unix": currentDate.valueOf(),
      "utc": currentDate.toUTCString()
    });
  } else {
    next();
  }
}, function(req, res, next) {
  const date = new Date(req.params.date);
  if (isNaN(date)) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ 
      "unix": date.valueOf(),
      "utc": date.toUTCString()
    });
  }
});



liebmann.nicholas1@gmail.com
Ok in 1. How is req.params.date not a date object? If it is sent to us from the HTML doesn't the HTML turn the user input into a Date object and then send it to us? Then by using new Date() doesn't that always return the current date? I'm confused what what giving new Date() the arguments of req.params.date does? For 2. your explanation makes sense thank you but I'm curious what my return { error : "Invalid Date" } does then? I understand using res refers to the client and send() is what sends the object but why is my code wrong like does my code just print the object to the console? Finally, for 3. my first middleware function is used to check for empty date parameters. Is using if(req.params.date == null) not the way to check for empty date parameters and if not why?
The req.params.date is not guaranteed to be a Date object, it could be a string, a number, or any other type of data that is passed in the URL. The new Date() constructor will attempt to parse the input into a Date object, but if the input is not a valid string representation of a date, the returned Date object will represent an "Invalid Date".

The return { error: "Invalid Date" } statement in your code is just returning the object, it is not sending the response to the client. To send the response to the client, you need to use res.send() or res.json() with the returned object as an argument.

Checking for an empty date parameter with if (req.params.date == null) is not correct, as req.params.date could be undefined or an empty string, but not necessarily null. To correctly check for an empty date parameter, you can use if (!req.params.date) which will check for both undefined and empty string values.




liebmann.nicholas1@gmail.com
What are some of the various kinds of values we should consider receiving when using req.params.date?
The req.params.date value can be of several different types, including but not limited to:

A string representation of a date in a format that can be parsed by the new Date() constructor, such as "Thu, 01 Jan 1970 00:00:00 GMT" or "1970-01-01T00:00:00.000Z".

A Unix timestamp in milliseconds or seconds, such as 1451001600000 or 145100160.

An invalid date string, such as "not a date" or "abcdefg".

An undefined value, which can occur if the date parameter is not included in the URL.

It's important to consider all of these potential input types and handle each one appropriately in your code to ensure that your API returns the correct response for each case.




liebmann.nicholas1@gmail.com
Besides the Unix timestamp what about a number? Will I never recieve a date as a number?

​





----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




This is my code // index.js
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
  //!!!!! TESTING   !!!!!
  const testy = new Date(+req.params.date);

  console.log(testy);
  console.log(typeof(testy));
  //console.log(typeof(userDate.valueOf()));
  console.log(typeof(testy.valueOf()));

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
  const userDate = new Date(+req.params.date);

    if (isNaN(userDate)) {
      res.send({ error : "Invalid Date" });
    } else {
      //next();
      console.log(userDate);
      console.log(typeof(userDate));
      //console.log(typeof(userDate.valueOf()));
      console.log(typeof(userDate.valueOf()));

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
and for this url http://localhost:53221/api/:date/api/2016-12-25 it prints Cannot GET /api/:date/api/2016-12-25, and for this url http://localhost:53221/api/:date/api/05%20October%202011,%20GMT it prints Cannot GET /api/:date/api/05%20October%202011,%20GMT. Why isn't my code working for these dates?
It appears that you have an issue with the URL being passed to the server. The URL format should be in the following format: http://localhost:53221/api/[DATE_IN_UNIX_OR_UTC_FORMAT], where [DATE_IN_UNIX_OR_UTC_FORMAT] is either a Unix timestamp or a UTC string representation of a date.

For example, the URL http://localhost:53221/api/1450137600 would be a valid URL, as it is a Unix timestamp representing a date. The URL http://localhost:53221/api/2011-10-05%20GMT would also be a valid URL, as it is a UTC string representation of a date.

However, the URLs you are trying to access are not in the correct format. The first URL, http://localhost:53221/api/:date/api/2016-12-25, is trying to access the :date endpoint within the /api endpoint, which does not exist. Additionally, the /api/:date portion of the URL is incorrect, as it should just be /api/[DATE_IN_UNIX_OR_UTC_FORMAT].

The second URL, http://localhost:53221/api/:date/api/05%20October%202011,%20GMT, is also incorrect, as it is trying to access the :date endpoint within the /api endpoint, which again, does not exist. The correct URL would be http://localhost:53221/api/05%20October%202011,%20GMT.

You should adjust the URLs being passed to the server so that they are in the correct format, and your code should work as expected.




liebmann.nicholas1@gmail.com
ok the fix I believe was that I just need to submit the root url http://localhost:53221. I'm close to having everything correct but there were still some issues I ran into. I changed the variable userDate value to new Date(req.params.date); and the only test case that didn't pass was  this one A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }. Do you know what I can change in my code so this test case passes?
To handle the case where the date is a Unix timestamp, you should check if the req.params.date is a number and if so, create a Date object using the Number() function.

Here's the updated code to handle this case:

vbnet
Copy code
app.get("/api/:date?", function(req, res, next) {
  if (!req.params.date) {
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
    userDate = new Date(Number(req.params.date));
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
With these changes, the test case A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" } should pass.

​





----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




I'm trying to write some Javascript code that ensures a date is valid. 2 cases that I want to make sure dont pass are incorrect dates like 2013-02-30 and Date "foo". Do you know if this code works for those instances? if (Object.prototype.toString.call(d) === "[object Date]") {
  // it is a date
  if (isNaN(d)) { // d.getTime() or d.valueOf() will also work
    // date object is not valid
  } else {
    // date object is valid
  }
} else {
  // not a date object
}
Yes, this code will handle those two cases. When you use Object.prototype.toString.call(d) to check the type of d, if d is a date object, the returned string will be "[object Date]".

Then, you can use isNaN(d) to check if the date is valid. If d is not a valid date, d.getTime() or d.valueOf() will return NaN, and isNaN(d) will return true. If d is a valid date, isNaN(d) will return false.

If d is not a date object, the code inside the first if statement will not be executed, and the code inside the else block will run, indicating that d is not a date object.




liebmann.nicholas1@gmail.com
How would I return an object with the structure { error : "Invalid Date" } if the value fails
You can modify the code to return an object with the desired structure as follows:

vbnet
Copy code
if (Object.prototype.toString.call(d) === "[object Date]") {
  if (isNaN(d)) {
    return { error: "Invalid Date" };
  } else {
    return { date: d };
  }
} else {
  return { error: "Not a Date object" };
}
In this code, if d is a date object and is not a valid date, an object { error: "Invalid Date" } is returned. If d is a valid date object, an object { date: d } is returned. If d is not a date object, an object { error: "Not a Date object" } is returned.




liebmann.nicholas1@gmail.com
In Javascript an object can just be made by putting your code between {} right?
Yes, that's correct! In JavaScript, you can create an object using object literal syntax by enclosing a list of key-value pairs separated by commas inside curly braces {}. Here's an example:

javascript
Copy code
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
In this example, person is an object with three properties: firstName, lastName, and age, each with a corresponding value.

You can also create objects using other methods, such as the Object constructor or using object-oriented programming concepts such as constructor functions and classes.

*/














/*
I BELIEVE THIS IS HOW THE INSTRUCTIONS SHOULD BE READ...  ?????

2) A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
3)
4)
5)
6)
7)
8)
*/
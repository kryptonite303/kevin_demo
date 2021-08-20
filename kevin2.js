const fs = require('fs')
const https = require('https')
const options = {
  hostname: 'api2.frontapp.com',
  port: 443,
  path: '/conversations',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer <enter token here>'
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  let body = "";

  res.on("data", (chunk) => {
      body += chunk;
  });

  res.on("end", () => {
      try {
          let json = JSON.parse(body);
          // do something with JSON
          results = json._results;
          for (i=0; i<results.length; i++) {
            body = results[i].last_message.body
            const regex = /CST[0-9]+/g;
            console.log(body.match(regex))
          }
      } catch (error) {
          console.error(error.message);
      };
  });
})

req.on('error', error => {
  console.error(error)
})

req.end()

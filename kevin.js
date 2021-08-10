// The Roadmap
// The goal is to get a CSV from our coworkers in India
// Then pass it into kevin.js
// Then kevin.js will process the CSV
// Then we will be given a final report for that CSV
//

// Implement
//
// Bring in the csv-parser library
const csv = require('csv-parser')
const moment = require('moment')
// Filesystem library
const fs = require('fs')
// var results = [];
const results = [];

// dealing with infinite csvs
//
// You can read all files that end with csv into this program
//
function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}
// You can read all your csvs, and put all the data into a single program and modify or print our whatever you want with all that data in 1 place
//

fs.createReadStream('kevin.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for(i=0; i<results.length; i++) {
      const result = results[i]
      // 07/13/2016
      const date = moment(result["Application Date"], 'MM/DD/YYYY')
      if(result.Applicant == "Chan Law, LLC." && date.year() == 2017) {
        console.log(result["Title"], result["Closing Date"], result["App. Type"],result["Street #"] + " " + result["Street Name"], result["Status"])
        // title = column 0
        // closing date = column 1
        // application type = column 2
        // combine street # and name column 3 and 4
        // status = column 7
      }
    }
  });

//{
//  "name": "kevin",
//  "friends": ["john","kyle"]
//}
//
//[
//  {
//    "name": "kevin"
//    "friends": ["a", "b"]
//  },
//  {
//    "name": "john"
//    "friends": ["c", "b"]
//  }
//]
//
//[
//  {
//    "name": "kevin",
//    "friends": ["john","kyle"]
//  }
//]

// You can create individual functions that will generate specific reports you care about, with specific columns
// You can also accept parameters from your users to fine tune the report
//
// When all of your csv data is processed and looks the way you want it, you can use a csv viewer to visualize that data
//
// Wordpress -
// react.js -
// Php - a different programming language, more specific to websites, and even more specific to wordpress
// Mysql - database - you'd have to learn SQL - medium - difficult, there's a lot to learn
// setting up mysql - could be easy - hard, depending on your IT team
// Scheduling jobs - cronjob - small topic - easy; you probably would need your own server to really use it
// Having a frontend
//
// mysql, postgresql
// SQL = select * from users;
//
// mongodb
// db.users.findOne({user: "kevin"})
//
// How does react.js talk to the database?

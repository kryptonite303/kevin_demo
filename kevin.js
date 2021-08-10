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
// Filesystem library
const fs = require('fs')
// var results = [];
const results = [];

fs.createReadStream('kevin.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    //console.log(results);
    console.log(results[8].Applicant)
  });


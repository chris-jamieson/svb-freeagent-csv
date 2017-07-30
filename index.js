const csv = require('fast-csv');
const _ = require('underscore');
const moment = require('moment');

const rows = [];

csv
  .fromPath("transactions.csv")
  .on("data", (data) => {
    if (data && _.isArray(data)) {
      // the data is an array
      
      // we are looking for dates, check if first col starts with 20 (will work until 2099)
      if (typeof data[0] === 'string') {
        const firstTwoChars = data[0].slice(0, 2);
        if (firstTwoChars === '20') {
          // pretty confident that this is the data we want
          rows.push(data);
        }
      }
    }
   })
  .on("end", () => {
    console.log("Finished parsing data, transforming...");
    const newData = _.map(rows, (row) => {
      const date = moment(row[0]).format('DD/MM/YYYY');
      const description = `"${row[12]}"`
      let amount
      if (row[8] !== '') {
        // credit amount, so amount is row[8]
        amount = row[8]
      } else {
        // debit amount, amount is row[9] with minus sign
        amount = `-${row[9]}`
      }

      return [
        date,
        amount,
        description
      ];
    });

    // add a headers row
    // newData.unshift(['Date', 'Amount', 'Description']);

    // output new data to CSV
    csv
      .writeToPath("output.csv", newData, { headers: false, delimiter: ',' })
      .on("finish", () => {
        console.log('Job complete!');
        process.exit(0);
     });
   });

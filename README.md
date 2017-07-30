# SVB Freeagent CSV

A simple Node.js tool to help format Silicon Valley Bank (SVB) downloaded CSVs into an acceptable format for FreeAgent's bank statement import tool.

Follows the format specified by FreeAgent [here](https://www.freeagent.com/support/kb/banking/which-bank-statement-downloads-does-freeagent-support/)

## Instructions

1. clone the repo
1. download your transactions file [from SVB](https://www.svbconnect.com/extendedWeb/acctreporting/download.do) (Accounts -> Download), selecting format type "True CSV Format : Transactions"
1. save the downloaded file in the root of the project directory as `transactions.csv`
1. enter the directory with the command line
1. install node modules with `npm install` or `yarn install`
1. run the script with `node index.js`
1. a file should have been generated called `output.csv`. Upload this file to FreeAgent [here](https://viberly.freeagent.com/bank_accounts/upload/new)

## Contributing

Pull Requests and Issues welcome :)

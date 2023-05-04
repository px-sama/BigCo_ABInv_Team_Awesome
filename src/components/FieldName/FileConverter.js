const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const inputFile = './tables/RosettaStone.xlsx';

// Read the XLSX file
const workbook = XLSX.readFile(inputFile);

// Get the first worksheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the worksheet to an array of objects
const rows = XLSX.utils.sheet_to_json(worksheet);

// Convert the array of objects to an array of mappings
const mappings = rows.map(row => ({
  oldFieldName: row['Legacy Table'],
  newFieldName: row['Modernized Table'],
  newFieldLink: row['Link'],
}));

// Get the file name and extension of the input XLSX file
const { name, ext } = path.parse(inputFile);

// Name the output JSON file the same as the input XLSX file
const outputFileName = `./jsons/${name}.json`;

// Write the mappings to a JSON file
fs.writeFileSync(outputFileName, JSON.stringify(mappings, null, 2));

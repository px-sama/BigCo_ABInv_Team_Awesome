const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Path to the folder containing the Excel files
const inputFolder = './tables/';

// Path to the folder containing the outputted jsons
const outputFolder = './jsons/';

// Get a list of all the files in the input folder
const inputFiles = fs.readdirSync(inputFolder);

// Loop through each input file
inputFiles.forEach(inputFile => {

  // Ignore non-XLSX files
  if (path.extname(inputFile) !== '.xlsx') return;

  // Read the XLSX file
  const workbook = XLSX.readFile(path.join(inputFolder, inputFile));

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
  const { name } = path.parse(inputFile);

  // Name the output JSON file the same as the input XLSX file
  const outputFileName = `${name}.json`;

  // Write the mappings to a JSON file
  fs.writeFileSync(path.join(outputFolder, outputFileName), JSON.stringify(mappings, null, 2));
});

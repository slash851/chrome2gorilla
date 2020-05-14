/**
 * @author Karol.Bednarz
 * @description Exporting chrome passwords to gorilla format
 * @param [0] filename - file has to be in format csv (required)
 * @param [1] groupname - name for grouping passwords in gorilla
 */

import { v4 as uuidv4 } from "uuid";
const fs = require("fs");

//get filename from params
var terminalArguments: string[] = process.argv.slice(2);

if (terminalArguments.length === 0) {
  console.log(
    `Please run script with parameters {fileName.csv:mandatory} {groupName:optional}\n\nSample1: node index.js passwords.csv ChromeImport\nSample2: node index.js passwords.csv`
  );
} else if (terminalArguments[0].indexOf("csv") === -1) {
  console.log(
    `Incorrect input file format. Expected .csv\n\nSample1: node index.js passwords.csv ChromeImport\nSample2: node index.js passwords.csv`
  );
} else {
  processFile(terminalArguments[0], terminalArguments[1] || "ChromeImport");
}

function processFile(fileName, group) {
  let rawData: String = fs.readFileSync(`./${fileName}`, "utf8");

  // remove first line
  let exportCSV = rawData.substring(rawData.indexOf("\n") + 1);

  // add uuid for each list, add groupd
  exportCSV = exportCSV
    .split("\n")
    .map((line, index) => `${uuidv4()},${group},${line},`)
    .join("\n");

  exportCSV = `uuid,group,title,url,user,password,notes\n` + exportCSV;
  console.log(exportCSV);

  fs.writeFileSync("./gorillaFormatPasswordExport.csv", exportCSV);
}

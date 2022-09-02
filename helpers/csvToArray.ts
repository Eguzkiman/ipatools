import { normalize } from "./normalize";

//var csv is the CSV file with headers
export function csvToArray(csv: string) {
  var lines = csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(",").map((i) => i.replace("\r", ""));

  for (var i = 1; i < lines.length; i++) {
    var obj: { [key: string]: string } = {};
    var currentline = lines[i].split(",").map((i) => i.replace("\r", ""));
    console.log({ currentline });
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result;
}

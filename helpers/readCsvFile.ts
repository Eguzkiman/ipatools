import { csvToArray } from "./csvToArray";

interface Item {
  [key: string]: string;
}

export function readCsvFile(file?: File): Promise<Item[]> {
  if (!file) return Promise.reject();

  const reader = new FileReader();

  const promise = new Promise<Item[]>((resolve, reject) => {
    reader.addEventListener("load", () => {
      resolve(csvToArray(reader.result as string));
    });
    reader.readAsText(file);
  });

  return promise;
}

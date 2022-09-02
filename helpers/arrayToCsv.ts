import { Item } from "types/Item";

export function arrayToCsv(arr: Item[]) {
  const headers = Object.keys(arr[0]);

  let result = "";
  result += headers.join(",");
  result += "\n";

  for (let item of arr) {
    const values = Object.values(item).join(",");

    result += values;
    result += "\n";
    console.log({ values });
  }

  console.log(result);

  return result;
}

import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //starting index for slicing
  const startIdx = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIdx) // slice from
    .take(pageSize) //number of record in page
    .value(); //returns array
}

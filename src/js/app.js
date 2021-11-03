export default function sortValue(ob, order) {
  const temporari = Object.entries(ob);
  let result = [];
  for (const i of order) {
    const j = temporari.find((item) => item[0] === i);
    temporari.splice(temporari.indexOf(j), 1);
    result.push(j);
  }
  result = result.concat(temporari.sort());
  const summDat = [];
  result.forEach((item) => {
    const i = { 'key': item[0], 'value': item[1] };
    summDat.push(i);
  });
  return summDat;
}

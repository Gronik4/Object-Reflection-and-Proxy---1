export default function sortValue(ob, order) {
  let res = [];
  for (const item of order) {
    res.push({ key: item, value: ob[item] });
    delete ob[item];
  }
  const res1 = [];
  for (const item in ob) {
    res1.push({ key: item, value: ob[item] });
  }
  res1.sort((a, b) => {
    if (a.key > b.key) { return 1; } else { return -1; }
  });
  res = res.concat(res1);
  return res;
}

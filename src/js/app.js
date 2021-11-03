export default function sortValue(ob, order) {
  let temporari = Object.entries(ob);
  let result = [];
    for(let i of order) {
      let j = temporari.find(item => item[0] == i);
      temporari.splice(temporari.indexOf(j), 1);
      result.push(j);
    };
    result = result.concat(temporari.sort());
    const summDat = [];
    result.forEach((item) => {
      let i = {'key': item[0], 'value': item[1]}
      summDat.push(i);
    }) ;  
  return summDat;
}

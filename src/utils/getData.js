export default async function getData(url, setState) {
  let quoteArr = [];
  try {
    while (quoteArr.length <= 5) {
      const data = await fetch(url);
      // make mappable *
      const toJSON = await data.json();
      quoteArr.push(toJSON);
    }
    return setState(quoteArr);
  } catch {
    return false;
  }
}

export default function cleanSet(set, startString) {
  const list = [];
  for (const value of set.values()) {
    if (startString !== '' && value.startsWith(startString)) {
      list.push(value.slice(startString.length));
    }
  }
  return list.join('-');
}

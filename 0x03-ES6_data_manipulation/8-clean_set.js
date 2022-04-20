export default function cleanSet(set, startString) {
  const list = [];

  if (set !== null) {
    for (const value of set.values()) {
      if (startString !== '' && value.startsWith(startString)) {
        const newVal = value.slice(startString.length);
        if (newVal.length > 0) {
          list.push(newVal);
        }
      }
    }
  }
  return list.join('-');
}

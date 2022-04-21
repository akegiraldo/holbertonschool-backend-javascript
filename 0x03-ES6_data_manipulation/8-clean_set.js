export default function cleanSet(set, startString) {
  const list = [];

  for (const value of set.values()) {
    if (value !== undefined && startString !== undefined && typeof startString === 'string'
      && startString !== '' && value.startsWith(startString)) {
      const newVal = value.slice(startString.length);
      if (newVal.length > 0) {
        list.push(newVal);
      }
    }
  }

  return list.join('-');
}

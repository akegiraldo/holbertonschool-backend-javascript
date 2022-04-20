export default function updateUniqueItems(map) {
  try {
    for (const [key, value] of map.entries()) {
      map.set(key, value === 1 ? 100 : value);
    }
  } catch (err) {
    throw Error('Cannot process');
  }
}

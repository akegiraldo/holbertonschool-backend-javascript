export default function iterateThroughObject(reportWithIterator) {
  const names = [];
  for (const name of reportWithIterator) {
    if (name !== undefined) {
      names.push(name);
    }
  }

  return names.join(' | ');
}

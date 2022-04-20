export default function hasValuesFromArray(set, array) {
  const validateList = array.map((element) => set.has(element));
  return validateList.every((value) => value === true);
}

export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(arrayBuffer);
  int8Array[position] = value;

  const dataView = new DataView(arrayBuffer);

  return dataView;
}

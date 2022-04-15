export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set _name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get _name() {
    return this._name;
  }

  set _length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get _length() {
    return this._length;
  }

  set _students(students) {
    if (typeof students !== 'object') {
      throw TypeError('Students must be an array');
    }
    this._students = students;
  }

  get _students() {
    return this._students;
  }
}

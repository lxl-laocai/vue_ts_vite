export default class ComputedRef{
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value
  }
  set value(value) {
    this._value = value;
  }
}

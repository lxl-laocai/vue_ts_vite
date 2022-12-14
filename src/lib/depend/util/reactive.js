import Dep from "./Dep";
const dep = new Dep();
export default function reactive(state) {
  return new Proxy(state, {
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver);
      dep.collect(target, key)
      return value !== null && typeof value === "object" ? reactive(value) : value;
    },
    set(target, key, value, receiver) {
      const oVal = Reflect.get(target, key, receiver);
      const res = Reflect.set(target, key, value, receiver);
      dep.notify(target, key, value,oVal)
      return res;
    }
  });
}

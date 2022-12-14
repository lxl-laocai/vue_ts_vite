import Dep from "./Dep";
import ComputedRef from "./ComputedRef";

export function watchEffect(callback) {
  Dep.callbackFn = callback;
  callback();
  Dep.callbackFn = null;
}

export function watch(depFn, callback) {
  Dep.callbackFn = callback;
  depFn();
  Dep.callbackFn = null;
}

export function computed(callback) {
  Dep.callbackFn = callback;
  const val = callback();
  const computedRef = new ComputedRef(val);
  Object.defineProperty(callback, "computedRef", {
    value: computedRef
  });
  Dep.callbackFn = null;
  return computedRef;
}

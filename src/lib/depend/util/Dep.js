export default class Dep {
  static callbackFn;
  constructor() {
    this.effectMap = new WeakMap();
  }
  collect(target, key) {
    const { callbackFn } = Dep;
    if (callbackFn) {
      let depMap = this.effectMap.get(target);
      if (!depMap) {
        depMap = new Map();
        this.effectMap.set(target, depMap);
      }
      let depSet = depMap.get(key);
      if (!depSet) {
        depSet = new Set();
        depMap.set(key, depSet);
      }
      depSet.add(callbackFn);
    }
  }

  notify(target, key, nVal, oVal) {
    const depMap = this.effectMap.get(target);
    if (!depMap) return;
    const depSet = depMap.get(key);
    depSet.forEach(depCB => {
      const value = depCB(nVal, oVal);
      if (depCB.computedRef) {
        depCB.computedRef.value = value;
      }
    });
  }
}
/*
weakMap{
  data: Map{
    a: Set([cb,cb]),
    {c:1}: Set([cb,cb])
  }
}
*/

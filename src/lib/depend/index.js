import { reactive, watchEffect, watch,computed } from "./util";

const ABtn = document.getElementById("ABtn");
const BBtn = document.getElementById("BBtn");
const state = reactive({
  a: 1,
  b: {
    c: 2
  }
});

ABtn.addEventListener("click", function() {
  state.a = 11;
  console.log("computed =>",result);
}, false);
BBtn.addEventListener("click", function() {
  state.b.c = 22;
  console.log("computed =>",result);
}, false);
const result = computed(() => state.a + state.b.c);
watchEffect(() => {
  console.log("watchEffect => state.a", state.a);
});
watchEffect(() => {
  console.log("watchEffect => state.b.c", state.b.c);
});

watch(() => state.a, (nVal, oVal) => {
  console.log("watch => state.a", nVal, oVal);
});
watch(() => state.b.c, (nVal, oVal) => {
  console.log("watch => state.b.c", nVal, oVal);
});

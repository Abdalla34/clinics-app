// export function useToggle(Param = false) {
//   const state = ref(Param);

//   function toggle() {
//     state.value = !state.value;
//   }

//   return { state, toggle };
// }
export function useToogle(Param = false) {
  const state = ref(Param);
  function toogle() {
    state.value = !state.value;
  }
  return { state, toogle };
}

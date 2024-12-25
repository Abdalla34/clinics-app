function Tolocalstorge(Param) {
  Param.value = localStorage.setItem("Details", JSON.stringify(Param.value));
}


function selection() {
  // let option = $("#select option:selected").text();
  var e = document.getElementById("select");
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
  localStorage.setItem("basis-set", value);
  // console.log(value + " " + text);
}

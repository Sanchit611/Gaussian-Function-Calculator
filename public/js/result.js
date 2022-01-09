function back() {
  window.location = "index.html";
}
var str;
function myFunction() {
  str = document.body.textContent;
  console.log(str);
  fs.writeFile("output.txt", "bt", function (err) {
    if (err) throw err;
    console.log("File Written");
  });
}

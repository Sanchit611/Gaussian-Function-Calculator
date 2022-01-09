// const express = require("express");
// const app = express();
// const path = require("path");
// const mongoose = require("mongoose");
// const http = require("http");
// const server = http.createServer(app);

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

let freq = [];
var unique = new Map();
let x = 1000;
let compound = document.getElementById("compound");

compound.textContent = "";
for (let i = 0; i < 118; i++) freq.push(0);

function memset() {
  for (let i = 0; i < 118; i++) freq[i] = 0;
}
function SelectElement(atomicNo, symbol) {
  if (freq[atomicNo - 1] == 0) {
    freq[atomicNo - 1]++;
    unique.set(symbol, freq[atomicNo - 1]);
    let comp = compound.textContent;
    comp += symbol;
    let final = "";
    for (let i = 0; i < comp.length; i++) {
      if (parseInt(comp[i]) || parseInt(comp[i]) == 0) final += comp[i].sub();
      else final += comp[i];
    }
    compound.innerHTML = final;
  } else {
    let comp = compound.textContent;
    freq[atomicNo - 1]++;
    unique.set(symbol, freq[atomicNo - 1]);
    let nos = 0;
    for (let i = comp.length - 1; i >= 0; i--) {
      if (parseInt(comp[i]) || parseInt(comp[i]) == 0) {
        nos++;
      } else break; //C4H11   -> C4H12
    }
    comp = comp.substr(0, comp.length - nos);
    comp += String(freq[atomicNo - 1]);
    let final = "";
    for (let i = 0; i < comp.length; i++) {
      if (parseInt(comp[i]) || parseInt(comp[i]) == 0) final += comp[i].sub();
      else final += comp[i];
    }

    compound.innerHTML = final;
  }
}
function reset() {
  memset();
  compound.innerText = "";
  unique.clear();
}
function timeout() {
  setTimeout(() => {}, 3000);
}

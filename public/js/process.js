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

function calculate() {
  localStorage.myMap = JSON.stringify(Array.from(unique.entries()));

  let mf = document.getElementById("compound").textContent;
  console.log();
  console.log(mf);
  //window.location = "temp.html";
  document.getElementById("myDIV").style.display = "block";
  document.getElementById("yolo").style.opacity = "0.1";
  document.getElementById("yolo").style.zIndex = "-10";
  document.getElementById("myDIV").style.zIndex = "10";

  setTimeout(() => {
    document.getElementById("myDIV").style.display = "none";
  }, 1000);

  setTimeout(function () {
    window.location = "result.html";
  }, 1000);
  selection();
  solve();
}
// let gp = 0;
// let cf = 0;
// let p = ["px", "py", "pz"];
// let d = ["dxy", "dyz", "dxz", "dx2y2", "dz2"];
// let orbitals = [
//   "1s",
//   "2s",
//   "2p",
//   "3s",
//   "3p",
//   "3d",
//   "4s",
//   "4p",
//   "4d",
//   "4f",
//   "5s",
//   "5p",
//   "5d",
//   "5f",
//   "6s",
//   "6p",
//   "6d",
//   "7s",
//   "7p",
// ];
// function solve() {
//   console.log("in function", unique);
//   for (let [ele, cou] of unique) {
//     console.log(" in loop");
//     console.log(config);
//     for (let i = 0; i < cou; i++) {
//       for (let j = 0; j < orbitals.length; j++) {
//         if (config[ele][orbitals[j]] != 0) {
//           if (orbitals[j][1] == "p") {
//             console.log("in p");
//             gp += 9;
//             cf += 3;
//             continue;
//           }
//           if (orbitals[j][1] == "d") {
//             console.log("in d");
//             gp += 15;
//             cf += 5;
//             continue;
//           }
//           if (orbitals[j][1] == "f") {
//             console.log("in f" + " of" + ele + " " + config[ele][orbitals[j]]);
//             gp += 21;
//             cf += 7;
//             continue;
//           }
//           if (orbitals[j][1] == "s") {
//             console.log("in s");
//             gp += 3;
//             cf += 1;
//             continue;
//           }
//         }
//       }
//     }
//   }
//   console.log(gp + " " + cf);
//   selection();
// }

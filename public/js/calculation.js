// const { config } = require("process");

let nmap = new Map(JSON.parse(localStorage.myMap));
console.log(nmap);
console.log("svseubco");
let basis_set = localStorage.getItem("basis-set");
console.log(typeof basis_set);
console.log(basis_set);
localStorage.clear();
//clear local storage also after all the calculations
let gp = 0;
let cf = 0;
let p = ["px", "py", "pz"];
let d = ["dxy", "dyz", "dxz", "dx2y2", "dz2"];
let orbitals = [
  "1s",
  "2s",
  "2p",
  "3s",
  "3p",
  "3d",
  "4s",
  "4p",
  "4d",
  "4f",
  "5s",
  "5p",
  "5d",
  "5f",
  "6s",
  "6p",
  "6d",
  "7s",
  "7p",
];
let list = document.getElementById("splits");
// if (document.body.clientWidth >= 820) 
// document.getElementsByClassName("mobile").display="none";

solve();
function solve() {
  if (basis_set == "3-21G") {
    split_valence2();
    return;
  }

  if (basis_set == "6-31G") {
    split_valence3();
    return;
  }

  if (basis_set == "6-21G") {
    split_valence();

    return;
  }
  console.log("in function", nmap);
  for (let [ele, cou] of nmap) {
    console.log(" in loop");
    console.log(config);

    for (let i = 0; i < cou; i++) {
      let list_split = document.createElement("ul");

      let element = document.createElement("li");
      element.textContent = ele;
      // add line

      list.appendChild(element);
      for (let j = 0; j < orbitals.length; j++) {
        if (config[ele][orbitals[j]] != 0) {
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF<br>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 9;
            cf += 3;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>3GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 15;
            cf += 5;
            continue;
          }
          if (orbitals[j][1] == "f") {
            console.log("in f" + " of" + ele + " " + config[ele][orbitals[j]]);
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}f`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let li6 = document.createElement("li");
            let li7 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}f<sub>z<sup>3</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}f<sub>xz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}f<sub>yz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}f<sub>xyz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}f<sub>z(x<sup>2</sup>-y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>3GP , 1CF`;
            li6.innerHTML = `${orbitals[j][0]}f<sub>x(x<sup>2</sup>-3y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>3GP , 1CF`;
            li7.innerHTML = `${orbitals[j][0]}f<sub>y(y<sup>2</sup>-3x<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>3GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            ilist.appendChild(li6);
            ilist.appendChild(li7);
            list_split.appendChild(ilist);
            list.appendChild(list_split);
            gp += 21;
            cf += 7;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 3;
            cf += 1;
            continue;
          }
        }
      }
      let dash = document.createElement("ul");
      dash.innerHTML = "<hr>";
      dash.style.listStyleType = "none";
      dash.style.marginLeft = "-80px";
      list.appendChild(dash);
    }
  }
  // var li = document.createElement("ul");
  // var li2 = document.createElement("ul");
  // li.style.listStyleType = "none";
  // li2.style.listStyleType = "none";
  // li.innerHTML = `<center> <p style="margin-right=100px;">TOTAL COUNT </center> <br> <center><b><h3 style="display: inline;">Gaussian Primitives</h3></b> <i class="fas fa-equals"></i> ${gp}</center>`;
  // li2.innerHTML = `<center><b> <h3 style="display: inline;">Contracted Functions</h3> </b><i class="fas fa-equals"></i> ${cf}</center>`;

  // list.appendChild(li);
  // list.appendChild(li2);
  let div1 = document.createElement("div");
  div1.style["display"] = "flex";
  div1.style["justifyContent"] = "center";
  div1.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div1.style["marginTop"] = "10%";
  else div1.style["marginTop"] = "2%";
  div1.textContent = "TOTAL COUNT";
  let body_result = document.getElementById("body");
  body_result.appendChild(div1);
  console.log(gp + " " + cf);
  let div2 = document.createElement("div");
  div2.style["display"] = "flex";
  div2.style["justifyContent"] = "center";
  div2.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div2.style["marginTop"] = "10%";
  else div2.style["marginTop"] = "2%";
  div2.innerHTML += `Gaussian Primitives = `;
  div2.innerHTML += `${gp}`;
  body_result.appendChild(div2);
  let div3 = document.createElement("div");
  div3.style["display"] = "flex";
  div3.style["justifyContent"] = "center";
  div3.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div3.style["marginTop"] = "10%";
  else div3.style["marginTop"] = "2%";
  div3.innerHTML += `Contracted Functions = `;
  div3.innerHTML += `${cf}`;
  body_result.appendChild(div3);
  console.log(gp + " " + cf);
}
function split_valence() {
  console.log("in function", nmap);
  for (let [ele, cou] of nmap) {
    console.log(" in loop");
    console.log(config);

    for (let i = 0; i < cou; i++) {
      let list_split = document.createElement("ul");

      let element = document.createElement("li");
      element.textContent = ele;
      // add line
      list.appendChild(element);
      let maxi = 0;
      for (let j = 0; j < orbitals.length; j++) {
        if (config[ele][orbitals[j]] != 0) {
          maxi = orbitals[j][0];
          console.log(orbitals[j][0]);
        }
      }
      console.log(maxi);
      for (let j = 0; j < orbitals.length; j++) {
        if (parseInt(orbitals[j][0]) == maxi) break;
        if (config[ele][orbitals[j]] != 0) {
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 6;
            cf += 1;
            continue;
          }
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF<br>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 18;
            cf += 3;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>6GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 30;
            cf += 5;
            continue;
          }
          if (orbitals[j][1] == "f") {
            console.log("in f" + " of" + ele + " " + config[ele][orbitals[j]]);
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}f`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let li6 = document.createElement("li");
            let li7 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}f<sub>z<sup>3</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}f<sub>xz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}f<sub>yz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}f<sub>xyz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}f<sub>z(x<sup>2</sup>-y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>6GP , 1CF`;
            li6.innerHTML = `${orbitals[j][0]}f<sub>x(x<sup>2</sup>-3y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>6GP , 1CF`;
            li7.innerHTML = `${orbitals[j][0]}f<sub>y(y<sup>2</sup>-3x<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>6GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            ilist.appendChild(li6);
            ilist.appendChild(li7);
            list_split.appendChild(ilist);
            list.appendChild(list_split);
            gp += 42;
            cf += 7;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 6;
            cf += 1;
            continue;
          }
        }
      }
      // SPLIT VALENCE
      for (let j = 0; j < orbitals.length; j++) {
        if (parseInt(orbitals[j][0]) != maxi) continue;
        else {
          if (config[ele][orbitals[j]] == 0) continue;
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 9;
            cf += 6;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 15;
            cf += 10;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            // let no_bullet_li = document.createElement("ul");
            // no_bullet_li.innerHTML = `style="list-style: none;"<li></li>`;
            // list.append(no_bullet_li);
            li.innerHTML = `${orbitals[j][0]}s<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 3;
            cf += 2;
            continue;
          }
        }
      }
      let dash = document.createElement("ul");
      dash.innerHTML = "<hr>";
      dash.style.listStyleType = "none";
      dash.style.marginLeft = "-80px";
      list.appendChild(dash);
    }
  }
  // var li = document.createElement("ul");
  // var li2 = document.createElement("ul");
  // li.style.listStyleType = "none";
  // li2.style.listStyleType = "none";
  // li.innerHTML = `<center> <p style="margin-right=100px;">TOTAL COUNT </center> <br> <center><b><h3 style="display: inline;">Gaussian Primitives</h3></b> <i class="fas fa-equals"></i> ${gp}</center>`;
  // li2.innerHTML = `<center><b> <h3 style="display: inline;">Contracted Functions</h3> </b><i class="fas fa-equals"></i> ${cf}</center>`;

  // list.appendChild(li);
  // list.appendChild(li2);
  let div1 = document.createElement("div");
  div1.style["display"] = "flex";
  div1.style["justifyContent"] = "center";
  div1.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div1.style["marginTop"] = "10%";
  else div1.style["marginTop"] = "2%";
  div1.textContent = "TOTAL COUNT";
  let body_result = document.getElementById("body");
  body_result.appendChild(div1);
  console.log(gp + " " + cf);
  let div2 = document.createElement("div");
  div2.style["display"] = "flex";
  div2.style["justifyContent"] = "center";
  div2.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div2.style["marginTop"] = "10%";
  else div2.style["marginTop"] = "2%";
  div2.innerHTML += `Gaussian Primitives = `;
  div2.innerHTML += `${gp}`;
  body_result.appendChild(div2);
  let div3 = document.createElement("div");
  div3.style["display"] = "flex";
  div3.style["justifyContent"] = "center";
  div3.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div3.style["marginTop"] = "10%";
  else div3.style["marginTop"] = "2%";
  div3.innerHTML += `Contracted Functions = `;
  div3.innerHTML += `${cf}`;
  body_result.appendChild(div3);
  console.log(gp + " " + cf);
}

function split_valence2() {
  console.log("in function", nmap);
  for (let [ele, cou] of nmap) {
    console.log(" in loop");
    console.log(config);

    for (let i = 0; i < cou; i++) {
      let list_split = document.createElement("ul");

      let element = document.createElement("li");
      element.textContent = ele;
      // add line
      list.appendChild(element);
      let maxi = 0;
      for (let j = 0; j < orbitals.length; j++) {
        if (config[ele][orbitals[j]] != 0) {
          maxi = orbitals[j][0];
          console.log(orbitals[j][0]);
        }
      }
      console.log(maxi);
      for (let j = 0; j < orbitals.length; j++) {
        if (parseInt(orbitals[j][0]) == maxi) break;
        if (config[ele][orbitals[j]] != 0) {
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 3;
            cf += 1;
            continue;
          }
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF<br>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 9;
            cf += 3;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>3GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 15;
            cf += 5;
            continue;
          }
          if (orbitals[j][1] == "f") {
            console.log("in f" + " of" + ele + " " + config[ele][orbitals[j]]);
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}f`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let li6 = document.createElement("li");
            let li7 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}f<sub>z<sup>3</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}f<sub>xz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}f<sub>yz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}f<sub>xyz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}f<sub>z(x<sup>2</sup>-y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>3GP , 1CF`;
            li6.innerHTML = `${orbitals[j][0]}f<sub>x(x<sup>2</sup>-3y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>3GP , 1CF`;
            li7.innerHTML = `${orbitals[j][0]}f<sub>y(y<sup>2</sup>-3x<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>3GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            ilist.appendChild(li6);
            ilist.appendChild(li7);
            list_split.appendChild(ilist);
            list.appendChild(list_split);
            gp += 21;
            cf += 7;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 3;
            cf += 1;
            continue;
          }
        }
      }
      // SPLIT VALENCE
      for (let j = 0; j < orbitals.length; j++) {
        if (parseInt(orbitals[j][0]) != maxi) continue;
        else {
          if (config[ele][orbitals[j]] == 0) continue;
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 9;
            cf += 6;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 15;
            cf += 10;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            // let no_bullet_li = document.createElement("ul");
            // no_bullet_li.innerHTML = `style="list-style: none;"<li></li>`;
            // list.append(no_bullet_li);
            li.innerHTML = `${orbitals[j][0]}s<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>2GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 3;
            cf += 2;
            continue;
          }
        }
      }
      let dash = document.createElement("ul");
      dash.innerHTML = "<hr>";
      dash.style.listStyleType = "none";
      dash.style.marginLeft = "-80px";
      list.appendChild(dash);
    }
  }
  // var li = document.createElement("ul");
  // var li2 = document.createElement("ul");
  // li.style.listStyleType = "none";
  // li2.style.listStyleType = "none";

  // li.innerHTML = `<div style="display: flex; justify-content:center ;"><div>TOTAL COUNT </center> <br> <center><b><h3 style="display: inline;">Gaussian Primitives</h3></b> <i class="fas fa-equals"></i> ${gp}</div>`;
  // li2.innerHTML = `<center><b> <h3 style="display: inline;">Contracted Functions</h3> </b><i class="fas fa-equals"></i> ${cf}</center>`;

  // list.appendChild(li);
  // list.appendChild(li2);
  let div1 = document.createElement("div");
  div1.style["display"] = "flex";
  div1.style["justifyContent"] = "center";
  div1.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div1.style["marginTop"] = "10%";
  else div1.style["marginTop"] = "2%";
  div1.textContent = "TOTAL COUNT";
  let body_result = document.getElementById("body");
  body_result.appendChild(div1);
  console.log(gp + " " + cf);
  let div2 = document.createElement("div");
  div2.style["display"] = "flex";
  div2.style["justifyContent"] = "center";
  div2.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div2.style["marginTop"] = "10%";
  else div2.style["marginTop"] = "2%";
  div2.innerHTML += `Gaussian Primitives = `;
  div2.innerHTML += `${gp}`;
  body_result.appendChild(div2);
  let div3 = document.createElement("div");
  div3.style["display"] = "flex";
  div3.style["justifyContent"] = "center";
  div3.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div3.style["marginTop"] = "10%";
  else div3.style["marginTop"] = "2%";
  div3.innerHTML += `Contracted Functions = `;
  div3.innerHTML += `${cf}`;
  body_result.appendChild(div3);
}

function split_valence3() {
  console.log("in function", nmap);
  for (let [ele, cou] of nmap) {
    console.log(" in loop");
    console.log(config);

    for (let i = 0; i < cou; i++) {
      let list_split = document.createElement("ul");

      let element = document.createElement("li");
      element.textContent = ele;
      // add line
      list.appendChild(element);
      let maxi = 0;
      for (let j = 0; j < orbitals.length; j++) {
        if (config[ele][orbitals[j]] != 0) {
          maxi = orbitals[j][0];
          console.log(orbitals[j][0]);
        }
      }
      console.log(maxi);
      for (let j = 0; j < orbitals.length; j++) {
        if (parseInt(orbitals[j][0]) == maxi) break;
        if (config[ele][orbitals[j]] != 0) {
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 6;
            cf += 1;
            continue;
          }
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF<br>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 18;
            cf += 3;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>6GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 30;
            cf += 5;
            continue;
          }
          if (orbitals[j][1] == "f") {
            console.log("in f" + " of" + ele + " " + config[ele][orbitals[j]]);
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}f`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let li6 = document.createElement("li");
            let li7 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}f<sub>z<sup>3</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}f<sub>xz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}f<sub>yz<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}f<sub>xyz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}f<sub>z(x<sup>2</sup>-y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>6GP , 1CF`;
            li6.innerHTML = `${orbitals[j][0]}f<sub>x(x<sup>2</sup>-3y<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>6GP , 1CF`;
            li7.innerHTML = `${orbitals[j][0]}f<sub>y(y<sup>2</sup>-3x<sup>2</sup>)</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>6GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            ilist.appendChild(li6);
            ilist.appendChild(li7);
            list_split.appendChild(ilist);
            list.appendChild(list_split);
            gp += 42;
            cf += 7;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 6GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 6;
            cf += 1;
            continue;
          }
        }
      }
      // SPLIT VALENCE
      for (let j = 0; j < orbitals.length; j++) {
        if (parseInt(orbitals[j][0]) != maxi) continue;
        else {
          if (config[ele][orbitals[j]] == 0) continue;
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>3GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>3GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>3GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`; //list->list_split->ilist

            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 12;
            cf += 6;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>3GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> 1GP , 1CF</sub>`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);

            gp += 20;
            cf += 10;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            // let no_bullet_li = document.createElement("ul");
            // no_bullet_li.innerHTML = `style="list-style: none;"<li></li>`;
            // list.append(no_bullet_li);
            li.innerHTML = `${orbitals[j][0]}s<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg> <sup>Big<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>3GP, 1CF</sup><br>&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
            </svg><sub>Small<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>1GP , 1CF</sub>`;
            list_split.appendChild(li);
            list.appendChild(list_split);

            gp += 4;
            cf += 2;
            continue;
          }
        }
      }
      let dash = document.createElement("ul");
      dash.innerHTML = "<hr>";
      dash.style.listStyleType = "none";
      dash.style.marginLeft = "-80px";
      list.appendChild(dash);
    }
  }
  // var li = document.createElement("ul");
  // var li2 = document.createElement("ul");
  // li.style.listStyleType = "none";
  // li2.style.listStyleType = "none";

  // li.innerHTML = `<center> <p style="margin-right=100px;"><img src="https://see.fontimg.com/api/renderfont4/eZOn3/eyJyIjoiZnMiLCJoIjozOSwidyI6MTI1MCwiZnMiOjMxLCJmZ2MiOiIjRjJFQkVCIiwiYmdjIjoiIzBFMDUyMiIsInQiOjF9/VG90YWwgQ291bnQ/party-confetti-regular.png" alt=""></center> <br> <center><b><h3 style="display: inline;">Gaussian Primitives</h3></b> <i class="fas fa-equals"></i> ${gp}</center>`;
  // li2.innerHTML = `<center><b> <h3 style="display: inline;">Contracted Functions</h3> </b><i class="fas fa-equals"></i> ${cf}</center>`;

  // list.appendChild(li);
  // list.appendChild(li2);
  // console.log(gp + " " + cf);
  let div1 = document.createElement("div");
  div1.style["display"] = "flex";
  div1.style["justifyContent"] = "center";
  div1.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div1.style["marginTop"] = "10%";
  else div1.style["marginTop"] = "2%";
  div1.textContent = "TOTAL COUNT";
  let body_result = document.getElementById("body");
  body_result.appendChild(div1);
  console.log(gp + " " + cf);
  let div2 = document.createElement("div");
  div2.style["display"] = "flex";
  div2.style["justifyContent"] = "center";
  div2.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div2.style["marginTop"] = "10%";
  else div2.style["marginTop"] = "2%";
  div2.innerHTML += `Gaussian Primitives = `;
  div2.innerHTML += `${gp}`;
  body_result.appendChild(div2);
  let div3 = document.createElement("div");
  div3.style["display"] = "flex";
  div3.style["justifyContent"] = "center";
  div3.style["fontSize"] = "100%";
  if (document.body.clientWidth <= 820) div3.style["marginTop"] = "10%";
  else div3.style["marginTop"] = "2%";
  div3.innerHTML += `Contracted Functions = `;
  div3.innerHTML += `${cf}`;
  body_result.appendChild(div3);
}
let resDiv = document.createElement("div");
resDiv.style["display"] = "flex";
resDiv.style["justifyContent"] = "center";
resDiv.style["marginTop"] = "20px";
resDiv.innerHTML = `<button onclick="back()" style=" width: 200px; background-color: transparent; color: blanchedalmond; border-color: blanchedalmond; font-size: 32px;border-radius: 10px; padding: 5px; "> <i class="far fa-arrow-alt-circle-left"></i> <b>Go back</b> </button>`;
document.getElementById("body").appendChild(resDiv);

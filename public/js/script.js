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

function checkBox(number) {
  if (number == 1) {
    // document.body.style.background = "#7f5a83";
    // document.body.style.background =
    //   "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)";
    document.body.style.backgroundImage =
      "url(https://i.pinimg.com/originals/e6/d6/de/e6d6de4b2197cc8e4e12555e121e0f0a.gif)";

 
      document.body.style.background = "#ac46a1;";
  }
  if (number == 2) {
    document.body.style.background = "#90d5ec";0
    document.body.style.background =
      "linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)";
    // document.body.style.backgroundImage =
    //   "url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/9c0722106004343.5f85fead2894a.gif)";
  }
  if (number == 3) {
    document.body.style.background = "#fce043;";
    document.body.style.background =
      "#343a40";


  }
  if (number == 4) {
    document.body.style.background = "#003b64;";
    document.body.style.background =
      "#3e1f47";
  }
  if (number == 5) {
    document.body.style.background = "#fdb813;";
    document.body.style.background =
      "linear-gradient(315deg, #fdb813 0%, #788cb6 74%)";
  }
}

// 'use strict';
// jshint esversion:6

let stand;
let n = 0;
createBar();


function runTheBar() {
  let windowHeight = window.innerHeight;
  for (var i = 0; i < document.querySelectorAll('.bar').length; i++) {
    document.querySelectorAll('.bar')[i].style.height = `${Math.floor(Math.random() * (windowHeight - 50))}px`;
  }
}

function createBar() {
  browserWidth = window.innerWidth;
  const numberOfBars = Math.floor(browserWidth/25);
  for (var i = 0; i < numberOfBars; i++) {
    stand = document.createElement("div");
    stand.className = "bar";
    document.getElementById("row").appendChild(stand);
    document.querySelectorAll('.bar')[i].style.left = `${n}px`;
    n = n + 25;
  }
  setInterval(runTheBar, 600);
}

window.addEventListener("resize", function(event) {
  setTimeout(location.reload(), 2500);
});

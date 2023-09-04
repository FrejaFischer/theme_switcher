"use strict";

const light = document.querySelector("#li");
const dark = document.querySelector("#da");
const body = document.querySelector("body");
const select = document.querySelector("select");

select.value = "light";
select.addEventListener("change", changeTheme);

function changeTheme(evt) {
  console.log("changeTheme");

  if (evt.target.value === "dark") {
    body.dataset.theme = "dark";
  } else if (evt.target.value === "platypus") {
    body.dataset.theme = "platypus";
  } else if (evt.target.value === "perry") {
    body.dataset.theme = "perry";
  } else {
    body.dataset.theme = "light";
  }
}

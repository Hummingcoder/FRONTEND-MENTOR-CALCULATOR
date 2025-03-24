const theme_switcher = document.querySelector(".theme-controls");
const main_input = document.querySelector(".calc-screen");
const mini_input = document.querySelector(".calc-screen-mini");
const keys = document.querySelectorAll(".key");

const main = document.querySelector("main");

let inputVal = "";
let miniVal = "";

document.addEventListener("DOMContentLoaded", () => {
  main_input.value = "";
  mini_input.value = "";
  inputVal = "";
  miniVal = "";
});

theme_switcher.addEventListener("click", (e) => {
  changeTheme(e.target);
});

function changeTheme(btn) {
  if (btn.classList.contains("btn1")) {
    main.className = "theme1";
  }
  if (btn.classList.contains("btn2")) {
    main.className = "theme2";
  }
  if (btn.classList.contains("btn3")) {
    main.className = "theme3";
  }
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.classList.contains("key-del")) {
      inputVal = inputVal.slice(0, inputVal.length - 1);
      main_input.value = inputVal;
    }
    if (key.classList.contains("key-equal")) {
      inputVal = evaluate(miniVal, inputVal);
      main_input.value = Number(inputVal).toLocaleString();
      miniVal = "";
      mini_input.value = "";
    }
    if (key.classList.contains("key-reset")) {
      inputVal = "";
      miniVal = "";
      main_input.value = "";
      mini_input.value = "";
    }
    if (key.value !== "") {
      addInputVal(key.value);

      if (!"0123456789.".includes(key.value)) {
        addMiniVal(inputVal);
        inputVal = "";
        main_input.value = "";
      }
    }
  });
});

function addInputVal(str) {
  inputVal += str;
  main_input.value = inputVal;
}

function addMiniVal(str) {
  miniVal =
    evaluate(miniVal, str.slice(0, str.length - 1)) + str.slice(str.length - 1);

  mini_input.value = miniVal;
}

function evaluate(str1, str2) {
  let nStr = eval(str1 + str2);
  return Number.isInteger(nStr) ? String(nStr) : String(nStr.toFixed(2));
}

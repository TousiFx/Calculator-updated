let display = document.getElementById("display");

function appealNum(value) {
  let oprators = ["+", "-", "/", "*", "%"];
  const lastCount = display.value.slice(-1);
  let dotPress = ["."];

  function isValueOprator(input) {
    return oprators.includes(input);
  }
  function isValuedot(input) {
    return dotPress.includes(input);
  }

  let lastisOprator = isValueOprator(lastCount);
  let currentValue = isValueOprator(value);

  let currentVal = isValuedot(value);
  let lastisdot = isValuedot(lastCount);

  if (lastisdot && currentVal) {
    return;
  }

  if (lastisOprator && currentValue) {
    return;
  }
  if (display.value === "Error") {
    display.value = "";
  }
  if (value === ".") {
    if (display.value === "") {
      display.value = "0";
    }
    if (display.value === value) {
      display.value = "0";
    }
    if (isValueOprator(lastCount)) {
      display.value += "0";
    }
  }
  display.value += value;
}

function cleanNum() {
  display.value = "";
}
function cleanDel() {
  if (display.value === "Error") {
    display.value = "";
  } else if (display.value !== "Error") {
    display.value = display.value.slice(0, -1);
  }
}
function calculate() {
  if (display.value === "" || display.value === "Error") {
    return;
  }
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

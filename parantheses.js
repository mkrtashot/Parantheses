"use strict";

function pakagic(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      arr.push(str[i]);
    }
    if (str[i] === ")") {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      }
    }
    if (str[i] === "}") {
      if (arr[arr.length - 1] === "{") {
        arr.pop();
      }
    }
    if (str[i] === "]") {
      if (arr[arr.length - 1] === "[") {
        arr.pop();
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(pakagic("{({})}"));

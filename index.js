const container = document.querySelector(".container");
const btn = document.querySelector("button");
const btn2 = document.querySelector(".btn-2");
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.setAttribute("class", "div");
    for (let j = 0; j < 16; j++) {
      let row = document.createElement("div");
      row.setAttribute("class", "div");
      row.style.border = "2px solid black";
      column.appendChild(row);
      row.addEventListener("mouseenter", () => {
        row.classList.toggle("hover");
      });
      btn2.addEventListener("click", () => {
        row.classList.remove("hover");
      });
    }
    container.appendChild(column);
  }
});

btn.addEventListener("click", () => {
  container.innerHTML = "";

  let num = +prompt("Enter the grid size: ", "16");
  if (num > 100) {
    alert("Choose a smaller number");
  } else if (isNaN(num) || num === null || num === "" || num === " ") {
    alert("Please choose a valid number");
  } else {
    for (let i = 0; i < num; i++) {
      let column = document.createElement("div");
      column.setAttribute("class", "div");
      for (let j = 0; j < num; j++) {
        let row = document.createElement("div");
        row.setAttribute("class", "div");
        row.style.border = "2px solid black";
        column.appendChild(row);
        row.addEventListener("mouseenter", () => {
          row.classList.toggle("hover");
        });
        btn2.addEventListener("click", () => {
          row.classList.remove("hover");
        });
      }
      container.appendChild(column);
    }
  }
});

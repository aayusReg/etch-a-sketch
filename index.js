const container = document.querySelector(".container");
const btn = document.querySelector("button");

function onClick() {
  container.innerHTML = "";

  let num = +prompt("Enter the grid size: ","16");
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
        row.addEventListener('mouseenter',()=>{
            row.classList.toggle('hover')
        })
      }
      container.appendChild(column)
    }
  }
}
btn.addEventListener("click", onClick);

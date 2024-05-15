const container = document.querySelector(".container");
let divs = [];
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    divs.push(div);
  }
}

divs.forEach((div) => {
  div.setAttribute("class", "div");
  div.addEventListener("mouseenter", () => {
    div.classList.toggle("hover");
  });

  container.appendChild(div);
});

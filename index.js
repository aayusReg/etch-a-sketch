const container = document.querySelector(".container");
let div;
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    div = document.createElement("div");
    div.setAttribute('class','div')
    container.appendChild(div);
  }
}


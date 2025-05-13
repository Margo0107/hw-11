//Pythagorean table
const container = document.getElementById("table-container");
const table = document.createElement("table");

for (let row = 1; row <= 10; row++) {
  const tr = document.createElement("tr");

  for (let col = 1; col <= 10; col++) {
    const td = document.createElement("td");
    td.textContent = row * col;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
container.appendChild(table);

//the text changes color when you click on the button
const text = document.getElementById("text");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
  text.classList.toggle("red");
});

//random image + btn random
const image = document.getElementById("randomImage");
const buttonImg = document.getElementById("randomBtn");

buttonImg.addEventListener("click", () => {
  const randomNumbers = Math.floor(Math.random() * 9) + 1;

  const imagePath = `image/${randomNumbers}_img.jpg`;
  image.src = imagePath;
});

const container = document.getElementById('table-container');
const table = document.createElement('table');

for (let row = 1; row <= 10; row++){
    const tr = document.createElement('tr');

    for (let col = 1; col <= 10; col++) {
    const td = document.createElement('td');
    td.textContent = row * col;
    tr.appendChild(td);
    }
    table.appendChild(tr);
}
container.appendChild(table);



const text = document.getElementById('text');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', () => {
    text.classList.toggle('red');
});

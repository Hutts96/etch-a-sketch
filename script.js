/*
TODO:
    add way to reset dom before creating new grid

*/
function createGrid(height = 16, width = 16) {
    divs = [...Array(height)].map(e => Array(width + 1));
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width + 1; j++) {
            divs[i][j] = document.createElement('div');
        }
    }

    for (let i = 0; i < height; i++) {
        divs[i][0].classList.add('row');
        divs[i][0].style.display = 'flex';
        divs[i][0].style.flex = '1';
        divs[i][0].style.justifyContent = 'center';
        container.appendChild(divs[i][0]);
        for (let j = 1; j < width + 1; j++) {
            divs[i][j].classList.add('column');
            divs[i][0].appendChild(divs[i][j]);
            divs[i][j].style.height = '5vmin';
            divs[i][j].style.border = '1px solid black';
            divs[i][j].style.width = '5vmin';
            divs[i][j].style.backgroundColor = 'white';

        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 1; j < width + 1; j++) {
            divs[i][j].addEventListener('mouseover', () => {
                divs[i][j].style.backgroundColor = 'black';
            })

        }
    }
}
function reset() {
    container.innerHTML = '';
}
let body = document.querySelector('body');
let container = document.createElement('div');
let divs = [...Array(16)].map(e => Array(16));
const button = document.querySelector('button');
body.appendChild(container);

body.style.cssText = 'padding: 10px;';
container.style.cssText = 'display: flex; flex-direction: column; flex: 1;';


createGrid();

button.addEventListener('click', () => {
    let height;
    let width;
    do {
        height = Number(prompt('Height (max:100):'));
    } while (height < 1 || height > 100)
    do {
        width = Number(prompt('Width (max:100):'));
    } while (width < 1 || width > 100)
    reset();
    createGrid(height, width, true);
})





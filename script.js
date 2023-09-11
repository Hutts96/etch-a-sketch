const body = document.querySelector('body');
body.style.cssText = 'padding: 10px;';
let container = document.createElement('div');
container.style.cssText = 'display: flex; flex-direction: column; flex: 1;'
body.appendChild(container);
let divs = [...Array(16)].map(e => Array(16));
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 17; j++) {
        divs[i][j] = document.createElement('div');
    }
}

for (let i = 0; i < 16; i++) {
    divs[i][0].classList.add('row');
    divs[i][0].style.display = 'flex';
    divs[i][0].style.flex = '1';
    divs[i][0].style.justifyContent = 'center';
    container.appendChild(divs[i][0]);
    for (let j = 1; j < 17; j++) {
        divs[i][j].classList.add('column');
        divs[i][0].appendChild(divs[i][j]);
        divs[i][j].style.height = '5vmin';
        divs[i][j].style.border = '1px solid black';
        divs[i][j].style.width = '5vmin';
        divs[i][j].style.backgroundColor = 'white';

    }
}

for (let i = 0; i < 16; i++) {
    for (let j = 1; j < 17; j++) {
        divs[i][j].addEventListener('mouseover', () => {
            divs[i][j].style.backgroundColor = 'black';
        })
        divs[i][j].addEventListener('mouseout', () => {
            setTimeout(() => { divs[i][j].style.backgroundColor = 'white'; }, 500);

        })
    }
}




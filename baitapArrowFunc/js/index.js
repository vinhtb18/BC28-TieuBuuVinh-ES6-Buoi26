window.onload = function () {
    renderColors();
}

const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let renderColors = () => {
    let html = '';
    for (let color of colorList) {
        html += `
        <button class="color-button ${color}" onclick="changeColor('${color}')"></button>
            
        `
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

window.changeColor = (colorChange) => {
    document.querySelector('#house').className = 'house ' + colorChange;
}


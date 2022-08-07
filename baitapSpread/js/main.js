let string = document.querySelector('.heading').innerHTML.split(' ').join('');
let chars = [...string];
console.log(chars);
let html = '';
for (let char of chars) {
    html += `
        <span>${char}</span>
    `
}
console.log(html);
document.querySelector('.heading').innerHTML = html;
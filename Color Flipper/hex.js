const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function getRandomNumber() {
    var number = Math.floor(Math.random() * hex.length);
    return number;
    console.log(number);
}



const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {

    let hexColor = "#";

    for (i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});
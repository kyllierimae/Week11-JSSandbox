const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["yks.jpg", "kaks.jpg", "kolm.jpg", "neli.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}
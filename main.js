const numbers = document.getElementsByClassName("number");
const textes = document.getElementsByClassName("text");
const myDiv = document.getElementById("numbers-wrapper");

const one = numbers.item(0);
const textOne = textes.item(0);
const two = numbers.item(1);
const textTwo = textes.item(1);
const three = numbers.item(2);
const textThree = textes.item(2);
const four = numbers.item(3);
const textFour = textes.item(3);


const mediaQueryThousand = window.matchMedia("(min-width: 769px)");
if (mediaQueryThousand.matches) {
window.addEventListener('scroll', function() {
const divRect = myDiv.getBoundingClientRect();
const divY = divRect.height/2 + divRect.top;

if (divY < window.innerHeight) {
	one.classList.add("appearing");
	textOne.classList.add("appearing");
	two.style.animationDelay = "0.3s";
	two.classList.add("appearing");
	textTwo.style.animationDelay = "0.3s";
	textTwo.classList.add("appearing");
	three.style.animationDelay = "0.6s";
	three.classList.add("appearing");
	textThree.style.animationDelay = "0.6s";
	textThree.classList.add("appearing");
	four.style.animationDelay = "0.9s";
	four.classList.add("appearing");
	textFour.style.animationDelay = "0.9s";
	textFour.classList.add("appearing");
}});
}

const mediaQueryFour = window.matchMedia("(max-width: 768px)");
if (mediaQueryFour.matches) {
	window.addEventListener('scroll', function() {
const divRect = myDiv.getBoundingClientRect();
const divY = divRect.height/3 + divRect.top;


if (divY < window.innerHeight) {
	one.classList.add("appearing");
	textOne.classList.add("appearing");
	two.style.animationDelay = "0.3s";
	two.classList.add("appearing");
	textTwo.style.animationDelay = "0.3s";
	textTwo.classList.add("appearing");
	three.style.animationDelay = "0.6s";
	three.classList.add("appearing");
	textThree.style.animationDelay = "0.6s";
	textThree.classList.add("appearing");
	four.style.animationDelay = "0.9s";
	four.classList.add("appearing");
	textFour.style.animationDelay = "0.9s";
	textFour.classList.add("appearing");
}});
};


//Poniżej skrypt dla licznika lotu w kosmos

const spans = document.querySelectorAll("footer span");

let year = null;

function clock() {
const today = new Date();
let wydarzenie = new Date (2021, 5, 30, 18, 05);
const pozostalyCzas = wydarzenie - today;
const sekundy = pozostalyCzas / 1000;
const minuty = (pozostalyCzas / 1000) / 60;
const godziny = minuty / 60;
const dni = godziny / 24;

const sLeft = Math.floor(sekundy % 60);
const mLeft = Math.floor(minuty % 60);
const hLeft = Math.floor(godziny % 24);
const dLeft = Math.floor(dni);

spans[0].textContent = dLeft;
spans[1].textContent = hLeft;
spans[2].textContent = mLeft;
};

setInterval(clock, 1000);

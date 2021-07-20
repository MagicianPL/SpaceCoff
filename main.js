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

const clock = () => {
	const today = new Date();
	todayYear = today.getFullYear();
	todayMonth = today.getMonth();
	todayDay = today.getDay();

	let eventMonth = todayMonth;
	let eventDay = 25;
	let bigDate;

	const setDate = () => {			/*Funcja która ustawi dobrą datę*/
		if (eventDay <= todayDay) {
			eventMonth = todayMonth + 1;
		};
	};

	const eventDate = () => {
		setDate();
		bigDate = new Date (todayYear, eventMonth, eventDay, 18, 05);
	};
	
	eventDate();
	
	const remainingTime = bigDate - today;
	const seconds = remainingTime / 1000;
	const minutes = (remainingTime / 1000) / 60;
	const hours = minutes / 60;
	const days = hours / 24;
	
	const sLeft = Math.floor(seconds % 60);
	const mLeft = Math.floor(minutes % 60);
	const hLeft = Math.floor(hours % 24);
	const dLeft = Math.floor(days);
	
	spans[0].textContent = dLeft;
	spans[1].textContent = hLeft;
	spans[2].textContent = mLeft;
};

setInterval(clock, 1000);
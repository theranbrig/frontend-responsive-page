const closeButton = document.querySelector('.close-button');
const informationBox = document.querySelector('.information-box');
const openButton = document.querySelector('.open-button');

closeButton.addEventListener('click', () => {
	informationBox.classList.add('animated', 'flipOutX');
	setTimeout(function() {
		informationBox.classList.remove('animated', 'flipOutX');
		informationBox.classList.add('hide-box');
	}, 1000);
});

openButton.addEventListener('click', () => {
	informationBox.classList.remove('hide-box');
	informationBox.classList.add('animated', 'flipInY');
	setTimeout(function() {
		informationBox.classList.remove('animated', 'flipInY');
	}, 1000);
});

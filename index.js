const closeButton = document.querySelector('.close-button');
const informationBox = document.querySelector('.information-box');
const openButton = document.querySelector('.open-button');

closeButton.addEventListener('click', () => {
	informationBox.classList.add('animated', 'bounceOutRight');
	setTimeout(function() {
		informationBox.classList.remove('animated', 'bounceOutRight');
		informationBox.classList.add('hide-box');
	}, 1000);
});

openButton.addEventListener('click', () => {
	informationBox.classList.remove('hide-box');
	informationBox.classList.add('animated', 'bounceInRight');
	setTimeout(function() {
		informationBox.classList.remove('animated', 'bounceInRight');
	}, 1000);
});

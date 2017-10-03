var expandButton = document.querySelectorAll('.expand-button');
var closeButton = document.querySelectorAll('.close-btn');

var gallery = document.querySelectorAll('.gallery');



for ( var i = 0; i < expandButton.length; i++){
	expandButton[i].addEventListener('click', function(e){
		this.parentNode.nextElementSibling.nextElementSibling.classList.toggle('active');
		this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('active-btn');
	});
}

for (var i = 0; i < closeButton.length; i++){
	closeButton[i].addEventListener('click', function(e){
		this.classList.toggle('active-btn');
		this.previousElementSibling.classList.toggle('active');
		window.scrollTo(0, this.parentNode.offsetTop);
	});
}



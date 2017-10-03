var expandButton = document.querySelectorAll('.expand-button');
var closeButton = document.querySelectorAll('.close-btn');
var anchors = document.getElementsByTagName("a[data-lightbox='gallery']");
var mq = window.matchMedia( "(max-width: 659px)" );

var gallery = document.querySelectorAll('.gallery');

for ( var i = 0; i < expandButton.length; i++){
	expandButton[i].addEventListener('click', function(e){
		this.parentNode.nextElementSibling.nextElementSibling.style.display = 'block';
		this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
	});
}


/*

for ( var i = 0; i < expandButton.length; i++){
	expandButton[i].addEventListener('click', function(e){
		this.parentNode.nextElementSibling.nextElementSibling.classList.toggle('active');
		this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('active');
	});
}

*/

for (var i = 0; i < closeButton.length; i++){
	closeButton[i].addEventListener('click', function(e){
		this.style.display = 'none';
		this.previousElementSibling.style.display = 'none';
		window.scrollTo(0, this.parentNode.offsetTop);
	});
}













var expandButton = document.querySelectorAll('.expand-button');
var closeButton = document.querySelectorAll('.close-btn');

var anchors = document.getElementsByTagName("a[data-lightbox='gallery']");
var mq = window.matchMedia( "(max-width: 659px)" );

var gallery = document.querySelectorAll('.gallery');


function expandPanel(arr1, arr2){
	for ( let i = 0; i < expandButton.length; i++){
		expandButton[i].addEventListener('click', function(){
			arr1[i].classList.toggle('active');
			arr2[i].classList.toggle('active-btn');
		});
	}
}

function closePanel(arr1){
	for ( let i = 0; i < closeButton.length; i++){
		closeButton[i].addEventListener('click', function(){
			this.classList.toggle('active-btn');
			arr1[i].classList.toggle('active');
			window.scrollTo(0, this.parentNode.offsetTop);
		})
	}
}

expandPanel(gallery, closeButton);
closePanel(gallery);






/* this is the shitty version of the two functions above 

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


*/




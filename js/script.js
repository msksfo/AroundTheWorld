var button = document.querySelectorAll('.button');
var closeButton = document.querySelectorAll('.close-btn');
var gallery = document.querySelectorAll('.gallery')

for ( var i = 0; i < button.length; i++){
	button[i].addEventListener('click', function(e){
		this.parentNode.nextElementSibling.nextElementSibling.style.display = 'block';
		this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
	});
}

for (var i = 0; i < closeButton.length; i++){
	closeButton[i].addEventListener('click', function(e){
		this.style.display = 'none';
		this.previousElementSibling.style.display = 'none';
	});
}


/*
closeButton.addEventListener('click', function(e){
	this.style.display = 'none';
	this.previousElementSibling.style.display = 'none';
})

*/
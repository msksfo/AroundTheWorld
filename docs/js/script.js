var expandButton = document.querySelectorAll('.expand-button');
var closeButton = document.querySelectorAll('.close-btn');

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
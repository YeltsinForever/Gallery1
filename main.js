const galleryFull = document.querySelector('.gallery-full');

const IMAGES = [
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.png',
	'img/10.png',
	'img/11.jpg',
	'img/12.jpg',

];

function renderImages() {
	let html = '';

	for (let i=0; i<IMAGES.length; i++) {
		html += `
			<img class="gallery-item" src="${IMAGES[i]}" onclick="renderFullImage(${i})"/>`;
	}

	document.querySelector('.gallery-container').innerHTML = html;
}
renderImages();

function renderFullImage(num) {
	galleryFull.style.display = 'flex';
	galleryFull.innerHTML = `
			<img
				class="gallery-full-item"
				src="${IMAGES[num]}"
			/>
			<img
				class="gallery-close"
				src="img/close.png"
				onclick="closeFullScreen()"
			/>
	`;
}

function closeFullScreen() {
	galleryFull.style.display = 'none';
}

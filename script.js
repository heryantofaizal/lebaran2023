// Membuat elemen gambar jatuh secara random
function createFallingImage() {
	const img = document.createElement('img');
	img.src = 'ketupat.png';
	img.classList.add('falling');
	img.style.left = Math.random() * window.innerWidth + 'px';
	document.body.appendChild(img);

	setTimeout(() => {
		img.remove();
	}, 10000); // Menghapus gambar setelah 10 detik
}

// Menambahkan 10 gambar jatuh secara random pada latar belakang
for (let i = 0; i < 20; i++) {
	setTimeout(() => {
		createFallingImage();
	}, Math.random() * 5000);
}

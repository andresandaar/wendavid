const imagenes =
	document.querySelectorAll(
		'.img-galeria'
	); /* El método querySelectorAll () devuelve una colección de elementos secundarios de un elemento que coinciden con un selector o selectores CSS especificados, como un objeto NodeList estático.
   El objeto NodeList representa una colección de nodos. Se puede acceder a los nodos mediante números de índice. El índice comienza en 0. */
const imageneslight = document.querySelector('.agregar-imagen');
/* El método querySelector () devuelve el primer elemento que coincide con un selector o selectores CSS especificados en el documento.
Nota: El método querySelector () solo devuelve el primer elemento que coincide con los selectores especificados. Para devolver todas las coincidencias, utilice el método querySelectorAll () en su lugar. */
const contenedorlight = document.querySelector('.imagen-light');
const hamburgue1 = document.querySelector('.hamburguer');
imagenes.forEach((imagen) => {
	imagen.addEventListener('click', () => {
		aparecerimagen(imagen.getAttribute('src'));
	});
});
contenedorlight.addEventListener('click', (e) => {
	if (e.target !== imageneslight) {
		contenedorlight.classList.toggle('show');
		imageneslight.classList.toggle('showImage');
		hamburgue1.style.opacity = '1';
	}
});
const aparecerimagen = (imagen) => {
	imageneslight.src = imagen;
	contenedorlight.classList.toggle('show');
	imageneslight.classList.toggle('showImage');
	hamburgue1.style.opacity = '0';
};

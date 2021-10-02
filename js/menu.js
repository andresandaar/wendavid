const hamburgue = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

hamburgue.addEventListener('click', () => {
	menu.classList.toggle(
		'spread'
	); /* al menu quiero que selecciones las clases y quiro que le agregues y le quites las clase spread-
   esto significa  caga vez que toques  el menu hamburguer vas a quitarle o a ponerle la clase, dependiendo de si la tiene o no la tiene*/
});
window.addEventListener('click', (e) => {
	if (
		menu.classList.contains('spread') &&
		e.target != menu &&
		e.target != hamburgue
	) {
		menu.classList.toggle('spread');
	}
});

// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const menuList = document.querySelector('.menu__list');
document.addEventListener('click', (e)=> {
	if (document.documentElement.classList.contains("menu-open") && e.target !== menuList) {
		menuClose();
	}
})

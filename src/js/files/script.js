// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const menuList = document.querySelector('.menu__list');
document.addEventListener('click', (e)=> {
	if (document.documentElement.classList.contains("menu-open") && e.target !== menuList) {
		menuClose();
	}
});

// Плавна навігація до Home section

const upBtn = document.querySelector(".up-btn");
const homeSection = document.querySelector("#home"); 

if (upBtn && homeSection) {
	upBtn.addEventListener("click", (event) => {
		event.preventDefault(); 
		const offset = 80;
		const homePosition = homeSection.getBoundingClientRect().top;
		const offsetPosition = homePosition + window.scrollY - offset;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		})
	});
}




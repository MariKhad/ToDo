import { TODO_UI } from '../js/view.js';
//addEventListener('DOMContentLoaded', alert('DOM загружен'));
let BUTTONS_DEL = document.querySelectorAll('todo__btn--del');

//const taskList = [];



for (let button of BUTTONS_DEL) {
	console.log('кнопка нажата')
	button.addEventListener('click', function (event) {
		const targetTask = event.target;
		taskName = targetTask.previousSibling.textContent;
		//taskList = taskList.filter(item => item !== taskName);
		targetTask.parentNode.remove();
		BUTTONS_DEL = document.querySelectorAll('todo__btn--del')
	})
}

for (let box of TODO_UI.INPUTS_CHECKED) {
	box.parentNode.style.backgroundColor = "grey";
	box.style.textDecoration = "overline";
}
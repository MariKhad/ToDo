import { TODO_UI } from './view.js';
addEventListener('DOMContentLoaded', taskDelete);
let BUTTONS_DEL = document.querySelectorAll('todo__btn--del');
let INPUTS_CHECKED = document.querySelectorAll('option:checked');

//const taskList = [];



function taskDelete(){
for (let button of BUTTONS_DEL) {
	button.addEventListener('click', function (event) {
		console.log('кнопка нажата');
		const targetTask = event.target;
		taskName = targetTask.previousSibling.textContent;
		//taskList = taskList.filter(item => item !== taskName);
		targetTask.parentElement.remove();
		BUTTONS_DEL = document.querySelectorAll('todo__btn--del');
		INPUTS_CHECKED = document.querySelectorAll('option:checked');
	})
}
}

for (let box of INPUTS_CHECKED) {
	box.parentNode.style.backgroundColor = "grey";
	box.style.textDecoration = "overline";
	INPUTS_CHECKED = document.querySelectorAll('option:checked');
}
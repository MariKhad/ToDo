import { TODO_UI } from './view.js';
let BUTTONS_DEL = document.querySelectorAll('.todo__btn--del');
let CHECKBOXES = document.querySelectorAll('.box');
let taskList = [];
taskDelete();
taskAdd();
checkedStyle();






function taskDelete(){
for (let button of BUTTONS_DEL) {
	button.addEventListener('click', function (event) {
		console.log('кнопка нажата');
		const targetTask = event.target;
		let taskName = targetTask.previousSibling.textContent;
		taskList = taskList.filter(item => item !== taskName);
		targetTask.parentElement.remove();
		BUTTONS_DEL = document.querySelectorAll('.todo__btn--del');
		CHECKBOXES = document.querySelectorAll('.box');
	})
}
}

function checkedStyle(){
for (let box of CHECKBOXES) {
	if(box.checked === true) {
	box.parentNode.style.backgroundColor = "grey";
	box.style.textDecoration = "overline";
	CHECKBOXES = document.querySelectorAll('.box');
	}
}
}

function taskAdd(){
	for (let button of TODO_UI.BUTTONS_ADD) {
		button.addEventListener('click', function (event) {
       
		})

	}
}
import { TODO_UI } from './view.js';
let BUTTONS_DEL = document.querySelectorAll('todo__btn--del');
let INPUTS_CHECKED = document.querySelectorAll('option:checked');
taskDelete();
taskAdd();
checkedStyle();


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

function checkedStyle(){
for (let box of INPUTS_CHECKED) {
	box.parentNode.style.backgroundColor = "grey";
	box.style.textDecoration = "overline";
	INPUTS_CHECKED = document.querySelectorAll('option:checked');
}
}

function taskAdd(){
	for (button of TODO_UI.BUTTONS_ADD) {
		button.addEventListener('click', function (event) {
      alert('кнопка нажата');
		})

	}
}
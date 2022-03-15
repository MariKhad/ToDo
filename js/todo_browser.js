import { TODO_UI } from './view.js';
let BUTTONS_DEL = document.querySelectorAll('.todo__btn--del');
let CHECKBOXES = document.querySelectorAll('.box');
let taskList = [];
taskDelete();
allTasksAdd();
checkedStyle();






function taskDelete() {
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

function checkedStyle() {
	for (let box of CHECKBOXES) {
		if (box.checked === true) {
			box.parentNode.style.backgroundColor = "grey";
			box.style.textDecoration = "overline";
			CHECKBOXES = document.querySelectorAll('.box');
		}
	}
}
function allTasksAdd(){
for (let form of TODO_UI.FORMS_ADD) {
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		if (form.firstElementChild.value === "") {
			alert('Add task please');
		} else if (form.className === 'high') {
			taskAdd('high');
		} else taskAdd('low');
	});
}
}

function taskAdd(prior) {
	let selector = `.${prior}`;
	const targetForm = document.querySelector(selector);
	console.log(targetForm);
	let newTaskName = {};
	newTaskName.name = targetForm.firstElementChild.value;
	console.log(newTaskName.name);
	newTaskName.priority = prior;
	taskList = taskList.unshift(newTaskName);
	let div = document.createElement('div');
	div.classList.add("task");
	let input = document.createElement('input');
	input.value = newTaskName.name;
	input.classList.add('box');
	input.setAttribute('type', 'checkbox');
	let p = document.createAttribute('p');
	p.texcontent = newTaskName;
	let button = document.createElement('button');
	button.classList.add('todo__btn--del');
	div.append(input);
	div.append(p);
	div.append(button);
	if (prior === 'high') {
		TODO_UI.HIGH.preppend(div);
	} else {
		TODO_UI.LOW.prepend(div);
	}

}
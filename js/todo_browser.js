import { TODO_UI } from './view.js';
let BUTTONS_DEL = document.querySelectorAll('.todo__btn--del');
let CHECKBOXES = document.querySelectorAll('.box');
let taskList = [];
getExistedTasks();
taskDelete();
allTasksAdd();
checkedStyle();


function getExistedTasks() {
	for (let task of TODO_UI.TASKS) {
		let existedTask = {};
		existedTask.name = task.children[1].textContent;
		if (task.parentElement.className === 'todo__priority--high') {
			existedTask.priority = "high";
		} else {
			existedTask.priority = "low";
		}
		taskList.push(existedTask);
	}
	console.log(taskList);
}



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
		box.addEventListener('change', function () {
			if (box.checked === true){
				box.parentNode.style.backgroundColor = "grey";
				box.style.textDecoration = "overline";
			} else {
				box.parentNode.style.backgroundColor = "inherit";
				box.style.textDecoration = "inherit";
			}

		});
	}
}
function allTasksAdd() {
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
	let newTask = {};
	newTask.name = targetForm.firstElementChild.value;
	targetForm.firstElementChild.value = "";
	newTask.priority = prior;
	taskList = taskList.push(newTask);
	let div = document.createElement('div');
	div.classList.add("task");
	let input = document.createElement('input');
	input.value = newTask.name;
	input.classList.add('box');
	input.setAttribute('type', 'checkbox');
	let p = document.createElement('p');
	p.textContent = newTask.name;
	let button = document.createElement('button');
	button.classList.add('todo__btn--del');
	div.append(input);
	div.append(p);
	div.append(button);
	console.log(taskList);
	if (prior === 'high') {
		TODO_UI.HIGH.append(div);
	} else {
		TODO_UI.LOW.append(div);
	}
}
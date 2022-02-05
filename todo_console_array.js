const TODO = "To do";
const IN_PROGRESS = "In progress";
const DONE = "Done";
const HIGH = "High";
const LOW = "Low";
const status = {
	TODO,
	IN_PROGRESS,
	DONE,
};

const priority = {
	HIGH,
	LOW,
}

let lastId = 5;


const list = [
	{
		id: 1,
		name: "create a task",
		status: TODO,
		priority: HIGH,
	},

	{
		id: 2,
		name: "make a bed",
		status: TODO,
		priority: LOW,
	},

	{
		id: 3,
		name: "write a post",
		status: IN_PROGRESS,
		priority: LOW,
	},

	{
		id: 4,
		name: "to go for a walk",
		status: IN_PROGRESS,
		priority: HIGH,
	},

	{
		id: 5,
		name: "to do the housework",
		status: TODO,
		priority: HIGH,
	},

]



function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

function showBy(obj) {
	if (obj === "priority") {
		obj = priority;
	} else obj = status;
	for (let i in obj) {
		let tasks = [];
		if (obj === priority) {
			tasks = list.filter(item => item.priority === obj[i]);
		} else {
			tasks = list.filter(item => item.status === obj[i]);
		}
		console.log(obj[i] + ":");
		if (!isEmpty(tasks)) {
			tasks.forEach(item => console.log(" " + item.name));
		} else console.log("-");
	}
}

function addTask(task, priority = LOW, status = TODO) {
	let isTaskInList = list.find(item => item.name === task);
	if (isTaskInList) {
		console.log('This task already in the list')
	} else {
		let newTask = {
			id: ++lastId,
			name: task,
			status,
			priority,
		}
		list.push(newTask);
	}
}


function deleteTask(taskname) {
	index = list.findIndex(item => item.name === taskname);
	list.splice(index, 1);
}

function changeStatusPriority(task, change) {
	for (let item of list) {
		if (item.name === task) {
			for (let key in priority) {
				if (priority[key] === change) {
					item.priority = change;
				} else {
					for (let key in status) {
						if (status[key] === change) {
							item.status = change;
						}
					}
				}
			}
		}
	}
}


changeStatusPriority("make a bed", HIGH);
addTask("to read 20 minutes", HIGH, IN_PROGRESS);
deleteTask("create a task");
showBy('status');
changeStatusPriority("make a bed", IN_PROGRESS)
console.log(list);


// не доделано

const TODO = "To do";
const IN_PROGRESS = "In progress";
const DONE = "Done";
const HIGH = "High";
const LOW = "Low";
const statuses = {
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
	}
	
	{
		id: 2,
		name: "make a bed",
		status: TODO,
		priority: LOW,
	}

	{
		id: 3,
		name: "write a post",
		status: TODO,
		priority: LOW,
	}

	{
		id: 4,
		name: "to go for a walk",
		status: TODO,
		priority: HIGH,
	}

	{
		id: 5,
		name: "to do the housework",
		status: TODO,
		priority: HIGH,
	}

]



function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

function showList(obj) {
	for (let i in statuses) {
		let Tasks = {};
		for (let item in list) {
			if (list[item] === obj[i]) {
				Tasks[item] = item;
			} else {
			}
		}
		console.log(obj[i] + ":");
		if (!isEmpty(Tasks)) {
			for (let item in Tasks) {
				console.log(" " + item);
			}
		} else console.log("-");
	}

}

function addTask(task, status, priority) {
	if (task of list) {
		console.log('This task already in the list')
	} else if (status === undefined) {
		list[task] = TODO;
		lastId++;
	} else {
		list[task] = status;
		lastId++;
	}
}

function deleteTask(id) {
	if (task in list) {
		delete list[id];
	} else {
		console.log('There is no such task in the list')
	}
}

function changeStatus(task, status) {
	if (task in list) {
		list[task] = status;
	}
}

changeStatus("write a post", DONE);
addTask('to read 20 minutes');
deleteTask('create a task');
showList();
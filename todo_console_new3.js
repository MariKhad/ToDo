const TODO = "To do";
const IN_PROGRESS = "In progress";
const DONE = "Done";
const statuses = {
	TODO,
	IN_PROGRESS,
	DONE,
};




const list = {
	"create a task": TODO,
	"make a bed": DONE,
	"write a post": TODO,
	"to go for a walk": TODO,
	"to do the housework": TODO,
}

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

function showList() {
	for (let i in statuses) {
		let Tasks = {};
		for (let item in list) {
			if (list[item] === statuses[i]) {
				Tasks[item] = item;
			} else {
			}
		}
		console.log(statuses[i] + ":");
		if (!isEmpty(Tasks)) {
			for (let item in Tasks) {
				console.log(" " + item);
			}
		} else console.log("-");
	}

}

function addTask(task, status) {
	if (task in list) {
		console.log('This task already in the list')
	} else if (status === undefined) {
		list[task] = TODO;
	} else {
		list[task] = status;
	}
}

function deleteTask(task) {
	if (task in list) {
		delete list[task];
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
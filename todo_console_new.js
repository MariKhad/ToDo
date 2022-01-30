const TODO = "To do";
const IN_PROGRESS = "In progress";
const DONE = "Done";



const list = {
	"create a task": TODO,
	"make a bed": IN_PROGRESS,
	"write a post": TODO,
	"to go for a walk": IN_PROGRESS,
	"to do the housework": DONE,
}

function showList() {
	console.log("To Do:")
	for (let item in list) {
		if (list[item] === TODO) {
			console.log(item);
		}
	}
	console.log("In progress:")
	for (let item in list) {
		if (list[item] === IN_PROGRESS) {
			console.log(item);
		}
	}
	console.log("Done:")
	for (let item in list) {
		if (list[item] === DONE) {
			console.log(item);
		}
	}

}

function addTask(task, status){
	if (task in list) {
		console.log('This task already in the list')
	} else if (status === undefined) { 
      list[task] = TODO;
	} else {
		list[task] = status;
	}
}

function deleteTask(task){
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




/* function showList() {
	for (let item in list) {
		if (item === TODO) {
			console.log("todo: \n"+ list[item] + "\n");
		} else if (item === IN_PROGRESS) {
			console.log("in progress: \n"+ list[item] + "\n");
		} else {
			console.log("done: \n"+ list[item] + "\n");
		}
	}
} */

changeStatus("write a post", DONE);
addTask('to read 20 minutes');
deleteTask('create a task');
showList();
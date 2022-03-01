const statuses = {
   TODO: "To do",
   IN_PROGRESS:"In progress",
   DONE:"Done",
};



const list = {
	"create a task": statuses.TODO,
	"make a bed": statuses.DONE,
	"write a post": statuses.IN_PROGRESS,
	"to go for a walk": statuses.TODO,
	"to do the housework": statuses.TODO,
}

function isEmpty(obj) {
    for(let key in obj)
    {
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
		}  else { 
  }
	}
  console.log(statuses[i] + ":");
		if (!isEmpty(Tasks)) {
			for (let item in Tasks) {
				console.log(" " + item);
			}
		}  else console.log("-");
}

}

function addTask(task, status) {
	if (task in list && isStatusValid(status)) {
		console.log('This task already in the list')
	} else if (status === undefined) {
		list[task] = statuses.TODO;
	} else if (isStatusValid(status)) {
		list[task] = status;
	} else {
		console.log("Status is not valid")
	}
}

function deleteTask(task) {
	if (task in list) {
		delete list[task];
	} else {
		console.log('There is no such task in the list')
	}
}
 
function isStatusValid(status){
 for (let item in statuses) {
  if (statuses[item] === status);
  return true;
 }
}

function changeStatus(task, status) {
 
let isTaskValid = task in list;
  if (isTaskValid && isStatusValid(status)) {
		list[task] = status;
	} else {
    console.log("Data is not valid");
  }
}

changeStatus("write a post", "Done");
addTask('to read 20 minutes');
deleteTask('create a task');
showList();
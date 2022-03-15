const TODO = "To do";
const IN_PROGRESS = "In progress";
const DONE = "Done";
const HIGH = "High";
const LOW = "Low";
let lastId = 5;



const tasksList = [
	{
		id: 1,
		task: "to make bed",
		status: TODO,
		priority: LOW,
	},

	{
		id: 2,
		task: "to go for a walk",
		status: IN_PROGRESS,
		priority: HIGH,
	},

	{
		id: 3,
		task: "to do the housework",
		status: DONE,
		priority: HIGH,
	},

	{
		id: 4,
		task: "to boil eggs",
		status: DONE,
		priority: HIGH,
	},

	{
		id: 5,
		task: "to buy a book",
		status: TODO,
		priority: HIGH,
	},

];

function showList() {
	for (let item of tasksList) {
		if (item.status === TODO) {
			console.log("todo: \n"+ item.task + "\n");
		} else if (item.status === IN_PROGRESS) {
			console.log("in progress: \n"+ item.task + "\n");
		} else {
			console.log("done: \n"+ item.task + "\n");
		}
	}
}

showList();
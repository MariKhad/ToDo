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
	let todoTasks = 'todo: \n';
	let progressTasks = 'in progress: \n';
	let doneTasks = 'done: \n';
	for (let item of tasksList) {
		if (item.status === TODO) {
			todoTasks = todoTasks + item.task + "\n";
		} else if (item.status === IN_PROGRESS) {
			progressTasks = progressTasks + item.task + "\n";
		} else {
			doneTasks = doneTasks + item.task + "\n";
		}
	}
	console.log(todoTasks);
	console.log(progressTasks);
	console.log(doneTasks);
}

showList();
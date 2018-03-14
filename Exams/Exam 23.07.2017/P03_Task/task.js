class Task {
  constructor(title, deadline) {

    this.title = title;
    this.deadline = deadline;
    this.status = 'Open';
  }


  set deadline(value) {
    if (value < Date.now()) {
      throw new Error('Can not create deadline in the past');
    }
    return this._deadline = value

  }

  get deadline() {
    return this._deadline;
  }

  get isOverdue() {

    if (this.deadline < Date.now() && this.staus != "Complete") {
      return true;
    }
    return false;
  }

  toString() {
    let icon = {
      "Open": '\u2731',
      "In Progress": '\u219D',
      "Complete": '\u2714',
      "Overdue": '\u26A0'
    }

    if (this.isOverdue && this.status !== "Complete") {
      return `[${icon.Overdue}] ${this.title} (overdue)`
    }
    if (this.status === "Complete") {
      return `[${icon.Complete}] ${this.title}`
    }

    return `[${icon[this.status]}] ${this.title} (deadline: ${this.deadline})`
  }


  get rank() {
    if (this.isOverdue && this.status!=="Complete") {
      return 0;
    }
    if (this.status === "In Progress") {
      return 1;
    }
    if (this.status === "Open") {
      return 2;
    }
    if (this.status === "Complete") {
      return 3;
    }
  }

  static comparator(a, b) {

    if(a.rank===b.rank){

      return a.deadline-b.deadline;
    }
    return a.rank - b.rank;

  }

}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
//console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";

console.log(task1.toString());
console.log(task2.toString());
console.log(task3.toString());
console.log(task4.toString());
console.log(task5.toString());

console.log();

let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
  tasks.sort(Task.comparator);
  console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));


// should throw an Error
//task1.deadline = new Date(2005, '4', '20');
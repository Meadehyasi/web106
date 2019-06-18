var tasks = ["sleep", "read novel", "drink coffee", "walking", "make dinner", "feed baby", "study"] ;
var state = ["done", "doing", "to do"] ;

var num1 = prompt("Enter taskNumber from 1 to 7:");
num1 = Number(num1) - 1;
// alert("your task : " + tasks[num1]);
var num2 = prompt("your task : " + tasks[num1] + " ********** " + "Enter statusNumber from 1 to 3:");
num2 = Number(num2) - 1;
console.log("task : " + tasks[num1] + " , " + "status : " + state[num2] );
// console.log(status[num2]);

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2");
    callback();
  }, 1500);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3");
    callback();
  }, 4000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4");
    callback();
  }, 3000);
}
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log("All tasks are completed"));
    });
  });
});

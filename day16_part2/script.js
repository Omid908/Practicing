// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 2000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2");
//     callback();
//   }, 1500);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3");
//     callback();
//   }, 4000);
// }
// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4");
//     callback();
//   }, 3000);
// }
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => console.log("All tasks are completed"));
//     });
//   });
// });

//-----------------------Promises---------------------

//Walk the dog
//Clean the kitchen
//Take out the trash

function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Walking the dog : Done");
      resolve("You walked the dog");
    }, 2000);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cleaning the kitchen : Done");
      resolve("You cleaned the kitchen");
    }, 2500);
  });
}
function takeTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Taking the trash out : Done");
      resolve("You took out the trash.");
    }, 500);
  });
}

async function doChors() {
  try {
    await cleanKitchen();
    await takeTrash();
    await walkdog();
    console.log("All chores are done");
  } catch (error) {
    console.log(`Something went wrong : ${error.message}`);
  }
}
doChors();

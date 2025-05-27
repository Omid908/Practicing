// function part1() {
//   function walkdog() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const walkedthedog = true;
//         if (walkedthedog) {
//           resolve("you walked the dog!");
//         } else {
//           reject("You didn't walk the dog");
//         }
//       }, 1500);
//     });
//   }
//   function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const clean = true;
//         if (clean) {
//           resolve("You have cleaned the kitchen");
//         } else {
//           reject("You haven't cleaned the kitchen yet");
//         }
//       }, 2000);
//     });
//   }
//   function takeTheTrash() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const trash = true;
//         if (trash) {
//           resolve("You took out the trash");
//         } else {
//           reject("You haven't took out the trash");
//         }
//       }, 1300);
//     });
//   }
//   async function today() {
//     try {
//       const walkDogResutl = await walkdog();
//       console.log(walkDogResutl);
//       const cleanResult = await cleanKitchen();
//       console.log(cleanResult);
//       const takeTrash = await takeTheTrash();
//       console.log(takeTrash);
//       console.log("Everything is done :)");
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   today();
// }
// part1();
//------------------------------Json filese --------------------------
// function runalltasks() {
//   function reward() {
//     console.log("Nothing");
//   }
//   const notnew = JSON.stringify(["SpongeBob", 45, reward.toString(), "Sandy"]);
//   console.log(notnew);
//   fetch("people.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to load name.json");
//       }
//       return response.json();
//     })
//     .then((values) => {
//       values.forEach((element) => {
//         console.log(`${element.name} is ${element.age} years old`);
//       });
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
//   fetch("name.json")
//     .then((response) => response.json())
//     .then((value) => console.log(value));
// }
// runalltasks();
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error));

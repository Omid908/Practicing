// let img = document.getElementById("img");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   if (img.style.visibility === "hidden") {
//     img.style.visibility = "visible";
//     btn.textContent = "Hide";
//   } else {
//     img.style.visibility = "hidden";
//     btn.textContent = "Show";
//   }
// });
// let nodes = document.querySelectorAll("[data-unsafe]");
// nodes.forEach((node) => {
//   node.innerHTML = location.hash.slice(1);
// });
// let links = document.querySelectorAll(".btn");
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     location.href = link.getAttribute("data-go"); // 💥 redirect
//   });
// });
let link = document.createElement("a");
link.textContent = "Click here";
link.setAttribute("data-go", "https://google.com");
link.style.fontSize = "20px";
link.style.cursor = "pointer";
document.body.appendChild(link);
const links = document.querySelectorAll("[data-go]");
links.forEach((linka) => {
  linka.addEventListener("click", () => {
    const url = linka.getAttribute("data-go");
    location.href = url;
  });
});

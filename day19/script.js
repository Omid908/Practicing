document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("username").value;
    const feedback = document.getElementById("feedback").value;

    const feedbackContainer = document.getElementById("storedFeedback");
    feedbackContainer.innerHTML += `<div class="comment"><strong>${name}</strong>: ${feedback}</div>`;

    document.getElementById("feedbackForm").reset();
  });

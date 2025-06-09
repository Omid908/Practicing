function onload_load() {
  var img = document.createElement("img");
  img.onload = function () {
    alert("image was loaded successfully");
  };
  img.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
  document.body.appendChild(img);
}

// Function to load jQuery dynamically
function loadjQueryAndChangeTitle() {
  // Check if jQuery is already loaded
  if (window.jQuery) {
    console.log("jQuery is already loaded!");
    changeTitleWithjQuery();
  } else {
    console.log("Loading jQuery...");

    // Create a script element to load jQuery
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.7.1.min.js"; // Latest jQuery
    script.integrity = "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="; // Optional: Integrity check
    script.crossOrigin = "anonymous";

    // When jQuery is loaded, change the title
    script.onload = function () {
      console.log("jQuery loaded successfully!");
      changeTitleWithjQuery();
    };

    // If loading fails
    script.onerror = function () {
      console.error("Failed to load jQuery!");
    };

    // Append the script to the document
    document.head.appendChild(script);
  }
}

// Function to change the title using jQuery
function changeTitleWithjQuery() {
  var newTitle = prompt("Enter the new page title:", $(document).prop("title"));
  if (newTitle !== null) {
    $(document).prop("title", newTitle);
    console.log("Title changed to: " + newTitle);
    $("title").text("newTitle");
  }
}

// Start the process
loadjQueryAndChangeTitle();

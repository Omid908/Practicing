function changeTitle() {
  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  script.type = "text/javascript";
  script.onload = function () {
    $(document).ready(function () {
      $("title").text("New title");
    });
    alert("jQuery is loaded");
  };
  document.head.appendChild(script);
}
// For changing the title by jQuery we use this code
//Fetching data from a REST API and then appending it to body of another website ( works in https://time.ir website )
function fetchDataInsertTag() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const newDiv = document.createElement("div");
      newDiv.textContent = `Data from API: ` + JSON.stringify(data);

      const targetElements = document.getElementsByClassName(
        "ClockAnalog_clock__Vn8yr"
      );

      if (targetElements.length > 0) {
        targetElements[0].appendChild(newDiv);
      } else {
        console.error("No element found with class 'ClockAnalog_clock__Vn8yr'");
      }
    }
  };

  xhr.onerror = function () {
    alert("Request failed due to a network error.");
  };

  xhr.send();
}

fetchDataInsertTag();

//Getting user's Ip address using a 3rd party API ( ipinfo.io )
fetch("https://ipinfo.io/json")
  .then((response) => response.json())
  .then((data) => {
    let to_send = JSON.stringify(data);
    to_send +=
      "|UA:" +
      JSON.stringify(navigator.userActivation) +
      "|ScreenWidth:" +
      screen.width +
      "|BrowserLang:" +
      navigator.language;

    alert("Data to send:", to_send); // Or send it somewhere
    //for sending somewhere else use the code below
    //fetch('https://yourwebsite.com/?info=' + to_send)
  })
  .catch((error) => {
    console.log("Error fetching user information:", error);
  });

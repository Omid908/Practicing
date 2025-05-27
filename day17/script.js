const userCard = document.getElementById("user-card");
const newUserBtn = document.getElementById("new-user-btn");

async function fetchUser() {
  userCard.innerHTML = "<p>Loading user data...</p>";
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    displayUser(user);
  } catch (error) {
    userCard.innerHTML = "<p>Failed to fetch user data.</p>";
    console.error(error);
  }
}

function displayUser(user) {
  userCard.innerHTML = `
    <img src="${user.picture.large}" alt="User Picture">
    <h2>${user.name.first} ${user.name.last}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
  `;
}

newUserBtn.addEventListener("click", fetchUser);

// Fetch initial user on page load
fetchUser();

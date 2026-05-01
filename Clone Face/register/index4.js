
let usersfromDb = localStorage.getItem("users");

if (usersfromDb === null) {
  window.location.href = "index.html"; // Fixed spelling of "register"
} else {
  // Parse only if it exists
  const parsedUsers = JSON.parse(usersfromDb);
  // console.log("Logged in users:", parsedUsers);
}
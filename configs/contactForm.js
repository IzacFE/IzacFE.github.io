const scriptURL =
  "https://script.google.com/macros/s/AKfycbzOBqiB-e5W3jRXtlrnfAOLp1afvHtz08ypxD0soISsS2BW0eMrjJxSUq_lZMhx3eIFew/exec";
const form = document.forms["submit-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

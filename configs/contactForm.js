const scriptURL =
  "https://script.google.com/macros/s/AKfycbzOBqiB-e5W3jRXtlrnfAOLp1afvHtz08ypxD0soISsS2BW0eMrjJxSUq_lZMhx3eIFew/exec";
const form = document.forms["submit-contact-form"];
const tagForm = document.getElementsByClassName("contact-form")[0];
const submitButton = document.getElementById("form-submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      tagForm.reset();
      submitButton.disabled = false;
      toastMessage("success");
    })
    .catch((error) => {
      console.error("Error!", error.message);
      submitButton.disabled = false;
      toastMessage("failed");
    });
});

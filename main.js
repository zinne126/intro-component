const form = document.querySelector(".right-hand form");
const inputs = document.querySelectorAll(".right-hand form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    console.log(input.value);
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
      if (input.type == "email") {
        if (validateEmail(input.value)) {
          input.parentElement.classList.remove("error");
        } else {
          input.parentElement.classList.add("error");
        }
      }
    }
  });
});

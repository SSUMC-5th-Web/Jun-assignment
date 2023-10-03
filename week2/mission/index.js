const myName = document.querySelector("#myId");
const button = document.querySelector(".signButton");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if ((myName.required = " ")) {
    alert("안녕");
    return;
  }
});

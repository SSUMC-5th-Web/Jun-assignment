const number = document.querySelector("#number");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

increase.addEventListener("click", () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
});
decrease.addEventListener("click", () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
});

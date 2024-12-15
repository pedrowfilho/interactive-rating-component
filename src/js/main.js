const buttons = document.querySelectorAll(".btn-rate button");
const form = document.querySelector("#form");
const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".card-thank-you");
const userSeelction = document.querySelector("#selection");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const hasSelectedOption = document.querySelector(".selected");
  if (!hasSelectedOption) {
    return;
  }
  const selectedOption = hasSelectedOption.textContent;
  console.log(selectedOption.textContent);
  ratingCard.classList.remove("active");
  thankyouCard.classList.add("active");
  userSeelction.innerText = `You selected ${selectedOption} out of 5`;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button);
    const botaoSelecionado = document.querySelector(".selected");

    if (botaoSelecionado) {
      removeSelected();
    }
    button.classList.add("selected");
  });
});

function removeSelected() {
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}

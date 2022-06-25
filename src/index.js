let url = "http://localhost:3000/movies";
document.addEventListener("DOMContentLoaded", () => {
  getFetch();
  formData();
});

function getFetch() {
  fetch(url)
    .then((resp) => resp.json())
    .then((mariam) => console.log(mariam));
}

document.addEventListener("DOMContentLoaded", init);
function formData() {
  const form = document.querySelector("form");
  form.addEventListener("submit", () => {});
}

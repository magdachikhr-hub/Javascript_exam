//4.1

const dateToday = document.querySelector(".today");

function todaysDate() {
  const today = new Date();

  console.log(today);

  const day = today.getDate();
  console.log(day);
  const month = today.getMonth() + 1;
  console.log(month);
  const year = today.getFullYear();
  console.log(year);
  dateToday.innerHTML = `<span>${day}.</span><span>${month}.</span><span>${year}</span>`;
}
todaysDate();

//4.2

let name = "ilarion";
const upperName = name.toUpperCase();
console.log(upperName);

//4.3

const btn = document.querySelector(".btn");
const inpt = document.getElementById("inpt");

btn.addEventListener("click", () => {
  localStorage.setItem("text", inpt.value);
});

window.addEventListener("load", () => {
  const txtFromStorage = localStorage.getItem("text");
  console.log(txtFromStorage);
});

//4.4

const btn2 = document.querySelector(".alertBtn");

btn2.addEventListener("click", () => {
  alert("Hello JavaScript");
});

//4.5

// setInterval(() => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }, 1000);

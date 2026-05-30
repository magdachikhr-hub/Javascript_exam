// 5.2

const sectionWrap = document.querySelector(".wrapper");
const mail = document.getElementById("email");
const paragraphText = document.querySelectorAll(".text");
const submitBtn = document.getElementById("submitBtn");

console.log(sectionWrap);
console.log(mail);
console.log(paragraphText);
console.log(submitBtn);

paragraphText.forEach((item) => {
  console.log(item);
  item.style.color = "blue";
});

//5.3

sectionWrap.style.border = "2px solid red";
submitBtn.style.backgroundColor = "green";

//5.4

const newElement = document.createElement("h3");

newElement.textContent = `User Panel`;

newElement.setAttribute("class", "title");

sectionWrap.append(newElement);
console.log(newElement);

//5.5
mail.addEventListener("focus", () => {
  console.log("Input is focused");
});

//5.6

submitBtn.addEventListener("click", () => {
  console.log("Button was pressed");
});

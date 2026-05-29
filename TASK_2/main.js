//2.1;

const btn = document.querySelector(".show");

btn.addEventListener("click", () => {
  console.log("Button pressed");
});

//2.2
const inputBlur = document.getElementById("inputBlur");

inputBlur.addEventListener("blur", () => {
  console.log(inputBlur.value);
});

//2.3

const score = 67;

if (score > 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

//2.4

for (let i = 1; i < 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

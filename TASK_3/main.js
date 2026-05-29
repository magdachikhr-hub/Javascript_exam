//3.1

let students = [
  "ana",
  "levani",
  "gio",
  "nuca",
  "alexandre",
  "ika",
  "sandro",
  "lizi",
];

const newArr = [];

for (let i = 0; i < students.length; i++) {
  //   const element = array[index];
  if (students[i].length > 4) {
    newArr.push(students[i]);
  }
}

newArr.push("levaniko");
newArr.unshift("mariami");

console.log(newArr);

//3.2
let ages = [12, 25, 18, 31, 7, 44, 29, 16];

const newAge = ages.filter(function filteredAges(age) {
  return age % 2 !== 0;
});

console.log(newAge);

//3.3
let arrayOne = [15, 3, -8, 22, 1];
let arrayTwo = [7, -2, 30, 11, 5];

const joinedArr = [...arrayOne, ...arrayTwo];

console.log(joinedArr);

joinedArr.sort((a, b) => b - a);

console.log(joinedArr);

for (const eachNum of joinedArr) {
  console.log(eachNum);
}

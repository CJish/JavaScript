// let character = "Hello"; // variable declaration
//     // JS has seven primitive data types, String, 

// const newChar = "World"; // cannot change a constant variable; must be initialized at declaration

// let rows = []; // array declaration
// rows = [1, 2, 3, 4, 5];
// rows.push(6); // add element to the end of the array

// let pushed = rows.push("fCC"); // returns the NEW lenght of the array

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i + 1));
} 

let result = "";
console.log(result);

for (const row of rows) {
    result = result + "\n" + row;
}
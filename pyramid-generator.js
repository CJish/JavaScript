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
let inverted = true;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

// inverts the pyramid
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

/* while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
} */

/* for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
} */



let result = "";
console.log(result);

for (const row of rows) {
    result = result + "\n" + row;
}
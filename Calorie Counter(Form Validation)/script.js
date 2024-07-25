const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    // const regex = /\+-\s/; // regex - looks for these IN ORDER; +- would return, but -+ would not
    /* REGEX */
    const regex = /[+-\s]/g; // [] allows for the return of any/all of these characters in any order
                                // g tells the regex to keep searching after it finds a match
    console.log("original string: ", str);
    return str.replace(regex, "");
}
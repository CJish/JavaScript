let scores = [];

function getAverage(scores) {
    let sum = 0;
    let avg = 0;
    for (const grade of scores) {
        sum += grade;
    }

    avg = sum / scores.length;

    return avg;
}

function getGrade(score) {
    let letterGrade = "";

    if (score === 100) {
        letterGrade = "A++";
    } else if (score >= 90 && score <= 99) {
        letterGrade = "A";
    } else if (score >= 80 && score <= 89) {
        letterGrade = "B";
    } else if (score >= 70 && score <= 79) {
        letterGrade = "C";
    } else if (score >= 60 && score <= 69) {
        letterGrade = "D";
    } else if ( score <= 9) {
        letterGrade = "F";
    } else {
        letterGrade = "Error";
    }

    return letterGrade;

}
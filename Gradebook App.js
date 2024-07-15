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

function hasPassingGrade(score) {
    let passing = false;

    if (score >= 60) {
        passing = true;
    }

    return passing;
}

function studentMsg(totalScores, studentScore) {

    let studentScoreMsg = "";

    if (studentScore >= 60) {
        studentScoreMsg = "You passed the course.";
    } else {
        studentScoreMsg = "You failed the course.";
    }


    return "Class average: " + getAverage(totalScores) + 
            ". Your grade: " + getGrade(studentScore) + ". " +
            studentScoreMsg;
}
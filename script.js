let question1 = document.querySelector('#question1');
question1.addEventListener("click", showMessage1);

let question2 = document.querySelector('#question2');
question2.addEventListener("click", showMessage2);

let question3 = document.querySelector('#question3');
question3.addEventListener("click", showMessage3);

let question4 = document.querySelector('#question4');
question4.addEventListener("click", showMessage4);

let question5 = document.querySelector('#question5');
question5.addEventListener("click", showMessage5);

let question6 = document.querySelector('#question6');
question6.addEventListener("click", showMessage6);

let question7 = document.querySelector('#question7');
question7.addEventListener("click", showMessage7);

let question8 = document.querySelector('#question8');
question8.addEventListener("click", showMessage8);

let question9 = document.querySelector('#question9');
question9.addEventListener("click", showMessage9);

let question10 = document.querySelector('#question10');
question10.addEventListener("click", showMessage10);

let countRightAnswers = 0;
let countQuestions = 0;
let countWrongAnswers = 0;

let answers = {
    question1: "c",
    question2: "d",
    question3: "b",
    question4: "d",
    question5: "b",
    question6: "a",
    question7: "d",
    question8: "b",
    question9: "d",
    question10: "a",
}

let result = document.querySelector('#result');
result.style.fontSize = "1.5em";
result.innerHTML = `Верных ответов: ${countRightAnswers} из ${countQuestions} вопросов!`;

function showMessage1() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question1) {
        question1.append(question1_answer_text = document.createElement('p'));
        question1_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question1').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question1.append(question1_answer_text = document.createElement('p'));
        question1_answer_text.innerHTML = "Верный ответ: C ";
        document.querySelector('#question1').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage2() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question2) {
        question2.append(question2_answer_text = document.createElement('p'));
        question2_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question2').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question2.append(question2_answer_text = document.createElement('p'));
        question2_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector('#question2').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;

}

function showMessage3() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question3) {
        question3.append(question3_answer_text = document.createElement('p'));
        question3_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question3').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question3.append(question3_answer_text = document.createElement('p'));
        question3_answer_text.innerHTML = "Верный ответ: B ";
        document.querySelector('#question3').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage4() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question4) {
        question4.append(question4_answer_text = document.createElement('p'));
        question4_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question4').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question4.append(question4_answer_text = document.createElement('p'));
        question4_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector('#question4').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage5() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question5) {
        question5.append(question5_answer_text = document.createElement('p'));
        question5_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question5').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question5.append(question5_answer_text = document.createElement('p'));
        question5_answer_text.innerHTML = "Верный ответ: B ";
        document.querySelector('#question5').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage6() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question6) {
        question6.append(question6_answer_text = document.createElement('p'));
        question6_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question6').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question6.append(question6_answer_text = document.createElement('p'));
        question6_answer_text.innerHTML = "Верный ответ: A ";
        document.querySelector('#question6').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage7() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question7) {
        question7.append(question7_answer_text = document.createElement('p'));
        question7_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question7').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question7.append(question7_answer_text = document.createElement('p'));
        question7_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector('#question7').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов:${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage8() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question8) {
        question8.append(question8_answer_text = document.createElement('p'));
        question8_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question8').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question8.append(question8_answer_text = document.createElement('p'));
        question8_answer_text.innerHTML = "Верный ответ: B ";
        document.querySelector('#question8').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage9() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question9) {
        question9.append(question9_answer_text = document.createElement('p'));
        question9_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question9').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question9.append(question9_answer_text = document.createElement('p'));
        question9_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector('#question9').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}

function showMessage10() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    countQuestions++;
    if (userAnswer == answers.question10) {
        question10.append(question10_answer_text = document.createElement('p'));
        question10_answer_text.innerHTML = "Правильно!";
        document.querySelector('#question10').style.backgroundColor = "green";
        countRightAnswers++;
    } else {
        question10.append(question10_answer_text = document.createElement('p'));
        question10_answer_text.innerHTML = "Верный ответ: A ";
        document.querySelector('#question10').style.backgroundColor = "red";
        countWrongAnswers++;
    }
    result.innerHTML = `Верных ответов: ${countRightAnswers} <br> Неверных ответов: ${countWrongAnswers} из ${countQuestions} вопросов!`;
}


let quession1 = document.querySelector('#quession1');
quession1.addEventListener("click", showMessage1);

let quession2 = document.querySelector('#quession2');
quession2.addEventListener("click", showMessage2);

let quession3 = document.querySelector('#quession3');
quession3.addEventListener("click", showMessage3);

let quession4 = document.querySelector('#quession4');
quession4.addEventListener("click", showMessage4);

let quession5 = document.querySelector('#quession5');
quession5.addEventListener("click", showMessage5);

let quession6 = document.querySelector('#quession6');
quession6.addEventListener("click", showMessage6);

let quession7 = document.querySelector('#quession7');
quession7.addEventListener("click", showMessage7);

let quession8 = document.querySelector('#quession8');
quession8.addEventListener("click", showMessage8);

let quession9 = document.querySelector('#quession9');
quession9.addEventListener("click", showMessage9);

let quession10 = document.querySelector('#quession10');
quession10.addEventListener("click", showMessage10);

let count_right_answers = 0;
let count_questions = 0;
let count_wrong_answers = 0;


let answers = {
    quession1: "c",
    quession2: "d",
    quession3: "b",
    quession4: "d",
    quession5: "b",
    quession6: "a",
    quession7: "d",
    quession8: "b",
    quession9: "d",
    quession10: "a",
}

let result = document.querySelector("#" + 'result');
result.style.fontSize = "1.5em";
result.innerHTML = `Верных ответов: ${count_right_answers} из ${count_questions} вопросов!`;



function showMessage1() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession1) {
        quession1.append(quession1_answer_text = document.createElement('p'));
        quession1_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession1').style.backgroundColor = "green";
        count_right_answers++;
    }

    else {
        quession1.append(quession1_answer_text = document.createElement('p'));
        quession1_answer_text.innerHTML = "Верный ответ: C ";
        document.querySelector("#" + 'quession1').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;

}
function showMessage2() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession2) {
        quession2.append(quession2_answer_text = document.createElement('p'));
        quession2_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession2').style.backgroundColor = "green";
        count_right_answers++;
    }

    else {
        quession2.append(quession2_answer_text = document.createElement('p'));
        quession2_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector("#" + 'quession2').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;

}

function showMessage3() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession3) {
        quession3.append(quession3_answer_text = document.createElement('p'));
        quession3_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession3').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession3.append(quession3_answer_text = document.createElement('p'));
        quession3_answer_text.innerHTML = "Верный ответ: B ";
        document.querySelector("#" + 'quession3').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage4() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession4) {
        quession4.append(quession4_answer_text = document.createElement('p'));
        quession4_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession4').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession4.append(quession4_answer_text = document.createElement('p'));
        quession4_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector("#" + 'quession4').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage5() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession5) {
        quession5.append(quession5_answer_text = document.createElement('p'));
        quession5_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession5').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession5.append(quession5_answer_text = document.createElement('p'));
        quession5_answer_text.innerHTML = "Верный ответ: B ";
        document.querySelector("#" + 'quession5').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage6() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession6) {
        quession6.append(quession6_answer_text = document.createElement('p'));
        quession6_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession6').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession6.append(quession6_answer_text = document.createElement('p'));
        quession6_answer_text.innerHTML = "Верный ответ: A ";
        document.querySelector("#" + 'quession6').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage7() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession7) {
        quession7.append(quession7_answer_text = document.createElement('p'));
        quession7_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession7').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession7.append(quession7_answer_text = document.createElement('p'));
        quession7_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector("#" + 'quession7').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов:${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage8() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession8) {
        quession8.append(quession8_answer_text = document.createElement('p'));
        quession8_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession8').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession8.append(quession8_answer_text = document.createElement('p'));
        quession8_answer_text.innerHTML = "Верный ответ: B ";
        document.querySelector("#" + 'quession8').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage9() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession9) {
        quession9.append(quession9_answer_text = document.createElement('p'));
        quession9_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession9').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession9.append(quession9_answer_text = document.createElement('p'));
        quession9_answer_text.innerHTML = "Верный ответ: D ";
        document.querySelector("#" + 'quession9').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}

function showMessage10() {
    let userAnswer = prompt("Введите ваш правильный ответ").toLowerCase();
    count_questions++;
    if (userAnswer == answers.quession10) {
        quession10.append(quession10_answer_text = document.createElement('p'));
        quession10_answer_text.innerHTML = "Правильно!";
        document.querySelector("#" + 'quession10').style.backgroundColor = "green";
        count_right_answers++;
    }
    else {
        quession10.append(quession10_answer_text = document.createElement('p'));
        quession10_answer_text.innerHTML = "Верный ответ: A ";
        document.querySelector("#" + 'quession10').style.backgroundColor = "red";
        count_wrong_answers++;
    }
    result.innerHTML = `Верных ответов: ${count_right_answers} <br> Неверных ответов: ${count_wrong_answers} из ${count_questions} вопросов!`;
}


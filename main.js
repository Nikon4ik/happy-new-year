function handleFirstButtonClick() {
    const firstScreen = document.querySelector('.first-screen');
    const secondScreen = document.querySelector('.second-screen');
    
    firstScreen.classList.remove('active');
    secondScreen.classList.add('active');
}
function handleSecondtButtonClick() {
    const secondScreen = document.querySelector('.second-screen');
    const thirdScreen = document.querySelector('.third-screen');
    const correctAnswer = document.querySelector('#second-screen_fourth');
    const incorrectAnswer = document.querySelector('.second-incorrect');
    if(correctAnswer.checked) {
        incorrectAnswer.classList.remove('active');
        secondScreen.classList.remove('active');
        thirdScreen.classList.add('active');
    }
    else {
        incorrectAnswer.classList.add('active');
    }
}

function handleThirdButtonClick() {
    const thirdScreen = document.querySelector('.third-screen');
    const fourthScreen = document.querySelector('.fourth-screen');
    const correctAnswer = document.querySelector('#third-screen_second');
    const incorrectAnswer = document.querySelector('.third-incorrect');
    if(correctAnswer.checked) {
        incorrectAnswer.classList.remove('active');
        thirdScreen.classList.remove('active');
        fourthScreen.classList.add('active');
    }
    else {
        incorrectAnswer.classList.add('active');
    }
}

function handleFourthButtonClick() {
    const fourthScreen = document.querySelector('.fourth-screen');
    const fifthScreen = document.querySelector('.fifth-screen');
    const correctAnswer = document.querySelector('#fourth-screen_third');
    const incorrectAnswer = document.querySelector('.fourth-incorrect');
    if(correctAnswer.checked) {
        incorrectAnswer.classList.remove('active');
        fourthScreen.classList.remove('active');
        fifthScreen.classList.add('active');
    }
    else {
        incorrectAnswer.classList.add('active');
    }
}

function handleFifthButtonClick() {
    const fifthScreen = document.querySelector('.fifth-screen');
    const sixthScreen = document.querySelector('.sixth-screen');
    const firstCorrectAnswer = document.querySelector('#fifth-screen_first');
    const secondCorrectAnswer = document.querySelector('#fifth-screen_second');
    const thirdCorrectAnswer = document.querySelector('#fifth-screen_third');
    const fourthCorrectAnswer = document.querySelector('#fifth-screen_fourth');
    const incorrectAnswer = document.querySelector('.fifth-incorrect');
    if(
        firstCorrectAnswer.checked && 
        secondCorrectAnswer.checked &&
        thirdCorrectAnswer.checked &&
        fourthCorrectAnswer.checked
    ) {
        incorrectAnswer.classList.remove('active');
        fifthScreen.classList.remove('active');
        sixthScreen.classList.add('active');
    }
    else {
        incorrectAnswer.classList.add('active');
    }
}

function handleSixthButtonClick() {
    const sixthScreen = document.querySelector('.sixth-screen');
    const seventhScreen = document.querySelector('.seventh-screen');
    const correctAnswer = document.querySelector('#sixth-screen_first');
    const incorrectAnswer = document.querySelector('.sixth-incorrect');
    if(correctAnswer.checked) {
        incorrectAnswer.classList.remove('active');
        sixthScreen.classList.remove('active');
        seventhScreen.classList.add('active');
    }
    else {
        incorrectAnswer.classList.add('active');
    }
}

function handleSeventhButtonClick() {
    const seventhScreen = document.querySelector('.seventh-screen');
    const eighthScreen = document.querySelector('.eighth-screen');
    const correctAnswer = document.querySelector('#seventh-screen_second');
    const incorrectAnswer = document.querySelector('.seventh-incorrect');
    if(correctAnswer.checked) {
        incorrectAnswer.classList.remove('active');
        seventhScreen.classList.remove('active');
        eighthScreen.classList.add('active');
    }
    else {
        incorrectAnswer.classList.add('active');
    }
}

function eighthYes() {
    const eighthScreen = document.querySelector('.eighth-screen');
    const ninthScreen = document.querySelector('.ninth-screen');
    const incorrectAnswer = document.querySelector('.eighth-incorrect');

    incorrectAnswer.classList.remove('active');
    eighthScreen.classList.remove('active');
    ninthScreen.classList.add('active');
}

function eighthNo() {
    const incorrectAnswer = document.querySelector('.eighth-incorrect');
    incorrectAnswer.classList.add('active');
}

function ninthYes() {
    const ninthScreen = document.querySelector('.ninth-screen');
    const tenthScreen = document.querySelector('.tenth-screen');
    const incorrectAnswer = document.querySelector('.ninth-incorrect');

    incorrectAnswer.classList.remove('active');
    ninthScreen.classList.remove('active');
    tenthScreen.classList.add('active');
}

function ninthNo() {
    const incorrectAnswer = document.querySelector('.ninth-incorrect');
    incorrectAnswer.classList.add('active');
}

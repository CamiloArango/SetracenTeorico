let questionsDatabase = JSON.parse(localStorage.getItem('questions'));
let questions = questionsDatabase;

//start practice mode
startPractice();

//startPractice function
function startPractice() {

    let shuffledQuestions = []

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }

    }

    //confirmation
    console.log("practice started");

    let incorrectasArray = []
    let incorrectasUserSelection = []

    let number = 1;
    let correctas = 0;
    let incorrectas = 0;
    let buttonClicked = false;
    let selectedOption = 0;
    let correctOption = 0;
    //display first question and other details
    let remainingQ = document.getElementById("restantes");
    remainingQ.innerHTML = number + " / " + shuffledQuestions.length;

    let goodOnes = document.getElementById("contadorCorrectas");
    goodOnes.innerHTML = correctas;

    let badOnes = document.getElementById("contadorMalas");
    badOnes.innerHTML = incorrectas;

    let questionTitle = document.getElementById("nDePregunta");
    questionTitle.innerHTML = "Pregunta #" + number;

    let question = document.getElementById("pregunta");
    question.innerHTML = shuffledQuestions[number - 1]["question"];

    //display answers
    let answer1 = document.getElementById("answerA");
    answer1.innerHTML = shuffledQuestions[number - 1]["optionA"];

    let answer2 = document.getElementById("answerB");
    answer2.innerHTML = shuffledQuestions[number - 1]["optionB"];

    let answer3 = document.getElementById("answerC");
    answer3.innerHTML = shuffledQuestions[number - 1]["optionC"];

    let answer4 = document.getElementById("answerD");
    answer4.innerHTML = shuffledQuestions[number - 1]["optionD"];



    //read which option did the user pick
    document.getElementById("myForm").addEventListener('submit', function (e) {
        e.preventDefault();
        //if end of questionnaire
        if (number == shuffledQuestions.length) {
            window.location.href = "results.html"
        }
        //if the button was clicked twice (means the user moves to the next question):
        if (buttonClicked) {
            selectedOption.setAttribute("class", "form-check-input form-check-large");
            correctOption.setAttribute("class", "form-check-input form-check-large");
            number += 1;
            questionTitle.innerHTML = "Pregunta #" + number;
            question.innerHTML = shuffledQuestions[number - 1]["question"];
            answer1.innerHTML = shuffledQuestions[number - 1]["optionA"];
            answer2.innerHTML = shuffledQuestions[number - 1]["optionB"];
            answer3.innerHTML = shuffledQuestions[number - 1]["optionC"];
            answer4.innerHTML = shuffledQuestions[number - 1]["optionD"];
            buttonClicked = false;
        }
        //if the button was clicked once (means you display if he had the correct answer or not first)
        else {

            correctOption = document.getElementById(shuffledQuestions[number - 1]["correctOption"]);
            selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
            if (selectedOption) {
                console.log("User chose answer " + selectedOption.getAttribute("id"))
            }
            else {
                console.log("No option detected")
            }

            //add or rest score
            if (selectedOption.getAttribute("id").localeCompare(shuffledQuestions[number - 1]["correctOption"]) == 0) {
                correctas++;
                selectedOption.setAttribute("class", "form-check-input form-check-large is-valid");

            }
            else {
                incorrectas++;
                selectedOption.setAttribute("class", "form-check-input form-check-large is-invalid");
                correctOption.setAttribute("class", "form-check-input form-check-large is-valid");
                incorrectasArray.push(shuffledQuestions[number - 1]);
                incorrectasUserSelection.push(selectedOption.getAttribute("id"))
            }
            console.log("user has " + incorrectas + " wrong answers")
            console.log("user has " + correctas + " correct answers")

            badOnes.innerHTML = incorrectas;
            goodOnes.innerHTML = correctas;
            remainingQ.innerHTML = number + " / " + shuffledQuestions.length;
            buttonClicked = true;

            localStorage.setItem('correct', correctas);
            localStorage.setItem('incorrect', incorrectas);
            localStorage.setItem('incorrectasArray', JSON.stringify(incorrectasArray));
            localStorage.setItem('incorrectasUserSelection', JSON.stringify(incorrectasUserSelection));
        }
    });
}

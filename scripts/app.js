let questionsDatabase = JSON.parse(localStorage.getItem('questions'));
let questions = []

let mod = localStorage.getItem('selectedModule');
console.log(mod);


//START PRACTICE MODE
startPractice();

//START PRACTICE FUNCTION
function startPractice() {
    //confirmation
    console.log("practice started");

    //DETERMINE WHICH MODULE USER IS PRACTICING*****
    if(mod == "mod1"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "1"){questions.push(questionsDatabase[i])};
        }
    }

    if(mod == "mod2"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "2"){questions.push(questionsDatabase[i])};
        }
    }

    if(mod == "mod3"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "3"){questions.push(questionsDatabase[i])};
        }
    }

    if(mod == "mod4"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "4"){questions.push(questionsDatabase[i])};
        }
    }

    if(mod == "mod5"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "5"){questions.push(questionsDatabase[i])};
        }
    }
    if(mod == "mod6"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "6"){questions.push(questionsDatabase[i])};
        }
    }
    if(mod == "mod7"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "7"){questions.push(questionsDatabase[i])};
        }
    }
    if(mod == "mod8"){
        for(let i = 0; i < questionsDatabase.length; i++){
            if(questionsDatabase[i]["module"] == "8"){questions.push(questionsDatabase[i])};
        }
    }
    
    //SET VARIABLES******
    //array for keeping track of wrong questions (will be displayed on results.html)
    let incorrectasArray = []

    //array for keeping track of the wrong answers selected by user (will be displayed on results.html)
    let incorrectasUserSelection = []

    //tracker
    let number = 1;

    //confirmation button
    let buttonClicked = false;
    let selectedOption = 0;
    let correctOption = 0;
    let correctas = 0;
    let incorrectas = 0;
    //display first question and other details


    let remainingQ = document.getElementById("restantes");
    remainingQ.innerHTML = number + " / " + questions.length;

    let goodOnes = document.getElementById("contadorCorrectas");
    goodOnes.innerHTML = correctas;

    let badOnes = document.getElementById("contadorMalas");
    badOnes.innerHTML = incorrectas;

    let questionTitle = document.getElementById("nDePregunta");
    questionTitle.innerHTML = "Pregunta #" + number;

    let question = document.getElementById("pregunta");
    question.innerHTML = questions[number - 1]["question"];

    //display answers
    let answer1 = document.getElementById("answerA");
    answer1.innerHTML = questions[number - 1]["optionA"];

    let answer2 = document.getElementById("answerB");
    answer2.innerHTML = questions[number - 1]["optionB"];

    let answer3 = document.getElementById("answerC");
    answer3.innerHTML = questions[number - 1]["optionC"];

    let answer4 = document.getElementById("answerD");
    answer4.innerHTML = questions[number - 1]["optionD"];



    //read which option did the user pick
    document.getElementById("myForm").addEventListener('submit', function (e) {
        e.preventDefault();
        //if end of questionnaire
        if (number == questions.length) {
            window.location.href = "results.html"
        }
        //if the button was clicked twice (means the user moves to the next question):
        if (buttonClicked) {
            selectedOption.setAttribute("class", "form-check-input form-check-large");
            correctOption.setAttribute("class", "form-check-input form-check-large");
            number += 1;
            questionTitle.innerHTML = "Pregunta #" + number;
            question.innerHTML = questions[number - 1]["question"];
            answer1.innerHTML = questions[number - 1]["optionA"];
            answer2.innerHTML = questions[number - 1]["optionB"];
            answer3.innerHTML = questions[number - 1]["optionC"];
            answer4.innerHTML = questions[number - 1]["optionD"];
            buttonClicked = false;
        }
        //if the button was clicked once (means you display if he had the correct answer or not first)
        else {

            correctOption = document.getElementById(questions[number - 1]["correctOption"]);
            selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
            if (selectedOption) {
                console.log("User chose answer " + selectedOption.getAttribute("id"))
            }
            else {
                console.log("No option detected")
            }

            //add or rest score
            if (selectedOption.getAttribute("id").localeCompare(questions[number - 1]["correctOption"]) == 0) {
                correctas++;
                selectedOption.setAttribute("class", "form-check-input form-check-large is-valid");

            }
            else {
                incorrectas++;
                selectedOption.setAttribute("class", "form-check-input form-check-large is-invalid");
                correctOption.setAttribute("class", "form-check-input form-check-large is-valid");
                incorrectasArray.push(questions[number - 1]);
                incorrectasUserSelection.push(selectedOption.getAttribute("id"))
            }
            console.log("user has " + incorrectas + " wrong answers")
            console.log("user has " + correctas + " correct answers")

            badOnes.innerHTML = incorrectas;
            goodOnes.innerHTML = correctas;
            remainingQ.innerHTML = number + " / " + questions.length;
            buttonClicked = true;



            localStorage.setItem('correct', correctas);
            localStorage.setItem('incorrect', incorrectas);
            localStorage.setItem('incorrectasArray', JSON.stringify(incorrectasArray));
            localStorage.setItem('incorrectasUserSelection', JSON.stringify(incorrectasUserSelection));

        }
    });
}
     

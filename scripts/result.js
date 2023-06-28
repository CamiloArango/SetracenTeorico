let correctas = localStorage.getItem('correct');
let incorrectas = localStorage.getItem('incorrect');
let incorrectasArray = JSON.parse(localStorage.getItem('incorrectasArray'));
let incorrectasUserSelection = JSON.parse(localStorage.getItem('incorrectasUserSelection'));
console.log(incorrectasArray);
console.log(incorrectasUserSelection);

let total = parseInt(correctas) + parseInt(incorrectas);
console.log(total);

console.log(correctas);
console.log(incorrectas);

let result = document.getElementById("result");
let phrase = document.getElementById('suggest');
result.innerHTML = `Obtuvo ${correctas} correctas y ${incorrectas} incorrectas: `;

if (total == 133) {
    if (incorrectas > 33) {
        phrase.innerHTML = "Deberías practicar más";
    }
    else {
        phrase.innerHTML = "Estás listo para simular la prueba"
    }
}

if (total == 10) {
    if (incorrectas > 3) {
        phrase.innerHTML = "Deberías practicar más";
    }
    else {
        phrase.innerHTML = "Estás listo para simular la prueba"
    }
}

if (incorrectasArray.length > 0) {
    for (let i = 0; i < incorrectasArray.length; i++) {
        let verdadera = incorrectasArray[i]["correctOption"];

        let falsa = incorrectasUserSelection[i];

        let br = document.createElement("br");

        let box = document.getElementById("question-box");

        let title = document.createElement("h6");
        let pregunta = document.createTextNode(`#${incorrectasArray[i]["id"]} ${incorrectasArray[i]["question"]}`);

        let correctHolder = document.createElement("p");
        correctHolder.style = "color:green;"
        let correctOption = document.createTextNode(incorrectasArray[i][verdadera]);

        let incorrectHolder = document.createElement("p");
        incorrectHolder.style = "color:red;"
        let incorrectOption = document.createTextNode(incorrectasArray[i][falsa]);


        //append everything
        incorrectHolder.appendChild(incorrectOption);

        correctHolder.appendChild(correctOption);

        title.appendChild(pregunta);

        box.appendChild(title);
        box.appendChild(incorrectHolder)
        box.appendChild(correctHolder);
        box.appendChild(br);
    }
}

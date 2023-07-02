let correctas = localStorage.getItem('correct');
let incorrectas = localStorage.getItem('incorrect');
let incorrectasArray = JSON.parse(localStorage.getItem('incorrectasArray'));
let incorrectasUserSelection = JSON.parse(localStorage.getItem('incorrectasUserSelection'));


let total = parseInt(correctas) + parseInt(incorrectas);
let porcentaje = (total * 80) / 100;
console.log(porcentaje);

let result = document.getElementById("result");
let phrase = document.getElementById('suggest');
result.innerHTML = `Obtuvo ${correctas} correctas y ${incorrectas} incorrectas: `;


if(correctas < porcentaje){
    phrase.innerHTML = "Deberías practicar más";
}
else{
    phrase.innerHTML = "Estás listo para simular la prueba"
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

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let exerciseTitle = document.createElement('h1');
document.body.appendChild(exerciseTitle);
exerciseTitle.innerHTML = "Exercício 5.2 - JavaScript DOM";

// Adicione a tag div com a classe main-content como filho da tag body ;
let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.className = "main-content";

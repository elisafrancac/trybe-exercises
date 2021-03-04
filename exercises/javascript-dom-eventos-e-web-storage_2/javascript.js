// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let exerciseTitle = document.createElement('h1');
document.body.appendChild(exerciseTitle);
exerciseTitle.innerHTML = "Exercício 5.2 - JavaScript DOM";

// Adicione a tag div com a classe main-content como filho da tag body ;
let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.className = "main-content";

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerDiv = document.createElement('div');
document.body.lastElementChild.appendChild(centerDiv);
centerDiv.className = "center-content";

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let centerDivText = document.createElement('p');
document.body.lastElementChild.firstElementChild.appendChild(centerDivText);
centerDivText.innerHTML = "Cada dia um degrau, cada degrau uma luta, cada luta um aprendizado. O aprendizado é como o horizonte: não há limites. A sabedoria não vem do acerto, mas do aprendizado com os erros. Transforme cada novo desafio em oportunidades de aprendizado e crescimento.";

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftDiv = document.createElement('div');
document.body.lastElementChild.appendChild(leftDiv);
leftDiv.className = "left-content";
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

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightDiv = document.createElement('div');
document.body.lastElementChild.appendChild(rightDiv);
rightDiv.className = "right-content";

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let divImg = document.createElement('img');
divImg.className = "small-image";
divImg.src = "https://picsum.photos/200";
leftDiv.appendChild(divImg);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let elementsList = [
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez'
];
let unorderList = document.createElement('ul');
rightDiv.appendChild(unorderList);


let list = document.querySelector('.unorder-list');
for (let index = 0; index < elementsList.length; index += 1) {
    let listItem = elementsList[index];

    let elementListItem = document.createElement('li');
    elementListItem.innerHTML = listItem;
    unorderList.appendChild(elementListItem);
}
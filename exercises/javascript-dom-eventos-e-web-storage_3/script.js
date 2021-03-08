function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

//Exercicio 1

function createMonthDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const monthDays = dezDaysList[index];
        const monthDayListItem = document.createElement('li');
        monthDayListItem.innerHTML = monthDays;
        monthDayListItem.className = "day";

        if (monthDays === 24 || monthDays === 31) {
            monthDayListItem.classList.add('holiday');
        }
        else if (monthDays === 4 || monthDays === 11 || monthDays === 18) {
            monthDayListItem.classList.add('friday');
        }
        else if (monthDays === 25) {
            monthDayListItem.classList.add('holiday', 'friday');
        }

        monthDaysList.appendChild(monthDayListItem);
    }
}

createMonthDays();

// Exercicio 2
function createButton(string) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerText = string;
    buttonsContainer.appendChild(button);

}
createButton('Feriados')

// Exercicio 3
function changeColorHoliday() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let backgroundNewColor = 'white';

    holidayButton.addEventListener('click', function () {
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === backgroundNewColor) {
                holidays[index].style.backgroundColor = backgroundColor;
            } else {
                holidays[index].style.backgroundColor = backgroundNewColor;
            }
        }
    })
}
changeColorHoliday()

// Exercício 4
function createFridayButton(string) {
    const fridayButtonsContainer = document.querySelector('.buttons-container');
    const fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = string;
    fridayButtonsContainer.appendChild(fridayButton);

}
createFridayButton('Sexta-feira');

// Exercício 5
function changeFridayText(array) {
    let fridayButton = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let fridayNewText = 'Sexta-feira';

    fridayButton.addEventListener('click', fridayConditional);

    function fridayConditional() {
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML !== fridayNewText) {
                fridays[index].innerHTML = fridayNewText;
            } else {
                fridays[index].innerHTML = array[index];
            }
        }
    }
}
let fridaysArray = [4, 11, 18, 25];
changeFridayText(fridaysArray);

// Exercício 6
// Para realizar essa questão foi necessário consultar o gabarito.
function zoomMonthDays() {
    let zoomDay = document.getElementById('days');

    zoomDay.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '35px';
        event.target.style.fontWeight = '500';
    })
};
function monthDaysMouseOut() {
    let zoomDay = document.getElementById('days');

    zoomDay.addEventListener('mouseout', function (event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    })
};
zoomMonthDays();
monthDaysMouseOut();


// Exercício 7
function customTask(stringTask) {

    let tasks = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = stringTask;
    tasks.appendChild(taskName);
}

customTask('Cozinhar:');

// Exercício 8
function subtitleTask(subtitleColor) {

    let tasks = document.querySelector('.my-tasks');
    let taskBackground = document.createElement('div');

    taskBackground.className = 'task';
    taskBackground.style.backgroundColor = subtitleColor;
    tasks.appendChild(taskBackground);
}
subtitleTask('green');

//Para as questões 9 e 10 precisei do auxílio do gabarito.
// Exercício 9
function selectTask() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function (event) {
        if (selectedTask.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
};

selectTask();

// Exercício 10
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', function (event) {
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
};

setDayColor();


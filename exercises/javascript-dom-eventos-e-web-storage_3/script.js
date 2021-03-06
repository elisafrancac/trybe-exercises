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

    for (let index = 0; index <dezDaysList.length; index += 1) {
        const monthDays = dezDaysList[index];
        const monthDayListItem = document.createElement('li');
        monthDayListItem.innerHTML = monthDays;
        monthDayListItem.className = "day";

        if (monthDays === 24 | monthDays === 31) {
            monthDayListItem.className = "day holliday";
        }
        else if (monthDays === 4 | monthDays === 11 | monthDays === 18) {
            monthDayListItem.className = "day friday";
        }
        else if (monthDays === 25){
            monthDayListItem.className = "day holliday friday";
        }

        monthDaysList.appendChild(monthDayListItem);
    }
}   

    createMonthDays();
  
  // Exercicio 2
function createButton(){
    const buttonsContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.id = 'btn-holiday';
    buttonsContainer.appendChild(button);
    console.log(button);

}
    createButton()


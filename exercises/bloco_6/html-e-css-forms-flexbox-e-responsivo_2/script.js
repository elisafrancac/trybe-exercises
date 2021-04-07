function crateStatesOptions() {
   let statesSelect = document.querySelector('#estado');
      
   let states = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' },
  ]
  
  states.forEach((state) => {
    for (let uf in state) {
      let stateName = state[uf];
      let stateOption = document.createElement('option');
      stateOption.value = uf;
      stateOption.innerText = stateName;
      statesSelect.appendChild(stateOption);
    }
  });

}

  function divIformations() {
    let divContent = document.querySelector('.form_infos');
    const name = document.querySelector('#name');
    const eMail = document.querySelector('#email');
    const cpf = document.querySelector('#cpf');
    const address = document.querySelector('#endereco');
    const city = document.querySelector('#cidade');
    const state = document.querySelector('#estado');
    const homeType = document.querySelector('#tipo-moradia1');
    const abstract = document.querySelector('#resumo-curriculo');
    const position = document.querySelector('#cargo');
    const positionAbstract = document.querySelector('#descricao-cargo');
    const lastJobDate = document.querySelector('#datepicker');

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `Nome: ${name.value}`; 
    divContent.appendChild(nameElement);

    let emailElement = document.createElement('p');
    emailElement.innerHTML = `E-mail: ${eMail.value}`; 
    divContent.appendChild(emailElement);

    let cpfElement = document.createElement('p');
    cpfElement.innerHTML = `CPF: ${cpf.value}`; 
    divContent.appendChild(cpfElement);

    let addressElement = document.createElement('p');
    addressElement.innerHTML = `Endereço: ${address.value}`; 
    divContent.appendChild(addressElement);

    let cityElement = document.createElement('p');
    cityElement.innerHTML = `Cidade: ${city.value}`; 
    divContent.appendChild(cityElement);

    let stateElement = document.createElement('p');
    stateElement.innerHTML = `Estado: ${state.value}`; 
    divContent.appendChild(stateElement);

    let homeElement = document.createElement('p');
    homeElement.innerHTML = `Tipo de moradia: ${homeType.value}`; 
    divContent.appendChild(homeElement);

    let abstractElement = document.createElement('p');
    abstractElement.innerHTML = `Resumo do Currículo: ${abstract.value}`; 
    divContent.appendChild(abstractElement);

    let positionElement = document.createElement('p');
    positionElement.innerHTML = `Cargo: ${position.value}`; 
    divContent.appendChild(positionElement);

    let posAbsElement = document.createElement('p');
    posAbsElement.innerHTML = `Descrição do cargo: ${positionAbstract.value}`; 
    divContent.appendChild(posAbsElement);

    let lastJobElement = document.createElement('p');
    lastJobElement.innerHTML = `Data de início no último emprego: ${lastJobDate.value}`; 
    divContent.appendChild(lastJobElement);
  }

  function clickSubmit() {
      const form = document.querySelector('.form');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        divIformations();
      })
  }

  function clickClear() {
    let divContent = document.querySelector('.form_infos');
    let clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', function () {
      divContent.innerHTML = '';
    });
  }

window.onload = function startSession() {
    crateStatesOptions();
    clickSubmit();
    clickClear();
};


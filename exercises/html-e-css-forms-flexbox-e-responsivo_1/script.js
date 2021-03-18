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
// Para as duas funções seguintes(data) consultei o gabarito, fiz alteração na const year da primeira função;
function validateData(data) {
    if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
        const day = data.substr(0, 2);
        const month = data.substr(3, 2);
        const year = data.substr(6);
        if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
            return true;
        }
    }
    return false;
}

function checkData() {
    const inputData = document.querySelector('.input-data');
    let data = inputData.value;
    const userData = validateData(data);
    if (!userData && data.length) {
        inputData.value = '';
        alert('data invalida');
        return false;
    }
    return userData;
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
    const lastJobDate = document.querySelector('#data-inicio');

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
        checkData();
        divIformations();
    })
}

window.onload = function startSession() {
    crateStatesOptions();
    clickSubmit()
};
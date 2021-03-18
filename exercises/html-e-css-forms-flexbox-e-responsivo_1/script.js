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

 window.onload = function startSession() {
    crateStatesOptions();
};
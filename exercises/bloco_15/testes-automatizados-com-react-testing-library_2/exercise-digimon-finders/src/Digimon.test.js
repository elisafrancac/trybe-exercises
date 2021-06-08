import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
    const digimonMock = {
    name: "Agumon",
    img: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie"
  }

  it('testa componentes na tela', async () => {
    const { getByTestId } = render(<Digimon digimon={ digimonMock } />)
    const digimonName = getByTestId("digimonName");
    const digimonLevel = getByTestId("digimonLevel");
    const digimonImg = getByTestId("digimonImg");

    expect(digimonName).toBeInTheDocument();
    expect(digimonLevel).toBeInTheDocument();
    expect(digimonImg).toBeInTheDocument();
  });
});
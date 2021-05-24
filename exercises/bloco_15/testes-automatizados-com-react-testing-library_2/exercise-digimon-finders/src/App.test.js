import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {

  test('exibe texto de pesquisa', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('exibe input e botão de pesquisa', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    const button = getByTestId("buttonSearch");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Verifica se o input é digitável', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    userEvent.type(input, 'ola');

    expect(input).toHaveValue('ola');
  });

});
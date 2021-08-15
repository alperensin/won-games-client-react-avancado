import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Logo from '.';

describe('🧪 <Logo />', () => {
  it('Should render a white label by default', () => {
    // Renderizar o component ´render´
    renderWithTheme(<Logo />);
    // Selecionar o elemento a ser testado ´screen´ (queries) - getByLabel...
    // Expect - (Assertion / Asserção) - Comparação - Análise (espero que renderize a logo branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('Should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('Should render a normal logo when size is default', () => {
    renderWithTheme(<Logo size="normal" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('Should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('Should render a bigger logo without text if hidenOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });
});

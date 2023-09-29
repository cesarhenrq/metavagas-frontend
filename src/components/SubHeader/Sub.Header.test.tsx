/* eslint-disable testing-library/no-node-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { render, screen } from '@testing-library/react';

import SubHeader from './Sub.header';

describe('SubHeader component', () => {
  beforeEach(() => {
    render(<SubHeader />);
  });
  it('should text be defined', () => {
    const headerTextElement = screen.getByText(
      'MAIS DE 12.000 VAGAS DE TECNOLOGIA, REUNIDAS EM UM SÓ LUGAR',
    );
    const subHeaderTextElement = screen.getByText('Encontre a sua vaga de');
    const subHeaderTextElementReact = screen.getByText('react');

    (expect as any)(headerTextElement).toBeDefined();
    (expect as any)(subHeaderTextElement).toBeDefined();
    (expect as any)(subHeaderTextElementReact).toBeDefined();
  });

  it('should image be defined', () => {
    const imgElement = document.querySelector('img') as HTMLImageElement;
    (expect as any)(imgElement).toBeDefined();
    (expect as any)(imgElement.alt).toContain(
      'homem sorrindo, com camisa da arnia e segurando um notebook',
    );
  });
});

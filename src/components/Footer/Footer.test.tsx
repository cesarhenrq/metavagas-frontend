import { render, screen } from '@testing-library/react';

import Footer from './Footer';

import { BrowserRouter } from 'react-router-dom';

describe('<Footer />', () => {
  beforeEach(() => {
    render(
      <>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </>,
    );
  });

  it('should render the footer', () => {
    screen.getByTestId('footer');
  });

  it('should render the line', () => {
    screen.getByTestId('line');
  });

  it('should render the logo', () => {
    screen.getByTestId('logo');
  });

  it('should render contact info', () => {
    screen.getByTestId('contact-info');
  });

  it('should render text "Contato e Endereço"', () => {
    screen.getByText('Contato e Endereço');
  });

  it('should render text "4003-5442"', () => {
    screen.getByText('4003-5442');
  });

  it('should render adress info', () => {
    screen.getByTestId('contact-info-adress');
  });

  it('should render the phone icon', () => {
    screen.getByTestId('phone-icon');
  });

  it('should render the email icon', () => {
    screen.getByTestId('email-icon');
  });

  it('should render the location icon', () => {
    screen.getByTestId('location-icon');
  });

  it('should render auth button', () => {
    screen.getByTestId('auth-buttons');
  });
});

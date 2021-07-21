import React from 'react';
import AppMenu from '.';
import { render, screen } from '../../../../../infra/test/testUtils';

describe('<PublicMenu />', () => {
  test('renders its buttons', () => {
    render(<AppMenu />);

    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });
});

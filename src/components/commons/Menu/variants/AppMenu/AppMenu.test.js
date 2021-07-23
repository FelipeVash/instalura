import React from 'react';
import AppMenu from '.';
import { render, screen } from '../../../../../infra/test/testUtils';

describe('<AppMenu />', () => {
  test('renders its buttons', () => {
    render(<AppMenu />);

    expect(screen.getByRole('button', { name: /post/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pesquisa/i })).toBeInTheDocument();
  });
});

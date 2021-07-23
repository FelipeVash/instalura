import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';
import Menu from './index';

describe('<Menu />', () => {
  describe('when it receives variant prop', () => {
    describe('with the "public" value', () => {
      test('it renders the PublicMenu()', () => {
        const variant = 'public';
        render(
          <Menu variant={variant} />,
        );

        expect(screen.getByRole('navigation').className).toMatch(/publicmenu/i);
      });
    });

    describe('with the "app" value', () => {
      test('it renders the AppMenu()', () => {
        const variant = 'app';
        render(
          <Menu variant={variant} />,
        );

        expect(screen.getByRole('navigation').className).toMatch(/appmenu/i);
      });
    });
  });
});

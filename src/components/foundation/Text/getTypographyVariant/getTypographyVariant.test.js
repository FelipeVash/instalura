import getTypographyVariant from '.';

const VariantsMapMock = {
  testVariant1: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '1',
  },
  testVariant2: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.25',
  },
  testVariant3: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
  },
};

describe('getTypographyVariant()', () => {
  describe('when it is called in a component with a string variant', () => {
    test('returns the CSS for a single typography variant', () => {
      const internalFunc = getTypographyVariant(VariantsMapMock);
      const returnedCssObject = internalFunc({ variant: 'testVariant1' });
      expect(returnedCssObject).toMatchObject(VariantsMapMock.testVariant1);
    });
  });

  describe('when it is called in a component with breakpoint object variant', () => {
    test('returns the CSS for the listed breakpoints', () => {
      const internalFunc = getTypographyVariant(VariantsMapMock);
      const returnedCss = internalFunc({
        variant: {
          xs: 'testVariant1',
          md: 'testVariant2',
        },
      });
      expect(returnedCss).toMatchSnapshot();
    });
  });

  describe('when it is called in a component without a variant', () => {
    test('should throw a error', () => {
      const internalFunc = getTypographyVariant(VariantsMapMock);
      expect(() => internalFunc({})).toThrow(new Error('The component must have a variant'));
    });
  });
});

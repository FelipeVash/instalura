import { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph1Bold: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: 500;
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,
};

export default function getTypographyVariant(VariantMap = TextStyleVariantsMap) {
  return ({ variant }) => {
    if (!variant) throw new Error('The component must have a variant');
    if (typeof variant === 'string') return VariantMap[variant];
    const breakpoints = Object.keys(variant);
    const typographyByBreakpoints = {};
    breakpoints.forEach((breakpoint) => {
      typographyByBreakpoints[breakpoint] = VariantMap[variant[breakpoint]];
    });

    return breakpointsMedia(typographyByBreakpoints);
  };
}

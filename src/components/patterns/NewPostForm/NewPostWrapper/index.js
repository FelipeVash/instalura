import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const NewPostWrapper = styled.form`
  position: relative;
  overflow-y: scroll;

  width: 375px;
  max-width: 100vw;

  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => (theme.currentActive === 'dark' && css`
    border: 1px solid ${theme.colors.borders.color};
    box-shadow: 0 10px 20px ${theme.colors.borders.color};
  `)}

  ${breakpointsMedia({
    md: css`
      overflow-y: initial;
    `,
  })}

  align-self: center;
  background-color: ${({ theme }) => theme.colors.background.color};
  padding: 56px 0 32px 0;
`;

export default NewPostWrapper;

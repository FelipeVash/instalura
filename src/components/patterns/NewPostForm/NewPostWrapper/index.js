import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const NewPostWrapper = styled.form`
  position: relative;
  overflow-y: scroll;

  width: 375px;
  max-width: 100vw;

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid white;
  box-shadow: 0 10px 20px black;

  ${breakpointsMedia({
    md: css`
      overflow-y: initial;
    `,
  })}

  align-self: center;
  background-color: #191919;
  padding: 56px 0 32px 0;
`;

export default NewPostWrapper;

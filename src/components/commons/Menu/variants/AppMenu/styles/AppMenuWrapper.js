import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../../theme/utils/breakpointsMedia';

const AppMenuWrapper = styled.nav`
  align-items: center;
  background-color: #191919;
  border: 2px solid white;
  border-radius: 15px;
  display: flex;
  font-family: 'Rubik', sans-serif;
  padding: 15px 15px;
  justify-content: space-between;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  ${breakpointsMedia({
    md: css`
      border-radius: 15px;
      justify-content: center;
      padding: 15px 15px;
      position: initial;
      width: 100%;
    `,
  })}
`;

AppMenuWrapper.LeftSide = styled.div`
  display: none;
  ${breakpointsMedia({
    md: css`
      align-items: center;
      justify-content: center;
      display: flex;
      width:100%;
      height: fit-content;
    `,
  })}
`;

AppMenuWrapper.RightSide = styled.div`
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  width:100%;
  height: fit-content;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
    `,
  })}
`;

export default AppMenuWrapper;

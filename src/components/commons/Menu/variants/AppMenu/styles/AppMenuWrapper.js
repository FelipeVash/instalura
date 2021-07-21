import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../../theme/utils/breakpointsMedia';

const AppMenuWrapper = styled.nav`
  align-items: center;
  display: flex;
  font-family: 'Rubik', sans-serif;
  justify-content: space-between;
  padding: 12px 28px;
  border: 2px solid white;
  border-radius: 15px;
  z-index: 10;
  background-color: #191919;

  ${breakpointsMedia({
    md: css`
      position: initial;
      border-radius: 15px;
      justify-content: flex-start;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 27px 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

AppMenuWrapper.LeftSide = styled.div`
  margin: 0;
  display: flex;
  width:50%;
  ${breakpointsMedia({
    md: css`
      display: flex;
      align-items: center;
    `,
  })}
`;

AppMenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  ${breakpointsMedia({
    md: {
      justifyContent: 'flex-end',
    },
  })}
`;

export default AppMenuWrapper;

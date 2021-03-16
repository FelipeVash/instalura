/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  img {
    width: 58px;
    margin-right: 23px;
    filter: invert(1);
  }
  p {
    color: #FFFFFF;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default FooterWrapper;

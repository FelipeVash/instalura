/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    ${propToStyle('marginTop')}
    ${propToStyle('width')}
    ${propToStyle('listStyle')}
    ${propToStyle('margin')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginRight')}
    ${propToStyle('alignItems')}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;

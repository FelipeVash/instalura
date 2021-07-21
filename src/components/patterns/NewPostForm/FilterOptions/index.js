import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import PostImage from '../../../commons/PostImage';
import Text from '../../../foundation/Text';
import Button from '../../../commons/Button';
import filterOptionsData from './filterOptionsData';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const FilterOptionsWrapper = styled.div`
  position: relative;

  &:hover {
    [name=progressBtn] {
      opacity: 0.75;
    }
  }
`;

const OptionButtonsContainer = styled.div`
  position: relative;

  scroll-behavior: smooth;

  width: 100%;
  display: flex;
  margin: 24px 0;
  overflow: hidden;

  &::before, &::after  {
    content: '';
    padding-right: 16px;
  }
`;

const OptionButton = styled(Button)`
  height: max-content;
  padding: 0px;
  margin: 0 8px;
  
  transition: background-color 500ms;
  
  &:hover, &:focus {
    opacity: 1;
  }

  ${({ theme, selected }) => (selected && css`
    background-color: ${theme.colors.primary.color};
    color: ${theme.colors.primary.contrast};
  `)}
`;

const ProgressButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.color};
  background-image: url('/icons/chevron.svg');
  background-repeat: no-repeat;
  background-position: center;

  font-size: 0;
  cursor: pointer;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;

  width: 24px;
  padding: 0;

  border: none;
  border-radius: 0;
  opacity: 0.75;

  ${breakpointsMedia({
    md: css`
      opacity: 0;
    `,
  })}

  transition: opacity 200ms;

  ${({ isLeft }) => (isLeft
    ? (css`
      left: 0;
      transform: rotate(180deg);
    `)
    : (css`
      right: 0;
    `
    ))};

    &:disabled {
      display: none;
    }
`;

const initialState = { index: 0 };
const lastFilterAnchor = filterOptionsData.length - 1;

function reduceAnchor(anchor, action) {
  switch (action) {
    case ('increment'): {
      if (anchor.index + 3 > lastFilterAnchor) return { index: lastFilterAnchor };
      return { index: anchor.index + 3 };
    }
    case ('decrement'): {
      if (anchor.index - 3 < 0) return { index: 0 };
      return { index: anchor.index - 3 };
    }
    default: throw new Error('Action argument is required');
  }
}

export default function FilterOptions({ filterClass, setFilterClass, imgSrc }) {
  const [anchor, updateAnchor] = useReducer(reduceAnchor, initialState);

  const isBackDisabled = anchor.index === 0;
  const isForwardDisabled = anchor.index === lastFilterAnchor;

  useEffect(() => {
    document.getElementById(`filterScrollAnchor${anchor.index}`).scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [anchor]);

  return (
    <FilterOptionsWrapper>
      <ProgressButton
        name="progressBtn"
        type="button"
        onClick={() => updateAnchor('decrement')}
        isLeft
        disabled={isBackDisabled}
      />
      <OptionButtonsContainer>
        {filterOptionsData.map((filter, index) => (
          <OptionButton
            id={`filterScrollAnchor${index}`}
            type="button"
            key={filter.name}
            name={filter.name}
            onClick={() => setFilterClass(filter.classString)}
            selected={filterClass === filter.classString}
            ghost
          >
            <PostImage imgSrc={imgSrc} filterClass={filter.classString} alt="Preview do filtro" width="88px" />
            <Text
              tag="p"
              margin="6px 0"
            >
              {filter.name}
            </Text>
          </OptionButton>
        ))}
      </OptionButtonsContainer>
      <ProgressButton
        name="progressBtn"
        type="button"
        onClick={() => updateAnchor('increment')}
        disabled={isForwardDisabled}
      />
    </FilterOptionsWrapper>
  );
}

FilterOptions.defaultProps = {
  filterClass: undefined,
};

FilterOptions.propTypes = {
  filterClass: PropTypes.string,
  setFilterClass: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

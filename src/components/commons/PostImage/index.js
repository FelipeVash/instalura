import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const PostImageWrapper = styled.figure`
  position: relative;
  width: ${({ width }) => width || '100%'};
  padding-top: 100%;
  margin: 0;
  font-size: 0;
  border-radius: 15px;
  border: solid white;

  ${({ isPlaceholder }) => isPlaceholder && css`
    background-color: #d4d4d4;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;

      background-image: url('/icons/imgPlaceholder.svg');
      background-repeat: no-repeat;
      background-position: center;
      
      opacity: 0.1;
    }
  `}

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:15px;
  }
`;

export default function PostImage({
  imgSrc, filterClass, alt, width,
}) {
  const [hasLoaded, setHasLoaded] = useState(false);

  const hasImgSrc = imgSrc !== '';

  return (
    <PostImageWrapper
      className={hasLoaded && filterClass}
      width={width}
      isPlaceholder={!hasImgSrc || !hasLoaded}
    >
      {hasImgSrc && <img src={imgSrc} alt={alt} loading="lazy" onLoad={() => setHasLoaded(true)} />}
    </PostImageWrapper>
  );
}

PostImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  filterClass: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
};

PostImage.defaultProps = {
  alt: 'Imagem do post',
  filterClass: undefined,
  width: undefined,
};

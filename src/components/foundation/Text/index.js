import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';
import useWebsitePageContext from '../../wrappers/WebsitePage/context';
import getTypographyVariant from './getTypographyVariant';

export { TextStyleVariantsMap } from './getTypographyVariant';

const TextBase = styled.span`
  ${getTypographyVariant()}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export default function Text({
  tag,
  variant,
  children,
  href,
  cmsKey,
  ...props
}) {
  const websitePageContext = useWebsitePageContext();

  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {componentContent}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      // style
      // className
      // e ai vai
    >
      {componentContent}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: undefined,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';
import Text from '../../../../foundation/Text';

function formatNumber(number) {
  if (number < 1000) return number;
  if (number < 1000000) return `${(number / 1000).toFixed(0)}k`;
  return `${(number / 1000000).toFixed(0)}mi`;
}

const StatsBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 88px;

  ${breakpointsMedia({
    md: { paddingLeft: '0' },
  })}
`;

const StatWrapper = styled.div`
  margin-left: 0.5rem;

  ${breakpointsMedia({
    md: css`
      margin-left: 2rem;
    `,
    xl: css`
      margin-left: 4rem;
    `,
  })};

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

StatsBox.Stat = ({ statName, statValue }) => (
  <StatWrapper>
    <Text
      tag="h2"
      color="tertiary.main"
      variant={{ xs: 'paragraph1Bold', md: 'subTitle' }}
    >
      {formatNumber(statValue)}
    </Text>
    <Text
      tag="p"
      color="tertiary.main"
      variant={{ xs: 'smallestException', md: 'paragraph1' }}
    >
      {statName}
    </Text>
  </StatWrapper>
);

StatsBox.Stat.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};

export default StatsBox;
